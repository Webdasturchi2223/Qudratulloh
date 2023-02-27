$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scroll-top').fadeIn();
		} else {
			$('.scroll-top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('.scroll-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
});

let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', function (e) {
	scrollTop.style.transform = `rotate(${+window.pageYOffset + "deg"})`
})