const express = require('express');
const router = express.Router();
const validador = require("../validators/Login.js");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send("Ola admin.");
});

module.exports = router;