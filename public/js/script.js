console.log("Coming soon... 🚀")

// const apiKEY = "IIynkiUi3iVEppyNc1Q0pAEfUURrR0FGy9T7OGaE";

const baseURL = `https://api.nasa.gov/planetary/apod?api_key=IIynkiUi3iVEppyNc1Q0pAEfUURrR0FGy9T7OGaE&count=4`;

console.log(baseURL);

getNASA();

//creating fetch and converting data to json
function getNASA(){
    fetch(baseURL)
    .then(res =>res.json())
    .then(data => {
        const {
            ...nasaData //use spread operator to later map
        } = data;
        // console.log(nasaData); //works
Object.entries(nasaData).map(([key, data]) =>
        {
            return {
                date: data.date,
                content: data.explanation,
                title: data.title,
                url: data.url
            }
        }) //loop through an object

    })
}



// date: "2021-04-04"
// explanation: "Four moons are visible on the featured image -- can you find them all? First -- and farthest in the background -- is Titan, the largest moon of Saturn and one of the larger moons in the Solar System.  The dark feature across the top of this perpetually cloudy world is the north polar hood. The next most obvious moon is bright Dione, visible in the foreground, complete with craters and long ice cliffs. Jutting in from the left are several of Saturn's expansive rings, including Saturn's A ring featuring the dark Encke Gap. On the far right, just outside the rings, is Pandora, a moon only 80-kilometers across that helps shepherd Saturn's F ring. The fourth moon?  If you look closely inside Saturn's rings, in the Encke Gap, you will find a speck that is actually Pan. Although one of Saturn's smallest moons at 35-kilometers across, Pan is massive enough to help keep the Encke gap relatively free of ring particles. After more than a decade of exploration and discovery, the Cassini spacecraft ran low on fuel in 2017 and was directed to enter Saturn's atmosphere, where it surely melted."
// hdurl: "https://apod.nasa.gov/apod/image/2104/fourmoons_cassini_960.jpg"
// media_type: "image"
// service_version: "v1"
// title: "In, Through, and Beyond Saturn's Rings"
// url: "https://apod.nasa.gov/apod/image/2104/fourmoons_cassini_960.jpg"