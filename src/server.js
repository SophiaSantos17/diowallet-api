<<<<<<< HEAD
import express, { json } from "express";
import authRouter from "./routes/authRoutes.js";
import transactionRouter from "./routes/transactionRoutes.js";
import { connectDB } from "./config/database.js";


const app = express();

connectDB();
app.use(json());
app.use(authRouter);
app.use(transactionRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server rodando na porta ${port}`));
=======
import express, { json } from "express";
import authRouter from "./routes/authRoutes.js";
import transactionRouter from "./routes/transactionRoutes.js";
import { connectDB } from "./config/database.js";


const app = express();

connectDB();
app.use(json());
app.use(authRouter);
app.use(transactionRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server rodando na porta ${port}`));
>>>>>>> 30cbff2e680a487f3724a443db416d827bb3f107
