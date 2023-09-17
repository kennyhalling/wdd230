let d = new Date();
document.querySelector("#copyright").innerHTML = `&copy${d.getFullYear()}`;
document.querySelector("#lastModified").innerHTML = `Last Modified: ${document.lastModified}`;