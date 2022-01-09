console.log("Support Laurel launch her dream career... 🚀");

// const apiKEY = "IIynkiUi3iVEppyNc1Q0pAEfUURrR0FGy9T7OGaE";


const baseURL = `https://api.nasa.gov/planetary/apod?api_key=IIynkiUi3iVEppyNc1Q0pAEfUURrR0FGy9T7OGaE&count=4`;
const imageCards = document.querySelector('[data-nasa-card]');
const renderBtn = document.querySelector('[data-reload-page]');
let nasaData;
// console.log(baseURL); //works

getNASA();
//creating fetch and converting data to json
function getNASA(){
    fetch(baseURL)
    .then(res =>res.json())
    .then(data => {
        const {
            ...nasaData //use spread operator to later map
        } = data;
        // console.log("Test 1",
        // nasaData); //works
        displayNasaCards(nasaData);
        reloadBtn();
    })
};

//rendering cards on page
function displayNasaCards(cardData){
console.log("Test 2",
cardData) //works

// console.log(cardData.length) //undefined
const nasaArray = Object.getOwnPropertyNames(cardData);

for (let i = 0; i < nasaArray.length; i++) {
// console.log("loop check"); //works

//check to see media_type
//     <img class="card-img-top" src="${cardData[i].url}" alt="${cardData[i].title}">
    imageCards.innerHTML +=     
    `<div class="col-lg-6 mb-6 mx-auto min-width">
    <div class="card">
    <a href="${cardData[i].url}" target="_blank">
    ${checkMedia(cardData[i].media_type, cardData[i].url, cardData[i].title)}
    </a>
    
        <div class="card-body">
            <h1 class="card-title">
            ${cardData[i].title} 
            
            <i onclick="toggleLike(this)" class="fa fa-thumbs-o-up"></i>
            
            </h1>
            <h2>${formatDate(new Date(cardData[i].date))}</h2>

            <button class="accordion">Learn More</button>
            <div class="panel">
              <p class="content-width">${cardData[i].explanation}</p>
            </div>

        </div>
    </div>
    </div>`
}
expandContent();
};

function formatDate(date){
    return date.toLocaleDateString(
        undefined,
        {day: 'numeric', month: 'long', year: 'numeric'}
    );
};
      
    //   console.log(formatDate(new Date())); //works

function expandContent(){
    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
};

function toggleLike(like) {
    like.classList.toggle("fa-thumbs-up");
  }

function toggleAccordion(state) {
    state.classList.toggle("fa fa-angle-up");
  }
  
//refractor else clause 
  function checkMedia(type, url, title){
      if (type !== 'image'){
          return `<img class="card-img-top" src="./media/youtube_play.png" alt="${title}"></img>`
      }
        return `<img class="card-img-top" src="${url}" alt="${title}"></img>`
  }


function reloadBtn(){
    //   console.log('Did this log on page load?') //works
      renderBtn.innerHTML +=
    `<button id="render-more">I want more <i class="fa fa-refresh" aria-hidden="true"></i>
    </button> `
}


  const reloadPage = () => {
// console.log('you clicked the btn, nice job') //works
    window.location.reload();
  };

  renderBtn.addEventListener('click', reloadPage);

//TODO: Format cards - two cards per row as default, break after two cards - can i do this within one loop?
//TODO: CSS Styling (h4, explanation, button
// TODO: aboutLaurel page with back to main page button

//TODO: research axios, app hosted heroku, button front end does fetch to server
