let d = new Date();
document.querySelector("#copyright").innerHTML = `&copy${d.getFullYear()}`;
document.querySelector("#lastModified").innerHTML = `Last Modified: ${document.lastModified}`;
document.querySelector("#name-and-country").innerHTML = `Kenneth S. Halling - United States`;