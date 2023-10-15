document.querySelector("#last_modified").innerHTML = `Last Modified: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeSwitch = document.querySelector('#check');
const main = document.querySelector("body");

modeSwitch.addEventListener("click", () => {
	main.classList.toggle('dark');
});