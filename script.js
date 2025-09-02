const menuBtnNav = document.querySelector("nav > .menu-btn");
const hideBtnSidebar = document.querySelector("#sidebar > .hide-wrapper > .hide-btn");
const sidebar = document.querySelector("#sidebar");
const sidebarOverlay = document.querySelector("#sidebar-overlay");
const footer = document.querySelector("footer");

// Muestra el sidebar para móviles
const showMobileSidebar = () => {
	document.body.classList.add("no-scroll");
	sidebarOverlay.classList.add("show");
	sidebar.classList.add("show");
}

// Oculta el sidebar para móviles
const hideMobileSidebar = () => {
	document.body.classList.remove("no-scroll");
	sidebarOverlay.classList.remove("show");
	sidebar.classList.remove("show");
}

// Muestra u oculta el sidebar para escritorio
const toggleSidebarHide = () => {
	hideBtnSidebar.classList.toggle("on");
	sidebar.classList.toggle("offset");
	footer.classList.toggle("static");
}

hideBtnSidebar.addEventListener("click", toggleSidebarHide);
menuBtnNav.addEventListener("click", showMobileSidebar);
sidebarOverlay.addEventListener("click", hideMobileSidebar);