import bcrypt from "bcrypt";

function signup(body){
    const hasPassowrd = bcrypt.hashSync(body.passowrd, 10);
    return hasPassowrd;

}

export default {signup};