const { User } = require('../models/user');

const Getalluser = async (req, res) => {
    try {
        const users = await User.find({});
        res.render('users', { users });
    } catch (error) {
        res.status(500).send('Server error');
    }
};

const Adduser = async (req, res) => {
    const newUser = {
        Name: req.body.name,
        Email: req.body.email,
        Gender: req.body.gender,
        Password: req.body.password,
    };

    if (!newUser.Name || !newUser.Email || !newUser.Gender || !newUser.Password) {
        return res.status(400).send('Please fill in all the fields.');
    }

    try {
        await User.create(newUser);
        return res.redirect('/login');
    } catch (err) {
        return res.status(400).send(err.message);
    }
};

const DeletebyId = async (req, res) => {
    try {
        const useris = await User.findByIdAndDelete(req.params.id);
        if (!useris) {
            return res.status(404).json({ msg: 'User not found' });
        }
        return res.json({ msg: 'User successfully deleted' });
    } catch (error) {
        return res.status(500).json({ msg: 'Error while deleting user', error: error.message });
    }
};

const updatebyId = async (req, res) => {
    try {
        const useris = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!useris) {
            return res.status(404).json({ msg: 'User not found' });
        }
        return res.json({ msg: 'success', id: useris.id });
    } catch (error) {
        return res.status(500).json({ msg: 'Error while updating user', error: error.message });
    }
};

const getbyId = async (req, res) => {
    try {
        const userid = await User.findById(req.params.id);
        if (!userid) {
            return res.status(404).json({ msg: 'User not found' });
        }
        return res.status(201).json(userid);
    } catch (error) {
        return res.status(500).json({ msg: 'Error while retrieving user', error: error.message });
    }
};

module.exports = {
    Getalluser,
    Adduser,
    DeletebyId,
    updatebyId,
    getbyId
};
