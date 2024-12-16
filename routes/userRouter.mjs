import express from "express";
import { login, register, verfyEmail } from "../controllers/authController.mjs";

let router = express.Router();


router.post('/create',register)
router.post('/login',login)
router.post('/verify-email',verfyEmail)
export default router