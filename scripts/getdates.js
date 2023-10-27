let d = new Date();
document.querySelector("#copyright").innerHTML = `&copy${d.getFullYear()}`;
document.querySelector("#lastModified").innerHTML = `Last Modified: ${document.lastModified}`;
document.querySelector("#name-and-country").innerHTML = `Kenneth S. Halling - United States`;

const visitsDiplay = document.querySelector("#visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if  (numVisits == 0){
    visitsDiplay.textContent = "Welcome to my webiste!"
}
else{
    visitsDiplay.textContent = `Number of Website Visits: ${numVisits}`
}

numVisits++

localStorage.setItem("numVisits-ls", numVisits);