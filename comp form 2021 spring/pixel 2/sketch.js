var img;

function preload() {
	img = loadImage('00.jpg');
	noLoop();
}


function setup() {
	createCanvas(img.width, img.height * 2);

	console.log(img.width, img.height);
}

function draw() {
	background(255);
	var copyimage = createImage(img.width, img.height);
	noSmooth();

	image(img, 0, 0);

	copyimage.copy(img, 0, 0, img.width, img.height, 300, 0, img.width, img.height);
	
	
	
	
	copyimage.loadPixels();
	for (y = 0; y < copyimage.height; y++) {
		for (x = 0; x < copyimage.width; x++) {
			var c = getQuick(copyimage, x, y);
			c = [
				255 - c[0],
				255 - c[1],
				255 - c[2],
				c[3]
			];

			copyimage.set(x, y, c);
		}
	}
	copyimage.updatePixels();
	
	image(copyimage,0,0);
}

function getQuick(img, x, y) {
	var i = (y * img.width + x) * 4;
	return [
		img.pixels[i],
		img.pixels[i + 1],
		img.pixels[i + 2],
		img.pixels[i + 3]
	];
}