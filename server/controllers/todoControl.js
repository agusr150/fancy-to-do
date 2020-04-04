const {Todo, User} = require('../models')

class TodoControl {
    static show(req, res, next){
        Todo.findAll({
            where: {UserId: req.userdata.id},
            include: User,
            order: [['due_date', 'ASC']]
        })
        .then(data=>{
            res.status(200).json({
                user:req.userdata.username,
                data: data})
        })
        .catch(err=>{
            next(err)
        })
    }

    static showOne(req, res, next){
        Todo.findOne({
            where: {id: req.params.id},
            include: User
        })
        .then(data=>{
            if(data){
                res.status(200).json({
                    user: req.userdata.username,
                    data: data})
            } else {
                res.status(404).json('data not found/ not authorized')
            }
        })
        .catch(err=>{
            console.log('err')
            next(err)
        })
    }

    static create(req, res, next){
        let newData={
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
            due_date : req.body.due_date,
            UserId : req.userdata.id 
        }
        Todo.create(newData)
        .then(data=>{
            res.status(201).json({
                user: req.userdata.username,
                input: data
            })
        })
        .catch(err=>{
            next(err)
        })
    }

    static edit(req, res, next){
        let searchId = req.params.id
        Todo.update(req.body,{
            where: {id: searchId}
        })
        .then(data=>{
            console.log(data[0])
            if(data[0] === 1 ){
                res.status(200).json('data has been updated')
            } else {
                res.status(404).json('data not found')
            }
        })
        .catch(err =>{
            next(err)
        })
    }

    static delete(req, res, next){
        let searchId = req.params.id
        Todo.destroy({
            where : {id: searchId}
        })
        .then(data=>{
            console.log(data)
            if(data===1){
                res.status(200).json('data has been deleted')
            } else {
                res.status(404).json('data not found')
            }
        })
        .catch(err =>{
            next(err)
        })
    }
}   

module.exports = TodoControl