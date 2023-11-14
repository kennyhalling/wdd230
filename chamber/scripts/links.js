const linksURL = "data/members.json";
const spotlights = document.querySelector("#spotlights");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list")
const display = document.querySelector("#spotlights")

async function getData(url){
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displayData(data.members);
}
function displayData(companies){
    companies.forEach((company) =>{
        let member = document.createElement('section');
        let name = document.createElement('h2');
        let address =  document.createElement('p');
        let phone = document.createElement('p');
        let link = document.createElement('a');
        let membership =  document.createElement('p');
        let image = document.createElement('img');
        name.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        phone.textContent = `${company.phone}`;
        link.setAttribute('href', company.website)
        link.textContent= `Visit Us!`;
        membership.textContent = `${company.membership} Member`;
        image.setAttribute('src', company.image);
        image.setAttribute('alt', company.name);
        image.setAttribute('width', '640');
        image.setAttribute('height', '480');
        member.setAttribute('class', 'card');
        member.appendChild(name);
        member.appendChild(address);
        member.appendChild(phone);
        member.appendChild(link);
        member.appendChild(membership);
        member.appendChild(image);
        spotlights.appendChild(member);
    });
}

getData(linksURL);

gridButton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});
listButton.addEventListener("click", () =>{
    display.classList.add("list");
    display.classList.remove("grid");
});