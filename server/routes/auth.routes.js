import express from "express";

import {
  logoutHandler,
  signinHandler,
  signupHandler,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/sign-up", signupHandler);

router.post("/sign-in", signinHandler);

router.post("/logout", logoutHandler);

export default router;
