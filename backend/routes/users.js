var express = require('express');
var router = express.Router();
//var user = require('../users.json')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
// });

router.get('/', function(req, res, next) {
    req.getConnection('SELECT * FROM Persons OREDER BY id DESC', function(err, rows, fields) {
        if (err) throw err;
        console.log('the solution is: ', rows);
        res.send(rows);
    })
});

/** 
router.get('/', function(req, res, next) {
    res.send(user);
});

router.get('/:id', function(req, res, next) {
    var id = parseInt(req.params.id, 10)
    var tt = user.filter(function(users) {
        return users.id === id
    });

    res.send(tt);
});
*/

module.exports = router;