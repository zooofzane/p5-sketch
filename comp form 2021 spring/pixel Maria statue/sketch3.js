let img;
let m = 0;
let max = 2;
let z = 0;
let rr = 0;
let xx = 0;
let yy = 0;
// function preload() {
//   pica = loadImage('60.jpg');
//   picb = loadImage('unnamed.jpg');
// }

function preload() {
    img = loadImage('60.jpg');
    // noLoop();
    pixelDensity(1);
}


function setup() {
    createCanvas(470 * 1.5, 320 * 1.5, WEBGL);

    console.log(img.width, img.height);

}

function draw() {
    background(255);
    // var copyimage = createImage(img.width, img.height);
    // noSmooth();

    translate(-235, -160, 0);
    // orbitControl();
    // rr+=0.05;
    // rotateY(rr);
    // image(img, 100, 0);
    // console.log(rr);
    // copyimage.copy(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);



    // let index = floor(map(mouseX, 0, width, 2, 20));
    // copyimage.loadPixels();
    img.loadPixels();
    for (y = 0; y < img.height; y += 6) {
        for (x = 0; x < img.width; x += 6) {

            if (x > 10) {
                x = 10;
            }
            // z+=1;
            var i = (y * img.width + x) * 4;

            let r = img.pixels[i];
            let g = img.pixels[i + 1];
            let b = img.pixels[i + 2];
            let a = img.pixels[i + 3];
            // fill(r, g, b, a);
            c = (r + g + b) / 3;
            // copyimage.set(x, y, c);
            stroke(c);
            // fill(c);
            let xx = width / 2 + 10;
            let yy = height / 2 + 30;
            m = (mouseX - width) * 3;
            // strokeWeight(1);
            let z = map(r, 0, 255, 0, 50);
            n = noise(Math.sqrt((x - xx) * (x - xx) + (y - yy) * (y - yy)) * 0.1 + millis() / 2000) * 30;
            // console.log(n);
            point(x, y, n);
        }
    }



    // copyimage.updatePixels();

    // image(copyimage, 0, 0);
}

// function getQuick(img, x, y) {
// 	var i = (y * img.width + x) * 4;
// 	return [
// 		img.pixels[i],
// 		img.pixels[i + 1],
// 		img.pixels[i + 2],
// 		img.pixels[i + 3]
// 	];
// }