import express from "express";

import rootRouter from "./root.routes.js";
import authRouter from "./auth.routes.js";
import messageRouter from "./message.routes.js";
import userRouter from "./user.routes.js";

const router = express.Router();

router.use("/", rootRouter);
router.use("/api/auth", authRouter);
router.use("/api/messages", messageRouter);
router.use("/api/users", userRouter);

export default router;
