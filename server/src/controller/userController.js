const dbConnect = require('../config/dbConnect');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const registerUser = async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(400).json({message: 'Email and password are required'});
    }

    const checkUserQuery = 'SELECT * FROM users WHERE email = ?';
    dbConnect.query(checkUserQuery, [email], async (err, results) => {
        if (err) {
            return res.status(500).json({message: 'Database error', error: err});
        }
        if (results.length > 0) {
            return res.status(400).json({message: 'User already exists'});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const insertUserQuery = 'INSERT INTO users (email, password) VALUES (?, ?)';
        dbConnect.query(insertUserQuery, [email, hashedPassword], (err, results) => {
            if (err) {
                return res.status(500).json({message: 'Database error', error: err});
            }
            return res.status(201).json({message: 'User registered successfully'});
        });
    });
}

const loginUser = (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(400).json({message: 'Email and password are required'});
    }
    const getUserQuery = 'SELECT * FROM users WHERE email = ?';
    dbConnect.query(getUserQuery, [email], async (err, results) => {
        if (err) {
            return res.status(500).json({message: 'Database error', error: err});
        }
        if (results.length === 0) {
            return res.status(400).json({message: 'Invalid email'});
        }
        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({message: 'Invalid password'});
        }
        const token = jwt.sign({userId: user.id}, 'secret', {expiresIn: '1h'});
        return res.status(200).json({message: 'Login successful', token});
    });
}

module.exports = {registerUser, loginUser};