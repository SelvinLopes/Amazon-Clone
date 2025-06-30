function Redirect()
{
    window.location= "https://www.amazon.in";
}

//to select next and previous images for the background
const heroSection = document.querySelector('.hero-section');

// An array of your background image URLs
const bgImages = [
    'hero-image.jpg',
    'hero-sec-img2.jpg',
    'hero-sec-img3.jpg',
    'hero-sec-img4.jpg',
    'hero-sec-img5.jpg'
];

let currentIndex = 0;

function setBackground(index) {
    heroSection.style.backgroundImage = `url(${bgImages[index]})`;
}

// Set initial background
setBackground(currentIndex);

// Example: Next and Previous logic
document.querySelector('.control_next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % bgImages.length;
    setBackground(currentIndex);
});

document.querySelector('.control_prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + bgImages.length) % bgImages.length;
    setBackground(currentIndex);
});

//horizontal scrollbar
window.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.long-container');
    const scrollSpeed = 150; // You can try 5 or 10 for faster scroll

    scrollContainer.addEventListener('wheel', (event) => {
      event.preventDefault();//This prevents the default behavior of scrolling the page vertically.
      scrollContainer.scrollLeft += event.deltaY * scrollSpeed;
    });
  });

