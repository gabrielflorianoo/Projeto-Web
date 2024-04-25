var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    if (req.body.sair == 'true') {
        res.redirect('/');
    } else if (req.body.sair == 'false') {
        res.redirect('/user');
    }
    res.render('logout');
});

module.exports = router;