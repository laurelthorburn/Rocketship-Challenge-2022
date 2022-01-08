console.log("Support Laurel launch her dream career... 🚀");

// const apiKEY = "IIynkiUi3iVEppyNc1Q0pAEfUURrR0FGy9T7OGaE";
const baseURL = `https://api.nasa.gov/planetary/apod?api_key=IIynkiUi3iVEppyNc1Q0pAEfUURrR0FGy9T7OGaE&count=4`;
const imageCards = document.querySelector('[data-nasa-card]');
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
    })
};

//rendering cards on page
function displayNasaCards(cardData){
// console.log("Test 2",
// cardData) //works

// console.log(cardData.length) //undefined
const nasaArray = Object.getOwnPropertyNames(cardData);

for (let i = 0; i < nasaArray.length; i++) {
// console.log("loop check"); //works
    imageCards.innerHTML +=     
    `<div class="col-lg-6 mb-3">
    <div class="card">
        <img class="card-img-top" src="${cardData[i].url}" alt="${cardData[i].title}">
    
        <div class="card-body">
            <h5 class="card-title">${cardData[i].title} || ${formatDate(new Date(cardData[i].date))} <a href="${cardData[i].url}" class="btn btn-outline-secondary btn-sm">
            <i class="far fa-heart"></i></a></h5>
            <p>${cardData[i].explanation}</p>
            <a href="${cardData[i].url}" class="btn btn-outline-primary btn-block">
                Expand
            </a>
        </div>
    </div>
    </div>`
}
};

function formatDate(date){
        return date.toLocaleDateString(
              undefined,
              {day: 'numeric', month: 'long', year: 'numeric'}
        );
      };
      
      console.log(formatDate(new Date()));

//TODO: Format Date
//TODO: Format cards - two cards per row as default, break after two cards - can i do this within one loop?
//TODO: Create expand feature for explanation
//TODO: Create link on img to make image larger



