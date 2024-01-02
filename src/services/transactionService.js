<<<<<<< HEAD
import transactionRepository from "../repositories/transactionRepository.js";

async function create(body, id){
    if(!id) throw new Error("Id do usuario é obrigatório");

    return await transactionRepository.create({...body, userId: id})
}


=======
import transactionRepository from "../repositories/transactionRepository.js";

async function create(body, id){
    if(!id) throw new Error("Id do usuario é obrigatório");

    return await transactionRepository.create({...body, userId: id})
}


>>>>>>> 30cbff2e680a487f3724a443db416d827bb3f107
export default {create}