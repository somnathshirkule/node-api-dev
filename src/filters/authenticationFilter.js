
export const tokenValidator = (req, res, next) =>{
    let auth = req.headers.authorization;
    if(!auth) res.status(401).send({message: 'unauthorized'});
    else next();
};