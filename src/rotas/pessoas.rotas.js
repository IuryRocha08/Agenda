const express = require('express')
const router = express.Router()
const pessoasControle =   require('../controle/pessoas.controle');
// Retrieve all pessoas
router.get('/', pessoasControle.findAll);
// Create a new pessoas
router.post('/', pessoasControle.create);
// Retrieve a single pessoas with id
router.get('/:id', pessoasControle.findById);
// Update a pessoas with id
router.put('/:id', pessoasControle.update);
// Delete a pessoas with id
router.delete('/:id', pessoasControle.delete);
module.exports = router