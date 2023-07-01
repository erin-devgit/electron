const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
//document.body.style.backgroundImage = url(`img/${chosenImage}`);
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
bgImage.id = 'bgImage';