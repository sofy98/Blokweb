
  /* main micro interaction */
// Select the main element
const mainElement = document.querySelector('main');

// Options for the Intersection Observer for main element appearance
const mainAppearOptions = {
  rootMargin: "0px 0px -75px 0px" // Element needs to be 75px from the bottom
};

// Intersection Observer to handle main element appearance on scroll
const appearOnScrollMain = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      // No intersection
      if (!entry.isIntersecting) {
        return;
      }
      // Yes intersection
      else {
        entry.target.classList.add("appear");
        observer.unobserve(entry.target); // Only observes once
      }
    });





    /* img micro interaction */
  },
  mainAppearOptions
);

// Observe the main element
appearOnScrollMain.observe(mainElement);

const images = document.querySelectorAll('main img');

// Options for the Intersection Observer for image appearance
const imageAppearOptions = {
  threshold: 0.2, // Adjust this threshold based on when you want the effect to trigger
};

// Intersection Observer to handle image appearance on scroll
const appearOnScrollImage = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      // No intersection
      if (!entry.isIntersecting) {
        return;
      }
      // Yes intersection
      else {
        entry.target.classList.add("appear");
        observer.unobserve(entry.target); // Only observes once
      }
    });
  },
  imageAppearOptions
);

// Observe each image
images.forEach(image => {
  appearOnScrollImage.observe(image);
});

/* with help from chat gpt */