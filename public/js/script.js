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
            <h5 class="card-title">${cardData[i].title} <a href="${cardData[i].url}" class="btn btn-outline-secondary btn-sm">
            <i class="far fa-heart"></i></a></h5>
            <h4>${formatDate(new Date(cardData[i].date))}</h4>

            <button type="button" class="collapsible">Learn More...</button>
            <div class="content">
            <p>${cardData[i].explanation}</p>
            </div>



            <a href="${cardData[i].url}" class="btn btn-outline-primary btn-block">
                Expand
            </a>
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
    const coll = document.getElementsByClassName("collapsible");
    let index;

    for (index = 0; index < coll.length; index++) {
    coll[index].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
        content.style.display = "none";
        } else {
        content.style.display = "block";
        }
    });
    }
};

//TODO: Format cards - two cards per row as default, break after two cards - can i do this within one loop?
//TODO: Create expand feature for explanation
//TODO: Create link on img to make image larger
//TODO: Create like button
//TODO: CSS Styling (h4, explanation, button
// TODO: aboutLaurel page



