    
function ajax_cuaca(city, forecast){
    let array=''
    console.log(forecast+"<<<forecast")
    switch(forecast){
        case "a":
          array = 2
          break;
        case "b":
          array = 3
          break;
        case "c":
          array = 4
          break;
        case "d":
          array = 5
          break;
        case "e":
          array = 6
          break;
        case "f":
          array = 10
          break;
        case "g":
          array = 18
          break;
        case "h":
          array = 26
          break;
    }
    console.log(array)
    $.ajax({
        type: "GET", 
        url: `http://api.openweathermap.org/data/2.5/forecast?q=${city},Indonesia&APPID=d2606a9ee3680c51b60d1b000b2647f4`, 
        success: function(result){
            let data=result.list[array]
            console.log(result)
            let tempK=data.main.temp-273
            let temp=Math.round(tempK)
            let iconcode = data.weather[0].icon
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            $(`#error`).empty()
            $(`#weather`).empty()
            $(`#weather`).append(`
                <div id="subweather">temperature &#x1F321: ${temp} &#8451 </div>
                <div id="subweather">humidity: ${data.main.humidity}%</div>
                <div id="subweather">condition:  ${data.weather[0].description} <img src=${iconurl}></div>
                `)
            },
        error: function(err){   
                console.log(err)
                $(`#weather`).empty()
                $(`#weather`).append(`
                <div style="color:red">${JSON.stringify(err)}</div>
                `)
            }
    })
}
    


$(`#form-weather`).submit(function (event){
    event.preventDefault()
    console.log('masuk submit-----------')
    let city = $(`#city-weather`).val()
    let forecast= $(`#forecast-weather`).val()
    console.log(city)
    console.log(forecast)
    if(city==='' || forecast === 'forecast'){
        $(`#weather`).append(`
        <div style="color:red">Fill the weather form correctly to get the forecast!!</div>
        `)
    } else {
        ajax_cuaca(city, forecast)
    }

})