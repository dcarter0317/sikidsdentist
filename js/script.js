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