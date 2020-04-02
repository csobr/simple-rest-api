let express = require('express');
const app = express();
let router = express.Router();

app.locals.value = 0;
router.get('/api/value', (req, res) => {
  res.json([router.locals.value]);
});

let changeValue = (req, res) => {
  req.router.locals.value = req.params.add;
  res.status(200).end();
};
router.get('/api/value/:add', changeValue);

module.exports = router;
