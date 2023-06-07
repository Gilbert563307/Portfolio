const progressContainer = document.querySelector(".progress-container");
const modal = document.getElementById("modal");
let slideImage = document.querySelector("#slide_img");
let currentSlideImage = 1;

checkForScroll();
window.onscroll = () => {
    checkForScroll();
    pageScroll();
};

function checkForScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    if (scrolled === 0) {
        progressContainer.style.display = "none";
    } else {
        progressContainer.style.display = "block";
    }
}

function pageScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".progress-bar").style.width = scrolled + "%";
}

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function nextPicture() {
    if (currentSlideImage >= 1 && currentSlideImage < 9) {
        currentSlideImage++;
        slideImage.src = `./src/images/slide_${currentSlideImage}.png`;
    } else {
        currentSlideImage = 1;
    }
}

function prevPicture() {
    if (currentSlideImage < 9 && currentSlideImage > 1) {
        currentSlideImage--;
        slideImage.src = `./src/images/slide_${currentSlideImage}.png`;
    } else {
        currentSlideImage = 1;
    }
}