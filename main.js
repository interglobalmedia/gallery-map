let images = [
  "images/david-clode-RAfIk-ZKbPk-unsplash.jpg",
  "images/lesly-juarez-4JDPLjR1Ew4-unsplash.jpg",
  "images/neil-cooper-uwI8R_FyLrI-unsplash.jpg",
  "images/sophia-muller-loP8xxkZIk8-unsplash.jpg",
  "images/itengyart-Pm2wSt4WwgI-unsplash.jpg"
];

// creates the div and img tag and then imports the images
images.map(image => {
  const imageWrapper = document.getElementById("images");
  const img = document.createElement("img");
  const div = document.createElement("div");
  img.setAttribute("class", "image");
  img.setAttribute("src", `${image.src}`);
  img.src = image;
  img.height = "150";
  img.width = "150";
  imageWrapper.appendChild(div);
  div.appendChild(img);
});
