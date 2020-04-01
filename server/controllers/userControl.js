const {User} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client('711583691062-7cd2dhn3jtdoob0n5keu0ajpfsdlfej4.apps.googleusercontent.com');

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

    static googlelogin(req, res){
        console.log('google controler')
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: '711583691062-7cd2dhn3jtdoob0n5keu0ajpfsdlfej4.apps.googleusercontent.com',  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        })
        .then(ticket => {
            const payload = ticket.getPayload();
            console.log(payload)
            User.findOne({
                where: {
                    email: payload.email
                }
            })
                .then(data => {
                    if (data) {
                        return data
                    }
                    else {
                        let obj = {
                            username: payload.name,
                            email: payload.email,
                            password: "google"
                        }
                        return User.create(obj)
                    }
                })
                .then(data => {
                    if (data) {
                        var token = jwt.sign({id: data.id, username:data.username ,email: data.email}, 'secret')
                    }
                    res.status(200).json({ token: token })
                })
                .catch(err => {
                    res.status(400).json(err)
                })
        })

    }

}

module.exports = UserControl