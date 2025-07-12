import e from "express";
import cors from 'cors';
import dotenv from 'dotenv';
// import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoutes.js";
// import { register } from "./controller/authController";
dotenv.config();

const app = e();
app.use(cors())
app.use(e.json());

app.get("/",(req,res)=>{
    res.status(200).json({message: "Welcome to the backend of Oddo"});
})
app.use("/", authRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})