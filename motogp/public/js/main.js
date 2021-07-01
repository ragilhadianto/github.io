var navbarMenu = document.querySelector('#navbar-menu');
var navbarMenuLayer = document.querySelector('#navbar-menu-layer');
var layerOverlay = document.querySelector('.layer-overlay');

navbarMenu.addEventListener("click", function(){
	navbarMenuLayer.style.right = '0';
	layerOverlay.style.display = 'block';
});
layerOverlay.addEventListener("click", function(){
	navbarMenuLayer.style.right = '-100%';
	layerOverlay.style.display = 'none';
});