<<<<<<< HEAD
import transactionService from "../services/transactionService.js";

async function create (req, res) {
    const body = req.body;
    const id = "658b3654e30cfa800ed9bd9d";

    try{
        const transaction = await transactionService.create(body, id);
        return res.status(201).send(transaction);
    }catch(err){
        res.status(409).send(err.message);
    }
}
=======
import transactionService from "../services/transactionService.js";

async function create (req, res) {
    const body = req.body;
    const id = "658b3654e30cfa800ed9bd9d";

    try{
        const transaction = await transactionService.create(body, id);
        return res.status(201).send(transaction);
    }catch(err){
        res.status(409).send(err.message);
    }
}
>>>>>>> 30cbff2e680a487f3724a443db416d827bb3f107
export default {create};