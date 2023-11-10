const baseURL = "https://kennyhalling.github.io/wdd230/";
const linksURL = "data/links.json";
const activities = document.querySelector("#activities")

async function getData(url){
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    displayLinks(data.lessons);
}
const displayLinks = (weeks) => {
    weeks.forEach((week) =>{
        let lesson = document.createElement("li");
        let index = 1;
        week.links.forEach((link) => {
            let activity = document.createElement("a");
            activity.setAttribute("href", link.url);
            if (index === week.links.length){
                activity.textContent = `${link.title}`
            }
            else{
                activity.textContent = `${link.title} | `
            }
            lesson.appendChild(activity);
            index = index+1;
        });
        activities.appendChild(lesson);
    });
}

getData(linksURL);