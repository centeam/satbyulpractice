var express = require('express');
var router = express.Router();
//var tests = require('../test.json');

// router.get('/', function(req, res, next) {
//     res.send(tests)
// });

router.get('/', function(req, res, next) {
    req.getConnection('SELECT * FROM Persons OREDER BY id DESC', function(err, rows, fields) {
        if (err) throw err;
        console.log('the solution is: ', rows);
        res.send(rows);
    })
});
module.exports = router;