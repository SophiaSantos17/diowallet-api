<<<<<<< HEAD


export async function authMiddleware(req, res, next){
    const {authorization} = req.headers;

    console.log(authorization);

    next();
=======


export async function authMiddleware(req, res, next){
    const {authorization} = req.headers;

    console.log(authorization);

    next();
>>>>>>> 30cbff2e680a487f3724a443db416d827bb3f107
}