let currentImage = 0;
let allImages = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox_img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let zoomLevel = 1;
function openlight_box(img) {
    lightbox.style.display = "block";
    lightboxImg.src = img;
    currentImage = Array.from(allImages).findIndex(image => image.src.includes(img));

    zoomLevel = 1;
    lightboxImg.style.transform = `scale(${zoomLevel})`;
}

function closelight_box() {
    lightbox.style.display = "none";
}


function changeImage(step) {
    currentImage = (currentImage + step + allImages.length) % allImages.length;

    lightboxImg.src = allImages[currentImage].src;

    zoomLevel = 1;
    lightboxImg.style.transform = `scale(${zoomLevel})`;
}

prevBtn.addEventListener("click", () => {
    changeImage(-1);
});

nextBtn.addEventListener("click", () => {
    changeImage(1);
});

function zoomIn() {
    zoomLevel += 0.2;
    lightboxImg.style.transform = `scale(${zoomLevel})`;
}

function zoomOut() {
    if (zoomLevel > 0.4) {
        zoomLevel -= 0.2;
        lightboxImg.style.transform = `scale(${zoomLevel})`;
    }
}

function filterImages(category) {
    let items = document.querySelectorAll(".image_box");

    items.forEach(function(item) {
        let imgAlt = item.querySelector("img").alt.toLowerCase();

        if (category === "all") {
            item.style.display = "block";
        }
        else if(
            (category === "nature" && (imgAlt.includes("nature") ))|| (category === "city"  && 
            (imgAlt.includes("city") ))|| (category === "animals"  && 
            (imgAlt.includes("animals") )) || (category === "birds"  && 
            (imgAlt.includes("birds") ))
        )
        {
            item.style.display = "block";
        }
        else {
            item.style.display = "none";
        }
    });
}