/* router General */

import { Router } from "express"
import apiRouter from "./api/index.router.js";

const router = Router()

router.use("/api",apiRouter)

export default router