
import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";
import { CreateTransaction } from "../schemas/validation/CreateTransaction.js";

const transactionRouter = Router();

transactionRouter.post(
    '/transactions', 
    authMiddleware,
    validationSchemaMiddleware(CreateTransaction),
    transactionController.create
);

transactionRouter.get(
    '/transactions', 
    authMiddleware,
    transactionController.findAllByUser
);

transactionRouter.put(
    '/transactions/:id', 
    authMiddleware,
    transactionController.editTransactionById
);

transactionRouter.delete(
    '/transactions/:id', 
    transactionController.deleteByID
)


export default transactionRouter;