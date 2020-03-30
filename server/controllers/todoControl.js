const {Todo} = require('../models')

class TodoControl {
    static show(req, res, next){
        Todo.findAll()
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            next(err)
        })
    }

    static showOne(req, res, next){
        Todo.findOne({
            where: {id: req.params.id}
        })
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            next(err)
        })
    }

    static create(req, res, next){
        Todo.create(req.body)
        .then(data=>{
            res.status(200).json(data)
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
            res.status(200).json('data has been updated')
        })
        .catch(err =>{
            next(err)
        })
    }

    static delete(req, res, next){
        let searhId = req.params.id
        Todo.destroy({
            where : {id: searchId}
        })
        .then(data=>{
            res.status(200).json('data has been deleted')
        })
        .catch(err =>{
            next(err)
        })
    }
}

module.exports = TodoControl