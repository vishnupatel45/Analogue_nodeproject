const jwt = require('jsonwebtoken');
const code = 'vishnu*12'

const generateToken = (user) => {
    return jwt.sign(user,code || process.env.JWT_SECRET, { expiresIn: '1h' });
};

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token,code || process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                reject(err);
            } else {
                resolve(decoded);
            }
        });
    });
};

module.exports = {
    generateToken,
    verifyToken
};
