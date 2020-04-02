const express = require('express');
const db = require('./db/index');
require('dotenv').config();
const app = express();
const PORT = 3000;
path = require('path');
let number = require('./routes/number');
let random = require('./routes/random');
let value = require('./routes/changeState');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.get('/', (req, res) => res.send(''));
app.use('', number, random);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
// Postgress
app.get('/users', db.getUser);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);
