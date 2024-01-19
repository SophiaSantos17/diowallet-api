
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

async function editTransactionById(id, body) {
    if (!id) throw new Error("Id da transação é obrigatório");
    return await transactionRepository.editTransactionById(id, body);
}

async function findTransactionById(id) {
    if (!id) throw new Error("Id da transação é obrigatório");
    return await transactionRepository.findTransactionById(id);
}

async function deleteByID(id){
    if(!id) throw new Error("Id da transação é obrigatório");
    return await transactionRepository.deleteByID(id);
}

export default {create, findAllByUser, deleteByID, editTransactionById, findTransactionById}