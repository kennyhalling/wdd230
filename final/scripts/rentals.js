const link = "data/rentals.json";
const rentalInfo = document.querySelector("#table-body")

async function getData(url){
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.rentals);
    displayData(data.rentals);
}
function displayData(items){
    items.forEach(item => {
        let newRow = document.createElement('tr');
        let type = document.createElement('td');
        let capacity = document.createElement('td');
        let rsvHalf = document.createElement('td');
        let rsvFull = document.createElement('td');
        let walkHalf = document.createElement('td');
        let walkFull = document.createElement('td');
        type.textContent = `${item.type}`;
        capacity.textContent = `${item.capacity}`;
        rsvHalf.textContent = `${item.pricing[0].reservation[0].halfDay}`
        rsvFull.textContent = `${item.pricing[0].reservation[0].fullDay}`
        walkHalf.textContent = `${item.pricing[0].walkIn[0].halfDay}`
        walkFull.textContent = `${item.pricing[0].walkIn[0].fullDay}`
        newRow.appendChild(type);
        newRow.appendChild(capacity);
        newRow.appendChild(rsvHalf);
        newRow.appendChild(rsvFull);
        newRow.appendChild(walkHalf);
        newRow.appendChild(walkFull);
        rentalInfo.appendChild(newRow);
    });
}

getData(link);