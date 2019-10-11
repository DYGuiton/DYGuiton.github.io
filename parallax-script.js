var images = new Array('firstRender2.png', 'homeBackgroundImage.png');
var nextimage = 0;
doSlideshow();


function doSlideshow() {
	if (nextimage >= images.length) {
		nextimage = 0;
	}
	$('.parallax')
		.css('background-image', 'url(' + images[nextimage++] + ')')
		.fadeIn(500, function () {
			setTimeout(doSlideshow, 1000);
		});

}