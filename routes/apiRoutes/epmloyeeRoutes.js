const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// Get all voters alphabetized by last name
router.get('/epmloyee', (req, res) => {
  const sql = `SELECT * FROM epmloyee ORDER BY last_name`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// Get single voter
router.get('/epmloyee/:id', (req, res) => {
  const sql = `SELECT * FROM epmloyee WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row
    });
  });
});

// Create a voter
router.post('/epmloyee', ({ body }, res) => {
  const errors = inputCheck(body, 'first_name', 'last_name', 'salary', 'department');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `INSERT INTO epmloyee (first_name, last_name, salary, department) VALUES (?,?,?,?)`;
  const params = [body.first_name, body.last_name, body.salary, body.department];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
});

// Update a voter's email
router.put('/epmloyee/:id', (req, res) => {
  const errors = inputCheck(req.body, 'salary');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `UPDATE epmloyee SET salary = ? WHERE id = ?`;
  const params = [req.body.salary, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Employee not found'
      });
    } else {
      res.json({
        message: 'success',
        data: req.body,
        changes: result.affectedRows
      });
    }
  });
});

// Delete a voter
router.delete('/epmloyee/:id', (req, res) => {
  const sql = `DELETE FROM epmloyee WHERE id = ?`;

  db.query(sql, req.params.id, (err, result) => {
    if (err) {
      res.status(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Employee not found'
      });
    } else {
      res.json({
        message: 'deleted',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
});

module.exports = router;
