<<<<<<< HEAD
import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const transactionRouter = Router();

transactionRouter.post(
    '/transactions', 
    authMiddleware, 
    transactionController.create
);

=======
import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const transactionRouter = Router();

transactionRouter.post(
    '/transactions', 
    authMiddleware, 
    transactionController.create
);

>>>>>>> 30cbff2e680a487f3724a443db416d827bb3f107
export default transactionRouter;