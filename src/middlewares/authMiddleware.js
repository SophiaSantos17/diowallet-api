export async function authMiddleware(req, res, next) {
    const { authorization } = req.headers;
    console.log(authorization);
    next();
}