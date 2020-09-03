var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(
    {users: [
      {name: 'Timmy'},
      {name:'Anthony'},
      {name: 'teste'}
    ]
  });
});

module.exports = router;
