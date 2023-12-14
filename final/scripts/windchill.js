const wind = document.querySelector("#wind-speed")
const windchill = document.querySelector("#wind-chill")
let t_value = 0;
let w_value = 0;
let h_value = 0;
let wc_value = 0;
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const humidity = document.querySelector('#humidity');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.94&units=imperial&appid=70c468a656538318285784c7499df7e1';
const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.94&units=imperial&appid=70c468a656538318285784c7499df7e1';

const day1 = document.querySelector("#day1");
const temp1 = document.querySelector("#temp1");

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            w_value = data.wind.speed;
            t_value = data.main.temp;
            h_value = data.main.humidity;
            displayResults(data);
            windchillEquation();
            displayBanner(t_value);
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
    currentTemp.innerHTML = `${Math.round(t_value)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;
    humidity.innerHTML = `Humidity: ${h_value}%`
}
function windchillEquation(){
    if (t_value > 50){
        wc_value = 'No Windchill!';
    }
    else{
        wc_value = `Feels like ${Math.round((35.74 + 0.6215*t_value-35.75*w_value**0.16+0.4275*t_value*w_value**0.16)*10)/10}°`;
    }
    windchill.innerHTML = ` | | ${wc_value}`;
    wind.innerHTML = `🍃${Math.round(w_value)} mph`;
}
function displayForecast(data){
    day1.textContent = `High TMR`;
    temp1.innerHTML = `${Math.round(data.list[7].main.temp)}&deg;F`;
}
function displayBanner(temp){
    const banner = document.querySelector('#banner');
	banner.innerHTML = `<button id="close" title="x_button"></button>
	<h2>It is currently ${temp}&deg;F</h2>`;
	banner.style.display = 'flex';

	const closeButton = document.querySelector('#close');
	closeButton.addEventListener("click", () => {
		banner.remove();
	});
}
apiFetch();


