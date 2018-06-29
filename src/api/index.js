'use strict';

const express = require('express');
const todos = require('../../mock/todos.json')


const router = express.Router();

router.get('/todos', (req, res) => {
    res.json({todos: todos})
});

// TODO: add post route to create new entries

// TODO: add put route to update entries

// TODO: add delete route to delete entries


module.exports = router;