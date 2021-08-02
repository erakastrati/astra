var menuButton = document.getElementById("open_menu");
menuButton.onclick = function () {
	menuButton.classList.toggle('open_menu_active');
	document.getElementsByTagName('html')[0].classList.toggle("is_menu_open");
}