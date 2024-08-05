function fiveDayForcast(lat,long)
{
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=22e27194383fe300f36a829538e78ffb`)
    .then(resp => {return resp.json()})
    .then(resp=>{
        let date = new Date()
        let day = date.getDate()+1
        document.querySelector(".forcast-div-contain").innerHTML =null
        for(let i=0;i<=4;i++,day++)
        {
            console.log(day)
            let div_super = document.createElement("div")
            div_super.classList.add("div-super")
            let div = document.createElement("div")
            div.classList.add("div-sub")
            let span = document.createElement("span")
            span.innerHTML = Math.floor(resp.daily[i].temp.day-273)+"°C"
            let date = document.createElement("span")
            let img = document.createElement("img")
            img.classList.add("img-icon")
            img.src = "https://openweathermap.org/img/wn/"+resp.daily[i].weather[0].icon+".png"
            date.innerHTML = day+" August"
            div.appendChild(img)
            div.appendChild(span)
            div.appendChild(document.createElement("br"))
            div.appendChild(date)
            div_super.append(div)
            document.querySelector(".forcast-div-contain").append(div_super)
        }
    })    
}

function getTemperature(lat,long)
{    
    let kelvin = 273
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=22e27194383fe300f36a829538e78ffb`)
    .then((resp)=>{return resp.json()})
    .then(resp=>{console.log(resp.current);return(resp.current)})
    .then(resp=>{
        console.log(resp.temp)
        let acc_temp = Math.floor(resp.temp - kelvin)
        tempHTML.innerText = acc_temp+"°C";
        temp_desc.innerText = resp.weather[0].main
        if(resp.weather[0].main=="Mist")
            {
                document.body.style.backgroundImage="url(https://images.nationalgeographic.org/image/upload/v1638884972/EducationHub/photos/blue-mist.jpg)"
            }
        else if(resp.weather[0].main=="Rain")
                {
                    document.body.style.backgroundImage="url(https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?size=626&ext=jpg)"
                }
                else if(resp.weather[0].main=="Clouds")
                    {
                        document.body.style.backgroundImage="url(https://static.scientificamerican.com/sciam/cache/file/6B2730C8-B0D0-485F-A0618F3954CF58D8_source.jpg?w=1200)"
                    }
                    else if(resp.weather[0].main=="Clear Sky")
                        {
                            document.body.style.backgroundImage="url(https://media.istockphoto.com/id/1328689113/photo/summer-blue-sky-and-white-cloud-white-background-beautiful-clear-cloudy-in-sunlight-calm.jpg?s=612x612&w=0&k=20&c=37qEuwdxyQSx9kuS-_Gz0WiKFX6jMXZN9aRY47mN2vI=)"
                        }        
        let i = document.createElement("img");
        i.setAttribute("height","100px")
        i.setAttribute("width","100px")
        i.src = "https://openweathermap.org/img/wn/"+(resp.weather[0].icon)+".png"
        document.querySelector(".icon").innerHTML = null
        document.querySelector(".icon").appendChild(i)
    })
    .catch((err)=>console.log(err))

    fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&appid=22e27194383fe300f36a829538e78ffb`)
    .then(resp=> {return resp.json()})
    .then(resp=>city.innerText = resp[0].name)
}

function getLocation()
{
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        getTemperature(lat,long)
        fiveDayForcast(lat,long)
      });


}

getLocation()

function getTemperatureByCity(city)
{
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},IN&appid=22e27194383fe300f36a829538e78ffb`)
    .then((resp)=>{return resp.json()})
    .then((resp)=>{
        getTemperature(resp[0].lat,resp[0].lon)
        fiveDayForcast(resp[0].lat,resp[0].lon)        
    })
}

search_btn.addEventListener("click",()=>{
    if(search_key.value!=="")
        getTemperatureByCity(search_key.value)
    console.log("Please input a city")     
})



search_key.addEventListener("keyup",(e)=>{
    if(e.keyCode == 13)
    {
        if(search_key.value!=="")
            getTemperatureByCity(search_key.value)
        console.log("Please input a city")
    }
    
})