const navSlide = () => {
	const mobileBar = document.querySelector(".mobileBar");
	const nav = document.querySelector(".nav-links");

	mobileBar.addEventListener("click", () => {
		// toggle nav
		nav.classList.toggle("nav-active");

		// mobileBar animation
		mobileBar.classList.toggle('toggle');
	});
}

navSlide();