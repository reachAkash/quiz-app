import React from "react";
import Google from "@/assets/google.svg";
import { toast } from "sonner";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosConfig";
import { useDispatch } from "react-redux";
import { signInFailure, signInSuccess } from "@/redux/user/userSlice";

const OAuth = () => {
  const dispatch = useDispatch();
  const auth = getAuth(app);
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const data = await axiosInstance.post("/api/google", {
        name: resultsFromGoogle.user.displayName,
        email: resultsFromGoogle.user.email,
        profilepic: resultsFromGoogle.user.photoURL,
      });
      if (data.statusText == "OK" || data.statusText == "Created") {
        navigate("/");
        dispatch(signInSuccess(data.data.data));
        handleShowToast("Welcome! 🥳");
      }
      console.log(data);
    } catch (err) {
      dispatch(signInFailure(err.response.data.message));
    }
  };
  const handleShowToast = (text: string) => {
    toast(
      <span className="text-teal-500 font-semibold font-montserrat">
        {text}
      </span>
    );
  };
  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="w-full flex items-center justify-center gap-2 py-2 rounded-md bg-gray-50 hover:bg-gray-100 border"
    >
      <img
        src={Google}
        alt="Google Logo"
        width=""
        height=""
        className="w-6 h-6"
      />
      <span className="gsi-material-button-contents font-medium">Google</span>
    </button>
  );
};

export default OAuth;
