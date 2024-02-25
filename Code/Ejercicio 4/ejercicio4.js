var mainImage = document.getElementById("mainImage");
var thumbnails = document.getElementById("thumbnails");

thumbnails.addEventListener("click", function(event) {
  if (event.target.classList.contains("thumbnail")) {
    var newImageSrc = event.target.src;
    mainImage.src = newImageSrc;
  }
});
