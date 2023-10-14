document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contactButton");
    const overlay = document.getElementById("overlay");
    const closeButton = document.getElementById("closeButton");
    const contactForm = document.getElementById("contactForm");
    const breedInput = document.getElementById("breedInput");
    const actionSelect = document.getElementById("actionSelect");

    fetchData()
  
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
function fetchData() {
    fetch(`https://api.thedogapi.com/v1/breeds`,{headers:{'x-api-key':'live_58Ek6Are6X9LNjSvIPvXw3NoVIUA00yrpxgBty5IBjIKY9KCulCE3wl5GZsPdD1f'}})
    .then(response => response.json())
    .then(dogBreeds => {
        displaydogBreeds(dogBreeds)
    })
}  

function displaydogBreeds(dogBreeds) {
  console.log(dogBreeds)
  const main=document.querySelector('#Dogs')
  dogBreeds.forEach(dogBreed => {
    if (dogBreed.id<=15) {
      const div=document.createElement('div')
      div.className='breed-box'
      div.innerHTML=`
      <img src="${dogBreed.image.url}" alt="">
      <h2>${dogBreed.name}</h2>
      <p>${dogBreed.bred_for}</p>
      <p>${dogBreed.temperament}</p>
      <p>${dogBreed.life_span}</p>
      <p>${dogBreed.weight.metric}</p>
      `    
      main.appendChild(div)
    }
  });
}