<<<<<<< HEAD
import { Schema, model } from "mongoose";


const TransactionSchema = new Schema({
    value: {type: Number, required: true},
    description: {type: String, required: true},
    type: {type: String, required: true},
    userId: {type: Schema.Types.ObjectId, required: true, ref: "users"},
    cratedAt: {type: Date, default: Date.now()}
});

=======
import { Schema, model } from "mongoose";


const TransactionSchema = new Schema({
    value: {type: Number, required: true},
    description: {type: String, required: true},
    type: {type: String, required: true},
    userId: {type: Schema.Types.ObjectId, required: true, ref: "users"},
    cratedAt: {type: Date, default: Date.now()}
});

>>>>>>> 30cbff2e680a487f3724a443db416d827bb3f107
export default model("transactions", TransactionSchema);