
import transactionRepository from "../repositories/transactionRepository.js";
import Transaction from "../schemas/Transaction.js";

async function create(body, id){
    if(!id) throw new Error("Id do usuario é obrigatório");

    return await transactionRepository.create({...body, userId: id})
}

async function findAllByUser(id){
    if(!id) throw new Error("Id do usuario é obrigatório");
    return await transactionRepository.findAllByUser(id);
}

export default {create, findAllByUser}