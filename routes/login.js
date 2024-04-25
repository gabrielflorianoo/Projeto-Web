const express = require('express');
const router = express.Router();
const validador = require("../validators/Login.js");

/* GET home page. */
router.post('/', function(req, res, next) {
  if (validador.validate(req.body) == false) {
    res.send("Usuário não criado!");
  } else {
    res.send("Usuário criado!")
  }
});

module.exports = router;