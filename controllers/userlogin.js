const { User } = require('../models/user');
const jwt = require('jsonwebtoken');
const code = 'vishnu*12'

const renderLogin = (req, res) => {
    res.render('login');
};

const handleLogin = async (req, res) => {
    const { email, password } = req.body; 
    try {
        const user = await User.findOne({ Email: email });

        if (!user) {
            return res.status(404).send('User not found');
        }
        if (user.Password !== password) {
            return res.status(400).send('Incorrect password');
        }
        const token = jwt.sign({ userId: user._id }, code || process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/users');
    } catch (error) {
        console.error('Error in /login route:', error);
        res.status(500).send('Server error');
    }
};

module.exports = { handleLogin, renderLogin };
