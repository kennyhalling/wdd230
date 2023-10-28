const visitTracker = document.querySelector('#visit-tracker');
const msToDays = 84600000;
const date = new Date();
const today = Date.now();
let lastVisit = Number(window.localStorage.getItem("lastVisit-ls")) || 0;
const elapsedTime = today-lastVisit;
if (lastVisit == 0){
    visitTracker.textContent = `Welcome! Let us know if you have any questions.`;
}
else if ((elapsedTime) < msToDays){
    visitTracker.textContent = `Back so soon! Awesome!`
}
else{
    const daysSince = Math.floor(elapsedTime/msToDays);
    if (daysSince == 1){
        visitTracker.textContent = `You last visited ${daysSince} day ago.`
    }
    else{
        visitTracker.textContent = `You last visited ${daysSince} days ago.`
    }
}

localStorage.setItem("lastVisit-ls", today);