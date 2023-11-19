const wind = document.querySelector("#wind-speed")
const windchill = document.querySelector("#wind-chill")
let t_value = 0;
let w_value = 0;
let wc_value = 0;
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=30.45&lon=-97.68&units=imperial&appid=70c468a656538318285784c7499df7e1';

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
    captionDesc.textContent = `${desc}`;
}
function windchillEquation(){
    if (t_value > 50){
        wc_value = 'N/A';
    }
    else{
        wc_value = `${Math.round((35.74 + 0.6215*t_value-35.75*w_value**0.16+0.4275*t_value*w_value**0.16)*10)/10}°`;
    }

    wind.innerHTML = `🍃${w_value} mph`;
    windchill.innerHTML = `Windchill Temperature: ${wc_value}`;
}

apiFetch();


