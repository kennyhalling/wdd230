const temp = document.querySelector("#temperature")
const wind = document.querySelector("#wind-speed")
const windchill = document.querySelector("#wind-chill")
const t_value = 29;
const w_value = 20;
let wc_value = 0;

if (t_value > 50){
    wc_value = 'N/A';
}
else{
    wc_value = Math.round((35.74 + 0.6215*t_value-35.75*w_value**0.16+0.4275*t_value*w_value**0.16)*10)/10;
}

temp.innerHTML = `${t_value}°`;
wind.innerHTML = `🍃${w_value} mph`;
windchill.innerHTML = `Windchill Temperature: ${wc_value}°`;