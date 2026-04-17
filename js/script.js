

// Hamburger mobile menu toggle with animation
document.addEventListener('DOMContentLoaded', function () {
	const hamburger = document.getElementById('hamburger');
	const menu = document.getElementById('mobile-menu');
	const menuLinks = menu ? menu.querySelectorAll('a') : [];

	function setMenuState(isOpen) {
		menu.classList.toggle('open', isOpen);
		hamburger.classList.toggle('open', isOpen);
		hamburger.setAttribute('aria-expanded', String(isOpen));
		hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
	}

	if (hamburger && menu) {
		setMenuState(false);

		hamburger.addEventListener('click', function () {
			const isOpen = !menu.classList.contains('open');
			setMenuState(isOpen);
		});

		menuLinks.forEach(function (link) {
			link.addEventListener('click', function () {
				if (window.innerWidth <= 900) {
					setMenuState(false);
				}
			});
		});

		window.addEventListener('resize', function () {
			if (window.innerWidth > 900) {
				setMenuState(false);
			}
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
