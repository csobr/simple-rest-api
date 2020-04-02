const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: 'api',
  password: process.env.DB_PASS,
  max: 10,
  idleTimeoutMillis: 3000,
  connectionTimeoutMillis: 2000,
  port: process.env.DB_PORT,
});
console.log('Succssful connection to the database');

/*  Querys CRUD */

// Read users
const getUser = (req, res) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results.rows);
  });
};

// Get users by id
const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('SELECT * FROM users WHERE id = $1', [id], (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results.rows);
  });
};

// Create user
const createUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2)',
    [name, email],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.send(`User added with ID: ${results.insertId} `);
    }
  );
};

// Update user
const updateUser = (req, res) => {
  const id = parseInt(req, params.id);
  const { name, email } = req.body;

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.send(` User modified with ID: ${id}`);
    }
  );
};

// Delate user
const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(' DELETE FROM users WHERE ID = $1', [id], (err, results) => {
    if (err) {
      throw err;
    }
    res.send(`User deleted with ID: ${id}`);
  });
};

module.exports = { getUser, getUserById, createUser, updateUser, deleteUser };
