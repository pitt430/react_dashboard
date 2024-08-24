const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const register = (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    User.createUser(username, email, hashedPassword, (err, result) => {
        if (err) return res.status(500).send('Error in registration');
        res.status(201).send('User registered');
    });
};

const login = (req, res) => {
    const { username, password } = req.body;

    User.findUserByUsername(username, (err, results) => {
        if (err || results.length === 0) return res.status(401).send('Invalid credentials');

        const user = results[0];
        const isValidPassword = bcrypt.compareSync(password, user.password);
        if (!isValidPassword) return res.status(401).send('Invalid credentials');

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ auth: true, token });
    });
};

module.exports = {
    register,
    login
};
