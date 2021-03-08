var img;
let t = 0;
let index=2;

function preload() {
	img = loadImage('60.jpg');
	// noLoop();
	pixelDensity(1);
}


function setup() {
	createCanvas(img.width, img.height * 2);

	console.log(img.width, img.height);
}

function draw() {
	background(255);
	var copyimage = createImage(img.width, img.height);
	noSmooth();

	// image(img, 100, 0);

	copyimage.copy(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);



let index=floor(map(mouseX,0,width,2,20));
	copyimage.loadPixels();
	for (y = 0; y < copyimage.height; y++) {
		for (x = 0; x < copyimage.width; x++) {

			if (x%index==0) {
				var c = getQuick(copyimage, copyimage.width - x, y);
				c = [
					255 - c[0],
					c[1],
					c[2],
					c[3]
				];
				copyimage.set(x - copyimage.width, y, c);
			}else{
					var c = getQuick(copyimage, x, y);
				c = [
					255 - c[0],
					c[1],
					c[2],
					c[3]
				];
				copyimage.set(x - copyimage.width, y, c);
				}
			// copyimage.set(x, y, c);
		}
	}
	copyimage.updatePixels();

	image(copyimage, 0, 0);
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