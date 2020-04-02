let express = require('express');
let router = express.Router();

router.get('/api/number', (req, res) => {
  res.json({ number: 9 });
});

module.exports = router;
