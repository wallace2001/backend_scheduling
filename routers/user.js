const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/testeget', async(req,res) => {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        res.send({ error: "Erro ao puxar usuarios!" });
    }
})

router.post('/teste', async(req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.create({
            name,
            email,
            password
        })

        res.send(user);
    } catch (err) {
        res.send({ error: "Erro ao criar usuario!" });
    }
})

module.exports = router;