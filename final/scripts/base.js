document.querySelector("#last_modified").innerHTML = `Last Modified: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const timestamp =  new Date();
const day = timestamp.getDay();
console.log(day);
if (day==1 || day==2 || day==3) {
	const banner = document.querySelector('#banner');
	banner.innerHTML = `<button id="close" title="x_button"></button>
	<h2>Join us for our meet and greets every Wednesday at 7:00pm!</h2>`;
	banner.style.display = 'flex';

	const closeButton = document.querySelector('#close');
	closeButton.addEventListener("click", () => {
		banner.remove();
	});
}