const navToggle = document.getElementById('menu_toggle');
const navToggler = document.getElementById('hamclose');

navToggle.addEventListener('click', function () {
  const navBar = document.querySelector('.navbar');
  navBar.classList.toggle('nav-bar-active');
  
  if (navToggler.textContent == '≡') {
    navToggler.textContent = 'x';
  } else if (navToggler.textContent = 'x') {
  navToggler.textContent = '≡';
}

})


// DOM elements
const videoContainer = document.querySelector('.video-carousel-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// Video carousel variables
let currentVideoIndex = 0;
const videos = videoContainer.querySelectorAll('video');
const videoCount = videos.length;
let timer;

// Function to display a specific video
function showVideo(index) {
    videos.forEach((video, i) => {
        if (i === index) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
}

// Function to switch to the next video
function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoCount;
    showVideo(currentVideoIndex);
}

// Function to switch to the previous video
function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videoCount) % videoCount;
    showVideo(currentVideoIndex);
}

// Function to start the automatic video change timer
function startTimer() {
    timer = setInterval(nextVideo, 5000); // Change video every 5 seconds (adjust as needed)
}

// Function to stop the automatic video change timer
function stopTimer() {
    clearInterval(timer);
}
// Event listeners

// Manual navigation using previous button
prevButton.addEventListener('click', () => {
    prevVideo();
    stopTimer();
});

// Manual navigation using next button
nextButton.addEventListener('click', () => {
    nextVideo();
    stopTimer();
});

// Restart automatic video change when leaving the video container
videoContainer.addEventListener('mouseleave', () => {
    startTimer();
});

// Initialize the carousel
showVideo(currentVideoIndex);
startTimer();


// Text that Shows on  videos carousel starts here

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    const serviceHead = document.querySelector('.service-head-text h1');
    const qualityBtnMore = document.querySelector('.qualityBtn');
    
      
    serviceHead.style.transform = 'translateX(30%)';
    serviceHead.style.opacity = 1;

    qualityBtnMore.style.transform = 'translateX(40%)';    
    qualityBtnMore.style.opacity = 1;
   

  }, 750)

});


// Text that Shows on  videos carousel
const qualities = document.querySelectorAll('.quality');
        qualities.forEach((quality, index) => {
            setTimeout(() => {
                quality.style.animation = 'slideIn 0.5s forwards';
            }, 500);
        });

// Text that Shows on  videos carousel ends here



// INTERSECTION FOR IN INTRO CLASS FOR THE SECOND SECTION IMAGE AND TEXT/MESSAGE
// Function to handle the animation for first section image when elements become visible
function handleIntersectionImage(entries, observer) {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('intro-active');
      observer.unobserve(entry.target);
    }
  });
}

// Create an  Intersection Observer for image
const observerSectionOne = new IntersectionObserver(handleIntersectionImage, {
  root: null,
  rootMargin: '10px',
  threshold: 0.2, // Trigger when 20% of the element is visible
});


// Function to handle the animation for first section text when elements become visible
function handleIntersectionTxt(entries, observer) {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('intro-active');
      observer.unobserve(entry.target);
    }
});
}

// Create an Intersection Observer for text
const observerSectionTwo = new IntersectionObserver(handleIntersectionTxt, {
  root: null,
  rootMargin: '10px',
  threshold: .05, // Trigger when 20% of the element is visible
});


// Observe the intro text part
const introSectionMsg = document.querySelector('.intro-msg');
observerSectionOne.observe(introSectionMsg);

// Observe the intro image part
const introSectionImage = document.querySelector('.intro-image');
observerSectionOne.observe(introSectionImage);


//GSAP AND INTERSECTION FOR OUR PARTNERS LOGO CHANGE
// Function to handle the intersection and add/remove the class for animation
function handleIntersectionCustomer(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Start the animation when the element enters the viewport
      const customer = entry.target;
      animateCustomer(customer);
    } else {
      // Stop the animation when the element leaves the viewport
      const customer = entry.target;
      stopAnimation(customer);
    }
  });
}


// Create an Intersection Observer
const customerObserver = new IntersectionObserver(handleIntersectionCustomer, {
  root: null,
  rootMargin: '0px',
  threshold: .05, // Adjust the threshold as needed
});

// Observe all elements with class 'customer'
const customers = document.querySelectorAll('.customer');
customers.forEach((customer, ) => {
    customerObserver.observe(customer);
    animateCustomerOpacity(customer);
});

// GSAP animation function to make an element grayscale and back to color infinitely
function animateCustomerOpacity(customer) {
  gsap.to(customer, {
    filter: 'grayscale(100%)', // Apply grayscale filter
    duration: 3, // Animation duration (in seconds)
    repeat: -1, // Infinite repeat
    yoyo: true, // Reverse animation
    ease: 'none', // Linear animation
  });
}