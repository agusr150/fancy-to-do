const {Todo} = require('../models')

function authorization(req, res, next){
    console.log(req.userdata.id)
    Todo.findAll({
        where: {UserId: req.userdata.id}
    })
    .then(data=>{
        next()
    })
    .catch(err=>{
        res.status(500).json(err.message)
    })
}

module.exports = authorization