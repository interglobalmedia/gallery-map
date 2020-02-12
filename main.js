let images = [
  "assets/images/david-clode-RAfIk-ZKbPk-unsplash.jpg",
  "assets/images/lesly-juarez-4JDPLjR1Ew4-unsplash.jpg",
  "assets/images/neil-cooper-uwI8R_FyLrI-unsplash.jpg",
  "assets/images/sophia-muller-loP8xxkZIk8-unsplash.jpg",
  "assets/images/itengyart-Pm2wSt4WwgI-unsplash.jpg"
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
