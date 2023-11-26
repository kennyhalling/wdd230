const linksURL = "data/members.json";
const spotlights = document.querySelector("#spotlights");

async function getData(url){
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displayData(data.members);
}
function displayData(companies){
    const highrankers = [];
    companies.forEach(company => {
        if (company.membership == "Gold" || company.membership == "Silver"){
            highrankers.push(company);
        }
    });
    for (let i=0; i<2; i++){
        let index = Math.floor(Math.random()*highrankers.length);
        let company = highrankers[index];
        while (company==undefined){
            index = Math.floor(Math.random()*highrankers.length);
            company = highrankers[index];
        }
        let member = document.createElement('section');
        let name = document.createElement('h3');
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
        member.appendChild(name);
        member.appendChild(address);
        member.appendChild(phone);
        member.appendChild(link);
        member.appendChild(membership);
        member.appendChild(image);
        spotlights.appendChild(member);
        delete highrankers[index];
    }
}

getData(linksURL);