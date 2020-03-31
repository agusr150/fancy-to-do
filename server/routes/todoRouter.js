const express = require ('express')
const router = express.Router()

const TodoControl = require('../controllers/todoControl')

const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

router.get('/todos', authentication, authorization, TodoControl.show)
router.get('/todos/:id', authentication, authorization, TodoControl.showOne)
router.post('/todos', authentication, TodoControl.create)
router.put('/todos/:id', authentication, authorization, TodoControl.edit)
router.delete('/todos/:id', authentication, authorization, TodoControl.delete)

module.exports = router