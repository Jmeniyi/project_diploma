const User = require('../models/User')
const Role = require('../models/Role')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator')
const {secret} = require("../config")
const products  = require("../allProducts/test.json")

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: "1h"} )
}

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при регистрации", errors})
            }
            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if (candidate){
                return res.status(400).json({message: 'Пользователь уже зарегистрирован'})
            }
            const hashPassword = bcrypt.hashSync(password,6);
            const userRole = await Role.findOne({value:"USER"})
            const user = new User({username, password:hashPassword, roles:[userRole.value] })
            await user.save()
            return res.status(200).json({message: 'Пользователь успешно зарегистрирован'})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Registration error'})
        }
    }

    async login(req, res) {
        try {
            const {username, password} = req.body
            const user = await User.findOne({username})
            if(!user){
                return res.status(400).json({message: `Пользователь ${username} не найден`})
            }
            const validationPassvord = bcrypt.compareSync(password, user.password)
            if(!validationPassvord){
                res.status(400).json({message: 'Введён неверный пароль'})
            }
            const token = generateAccessToken(user._id, user.roles)
            return res.json({token, user})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Login error'})
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            console.log(e)
        }
    }
    async getItems(req, res) {
        try {
            res.json(products)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new authController()