const express = require("express");
const {
  getData,
  userAuthSignup,
  userAuthSignin,
  userAuthGoogle,
} = require("../controllers/auth.controller");
const router = express.Router();

router.get("/check", getData);
router.post("/signup", userAuthSignup);
router.post("/signin", userAuthSignin);
router.post("/google", userAuthGoogle);

module.exports = router;
