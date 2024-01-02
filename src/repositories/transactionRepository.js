

import TransactionSchema from "../schemas/Transaction.js"

async function create(data){
    return TransactionSchema.create(data)
}

async function findAllByUser(id){
    return await TransactionSchema.find({userId: id})
}

async function editTransactionById(id, body) {
    return await TransactionSchema.findByIdAndUpdate(id, body, { new: true });
}

async function deleteByID(id){
    return await TransactionSchema.findByIdAndDelete(id);
}

export default {create, findAllByUser, deleteByID, editTransactionById}