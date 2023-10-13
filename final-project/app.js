document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contactButton");
    const overlay = document.getElementById("overlay");
    const closeButton = document.getElementById("closeButton");
    const contactForm = document.getElementById("contactForm");
    const breedInput = document.getElementById("breedInput");
    const actionSelect = document.getElementById("actionSelect");
  
    contactButton.addEventListener("click", () => {
      overlay.style.display = "block";
    });
  
    closeButton.addEventListener("mouseover", () => {
      closeButton.style.cursor = "pointer"; 
    });
  
    closeButton.addEventListener("click", () => {
      overlay.style.display = "none"; 
    });
  
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const breed = breedInput.value;
      const action = actionSelect.value;
    });
  });
  
  