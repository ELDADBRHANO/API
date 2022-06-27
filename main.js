let API_KEY="cb924eefb70023068d5218de27295e68";
let WEATHER_BASIC_API="https://api.openweathermap.org/data/2.5/"

async function getLocalWeather(cityName) {
  try {
    return await fetch(`${WEATHER_BASIC_API}weather?q=${cityName}&appid=${API_KEY}`)
    .then(res=>res.json())
    
  } 
  catch (error) {
    console.log(error);
  }
  finally{}
}


function clickForWeather() {
  weather_div.innerHTML="";
  let cityName=selcet_cities.value;
  getLocalWeather(cityName)
  .then(result=>{
    for (const key in result) {
      weather_div.innerHTML+= `<h1>${key}: ${result[key]}`
    }
  })
}




