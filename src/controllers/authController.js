import authService from "../services/authService.js";


function signup(req, res){
    const body = req.body;
    console.log(body);

    const resService =  authService.signup(body);

    res.send(resService);
}

export default {signup};