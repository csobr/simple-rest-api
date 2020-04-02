let express = require('express');
let router = express.Router();

let randomNum = (req, res) => res.end('random:' + req.params.num);
router.get('/api/random/:num', randomNum);

module.exports = router;
