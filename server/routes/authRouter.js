
const Router = require('express')
const router = new Router()
const controller = require('../controllers/authController')
const {check} = require("express-validator")
const authMiddleware = require('../middlewaree/authMiddleware')
const roleMiddleware = require('../middlewaree/roleMiddleware')

router.post('/registration',[
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль пользователя должен содержать более 4 символов").isLength({min:4})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['ADMIN']), controller.getUsers)
router.get('/items', controller.getItems)

module.exports = router
