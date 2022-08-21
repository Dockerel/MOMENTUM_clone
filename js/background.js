const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

bgImage_src = `img/${chosenImage}`;

document.body.style.backgroundImage = `url(${bgImage_src})`;
