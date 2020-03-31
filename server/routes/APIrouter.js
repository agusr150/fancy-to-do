const express = require('express')
const router = express.Router()
const axios =require('axios')

router.get('/current_weather', function (req, res){
    axios({
        method: 'get',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=Jakarta,Indonesia&APPID=d2606a9ee3680c51b60d1b000b2647f4',
    })
    .then(data => {
        console.log(data)
        res.status(200).json(data.data)
      })
    .catch(err=>{
        res.status(400).json(err)
    })
})

module.exports = router