const express = require ('express')
const router = express.Router()

const TodoControl = require('../controllers/todoControl')

router.get('/todos', TodoControl.show)
router.get('/todos/:id', TodoControl.showOne)
router.post('/todos', TodoControl.create)
router.put('/todos/:id', TodoControl.edit)
router.delete('/todos/:id', TodoControl.delete)

module.exports = router