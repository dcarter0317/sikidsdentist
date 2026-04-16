

// Hamburger mobile menu toggle with animation
document.addEventListener('DOMContentLoaded', function () {
	const hamburger = document.getElementById('hamburger');
	const menu = document.getElementById('mobile-menu');
	if (hamburger && menu) {
		hamburger.addEventListener('click', function () {
			const isOpen = menu.classList.toggle('open');
			hamburger.classList.toggle('open', isOpen);
			hamburger.setAttribute('aria-expanded', isOpen);
		});
	}
});


// Initialize Splide carousel
/*
  Documentation 
  https://splidejs.com/guides/getting-started/ 
*/ 
// 
var elems = document.getElementsByClassName('splide');
for ( var i = 0; i < elems.length; i++ ) {
  new Splide( elems[ i ], {
	type   : 'loop',
	width  : '100vw',
	perPage: 1,
	autoplay: true,
	interval: 10000,
  } ).mount();
}