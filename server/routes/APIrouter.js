const express = require('express')
const router = express.Router()
const axios =require('axios')

router.get('/current_weather', function (req, res){ 
    let city = req.body.city
    axios({
        method: 'get',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city},Indonesia&APPID=d2606a9ee3680c51b60d1b000b2647f4`,
    })
    .then(data => {
        console.log(data)
        res.status(200).json(data.data)
      })
    .catch(err=>{
        res.status(400).json(err)
    })
})

// router.post('/email', function (req, res){
//     axios({
//         method: 'post',
//         url: 'https://mandrillapp.com/api/1.0/messages/send.json',
//         data: {
//           key: 'e543fd35687fac4132794add8cfe5681-us19',
//           message: {
//             from_email: 'ignatiusagus150@gmail.com',
//             to: [
//                 {
//                   email: 'agusr150@yahoo.co.id',
//                   name: 'agus',
//                   type: 'to'
//                 }
//               ],
//             autotext: true,
//             subject: 'tessst',
//             html: 'test email'
//           }
//         }
//        })
//        .then(data=>{
//             res.status(200).json('sukses')
//        })
//        .catch(err=>{
//            res.status(400).json(err)
//        })
//     })

module.exports = router