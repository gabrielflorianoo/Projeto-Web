const express = require('express');
const router = express.Router();
const validador = require("../validators/Login.js");

/* GET home page. */
router.post('/', function (req, res, next) {
    if (req.body.usuario == process.env.ADMIN_USUARIO && req.body.senha == process.env.ADMIN_SENHA) {
        res.redirect('/admin');
    } else {
        if (validador.validate(req.body) == false) {
            res.send("Usuário não criado!");
        } else {
            const user = req.body;

            req.session.user = user;

            res.redirect('/users');
        }
    }
});

module.exports = router;