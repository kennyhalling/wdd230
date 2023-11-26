const wind = document.querySelector("#wind-speed")
const windchill = document.querySelector("#wind-chill")
let t_value = 0;
let w_value = 0;
let wc_value = 0;
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=30.45&lon=-97.68&units=imperial&appid=70c468a656538318285784c7499df7e1';
const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=30.45&lon=-97.68&units=imperial&appid=70c468a656538318285784c7499df7e1';

const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");
const temp1 = document.querySelector("#temp1");
const temp2 = document.querySelector("#temp2");
const temp3 = document.querySelector("#temp3");

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
            w_value = data.wind.speed;
            t_value = data.main.temp;
            windchillEquation();
        }
        else{
            throw Error(await response.text());
        }
        const response2 = await fetch(url2);
        if (response2.ok){
            const data2 = await response2.json();
            console.log(data2);
            displayForecast(data2);
        }
        else{
            throw Error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}
function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
}
function windchillEquation(){
    if (t_value > 50){
        wc_value = 'N/A';
    }
    else{
        wc_value = `${Math.round((35.74 + 0.6215*t_value-35.75*w_value**0.16+0.4275*t_value*w_value**0.16)*10)/10}°`;
        windchill.innerHTML = ` | | Feels like ${wc_value}`;
    }
    wind.innerHTML = `🍃${w_value} mph`;
}
function displayForecast(data){
    day1.textContent = `${getDay(data.list[8].dt)}`;
    temp1.innerHTML = `${data.list[8].main.temp}&deg;F`;
    day2.textContent = `${getDay(data.list[16].dt)}`;
    temp2.innerHTML = `${data.list[16].main.temp}&deg;F`;
    day3.textContent = `${getDay(data.list[24].dt)}`;
    temp3.innerHTML = `${data.list[24].main.temp}&deg;F`;
}
function getDay(dt){
    const date = new Date(dt * 1000);
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekday[date.getDay()];
    return day;
}

apiFetch();


