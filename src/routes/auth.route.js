import { Router} from "express";
import { callbackAuth } from "../controller/auth.controller.js";

const router = Router();

router.post("/callback",callbackAuth );

export default router;
