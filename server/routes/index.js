import express from "express";

import rootRouter from "./root.routes.js";
import authRouter from "./auth.routes.js";

const router = express.Router();

router.use("/", rootRouter);
router.use("/api/auth", authRouter);

export default router;
