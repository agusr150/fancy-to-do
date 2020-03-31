const {User} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class UserControl {
    static register (req, res, next){
        User.findOne({
            where: {email: req.body.email}
        })
        .then(data=>{
            if(data){
                res.status(400).json('email has been registered')
            } else {
                return User.create(req.body) 
            }
        })
        .then(data1=>{
            res.status(200).json(data1)
        })
        .catch(err=>{
            next(err)
        })
    }

    static login(req, res, next){
        User.findOne({
            where: {email: req.body.email}
        })
        .then(data=>{
            if(!data){
                res.status(400).json('email wrong')
            } else {
                if(bcrypt.compareSync(req.body.password, data.password)){
                    let token = jwt.sign({id: data.id, username:data.username, email: data.email}, 'secret')
                    res.status(200).json({token: token})
                } else {
                    res.status(400).json('password worng')
                }
            }
        })
        .catch(err=>{
            console.log('errrorrrr')
            next(err)
        })
    }

}

module.exports = UserControl