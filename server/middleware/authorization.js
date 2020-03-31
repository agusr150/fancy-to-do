const {Todo} = require('../models')

function authorization(req, res, next){
    Todo.findOne({
        where: {id: req.params.id}
    })
    .then(data=>{
        if(data.UserId === req.userdata.id){
            next()
        } else {
            res.status(400).json('not authorized')
        }
    })
    .catch(err=>{
        res.status(400).json('data not found')
    })
}

module.exports = authorization