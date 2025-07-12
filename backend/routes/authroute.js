import { Router } from "express";
import { login, register } from "../controller/authController.js";

const authRouter = Router();

authRouter.get("/",(req,res)=>{
    try {
        res.status(200).json({ message: "User route is working" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });

    }
})

authRouter.post("/register", register);
authRouter.post("/login", login);

export default authRouter;

