const express = require ('express')
const router = express.Router()

const UserControl = require('../controllers/userControl')

router.post('/register', UserControl.register)
router.post('/login', UserControl.login)
router.post('/googlelogin', UserControl.googlelogin)

module.exports = router