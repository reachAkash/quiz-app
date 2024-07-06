import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signoutSuccess } from "@/redux/user/userSlice";

export function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((store: any) => store.user);
  console.log(currentUser);
  const handleSignout = () => {
    dispatch(signoutSuccess());
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="primary">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <img src={Logo} />
            {/* Akash */}
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <div>Trivia</div>
          </div>
          <div>Quiz</div>
          <div>Leaderboard</div>
        </div>
        <SheetFooter className="flex flex-col gap-2">
          {currentUser && (
            <div className="bg-secondary flex overflow-hidden items-center gap-2  rounded-md px-2 py-3">
              <img
                className="w-10 h-10 rounded-full"
                src={currentUser?.profilepic}
                alt="user image"
              />
              <div className="">
                <div>{currentUser?.name}</div>
                <div className="">{currentUser?.email}</div>
              </div>
            </div>
          )}
          {currentUser ? (
            <SheetClose asChild>
              <Button
                onClick={handleSignout}
                type="submit"
                className="hover:bg-red-100 bg-red-50 py-2 px-2 rounded-md font-medium text-destructive cursor-pointer"
              >
                Sign out
              </Button>
            </SheetClose>
          ) : (
            <>
              <SheetClose asChild>
                <Button
                  onClick={() => navigate("/signin")}
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600"
                >
                  Login
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  onClick={() => navigate("/signup")}
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600"
                >
                  Register
                </Button>
              </SheetClose>
            </>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
