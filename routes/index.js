const express = require('express');
const router = express.Router();
var path = require('path');
var authenticated = "false";



router.get('/*', (req, res, next) => {
    res.render('login');
});

module.exports = router;
