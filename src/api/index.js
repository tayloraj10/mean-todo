'use strict';

const express = require('express');


const router = express.Router();

router.get('/todos', (req, res) => {
    res.json({todos: []})
});

// TODO: add post route to create new entries

// TODO: add put route to update entries

// TODO: add delete route to delete entries


module.exports = router;