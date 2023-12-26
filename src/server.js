import express, { json } from "express";
import authRouter from "./routes/authRoutes.js";
import { connectDB } from "./config/database.js";


const app = express();

connectDB();
app.use(json());
app.use(authRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server rodando na porta ${port}`));