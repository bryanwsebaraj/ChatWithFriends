const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const cors = require('cors');

mongoose.connect(process.env.MONGO_URL);
const jwtSecret = process.env.JWT_SECRET;

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
}));

app.get('/test', (req, res) => {
    res.json('test worked');
});

app.post('/register', async (req, res) => {
    const {username,password} = req.body;
    try {
        const newUser = await User.create({username,password});
        jwt.sign({userId:newUser._id}, jwtSecret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).status(201).json({
                id: newUser._id,
            });
        });
    } catch(err) {
        if (err) throw err;
        res.status(500).json('error');
    }

    //res.json();
});

app.listen(4040);

// WRiCCxCTf1WAxVIU