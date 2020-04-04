function cuaca(){
    console.log('masuk cuaca')
    $(`#weather`).empty()
    let city='Bogor'
    $.ajax({
        type: "GET", 
        url: `http://api.openweathermap.org/data/2.5/forecast?q=${city},Indonesia&APPID=d2606a9ee3680c51b60d1b000b2647f4`, 
        success: function(result){
            console.log(result.list)
            let data=result.list[2]
            let tempK=data.main.temp-273
            let temp=Math.round(tempK)
            $(`#error`).empty()
            $(`#weather`).append(`
                <div>Weather forecast in ${city}: ${data.dt_txt}</div>
                <div>temperature &#x1F321: ${temp} &#8451 </div>
                <div>humidity: ${data.main.humidity}</div>
                <div>condition &#x1F326: ${data.weather[0].description}</div>
                `)
            },
    error: function(err){   
                console.log(err)
            }
        })
    }
        
        
        