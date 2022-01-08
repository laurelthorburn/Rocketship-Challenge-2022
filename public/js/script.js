console.log("Coming soon... 🚀")

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
        console.log("Test 1",
        nasaData); //works
Object.entries(nasaData).map(([key, data]) => //do i need the key?
        {
            return {
                key,
                date: data.date,
                content: data.explanation,
                title: data.title,
                url: data.url
            }
        }) //loop through an object
        displayNasaCards(nasaData);
    })

}

// displayNasaCards();
//rendering cards on page
function displayNasaCards(cardData){
console.log("Test 2",
cardData)
// array.forEach(nasaData, i => {
//     imageCards.innerHTML =     `<div class="col-lg-6 mb-4">

//     <div class="card">
//         <img class="card-img-top" src="${[i].url}" alt="${[i].title}">
    
//         <div class="card-body">
//             <h5 class="card-title">${[i].title} || ${[i].date} <a href="${[i].url}" class="btn btn-outline-secondary btn-sm">
//             <i class="far fa-heart"></i></a></h5>
//             <p>${[i].content}</p>
//             <a href="${[i].url}" class="btn btn-outline-primary btn-block">
//                 Learn More...
//             </a>
//         </div>
//     </div>
//     </div>`

// });


};

//TODO: Format Date


// date: "2021-04-04"
// explanation: "Four moons are visible on the featured image -- can you find them all? First -- and farthest in the background -- is Titan, the largest moon of Saturn and one of the larger moons in the Solar System.  The dark feature across the top of this perpetually cloudy world is the north polar hood. The next most obvious moon is bright Dione, visible in the foreground, complete with craters and long ice cliffs. Jutting in from the left are several of Saturn's expansive rings, including Saturn's A ring featuring the dark Encke Gap. On the far right, just outside the rings, is Pandora, a moon only 80-kilometers across that helps shepherd Saturn's F ring. The fourth moon?  If you look closely inside Saturn's rings, in the Encke Gap, you will find a speck that is actually Pan. Although one of Saturn's smallest moons at 35-kilometers across, Pan is massive enough to help keep the Encke gap relatively free of ring particles. After more than a decade of exploration and discovery, the Cassini spacecraft ran low on fuel in 2017 and was directed to enter Saturn's atmosphere, where it surely melted."
// hdurl: "https://apod.nasa.gov/apod/image/2104/fourmoons_cassini_960.jpg"
// media_type: "image"
// service_version: "v1"
// title: "In, Through, and Beyond Saturn's Rings"
// url: "https://apod.nasa.gov/apod/image/2104/fourmoons_cassini_960.jpg"