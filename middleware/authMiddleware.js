const authenticateJWT = (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        verifyToken(token)
            .then((user) => {
                req.user = user;
                next();
            })
            .catch(() => res.sendStatus(403)); 
    } else {
        res.sendStatus(401);
    }
};

module.exports = { authenticateJWT };