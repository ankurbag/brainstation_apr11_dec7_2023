// Create content and enter into dom
const heroEl = document.querySelector(".hero--shows");

const mainEl = document.createElement("main");
const sectionEl = document.createElement("section");
const headingEl = document.createElement("h2");

const cardsContEl = document.createElement("div");
cardsContEl.classList.add("cards-container");

const cardsHeaderEl = document.createElement("div");
const dateHeaderEl = document.createElement("p");
const venueHeaderEl = document.createElement("p");
const locationHeaderEl = document.createElement("p");

dateHeaderEl.innerText = "DATE";
venueHeaderEl.innerText = "VENUE";
locationHeaderEl.innerText = "LOCATION";

cardsHeaderEl.classList.add("hide-on-mobile", "card__header");
dateHeaderEl.classList.add("card__heading");
venueHeaderEl.classList.add("card__heading");
locationHeaderEl.classList.add("card__heading");

cardsHeaderEl.append(dateHeaderEl, venueHeaderEl, locationHeaderEl);

sectionEl.prepend(headingEl);
heroEl.after(mainEl);
mainEl.append(sectionEl);
sectionEl.append(cardsContEl);
cardsContEl.prepend(cardsHeaderEl);

sectionEl.classList.add("cards");
headingEl.innerText = "Shows";
headingEl.classList.add("cards__heading");

const makeCard = (show, i) => {
  // create elements
  const cardEl = document.createElement("article");
  const dateContainerEl = document.createElement("div");
  const dateHeadingEl = document.createElement("p");
  const dateTextEl = document.createElement("p");
  const venueContainerEl = document.createElement("div");
  const venueHeadingEl = document.createElement("p");
  const venueTextEl = document.createElement("p");
  const locationContainerEl = document.createElement("div");
  const locationHeadingEl = document.createElement("p");
  const locationTextEl = document.createElement("p");
  const button = document.createElement("button");
  const divider = document.createElement("hr");

  // assign classes
  cardEl.classList.add("card");
  dateContainerEl.classList.add("card__container");
  dateHeadingEl.classList.add("card__heading");
  dateTextEl.classList.add("card__text--bold");
  venueContainerEl.classList.add("card__container");
  venueHeadingEl.classList.add("card__heading");
  venueTextEl.classList.add("card__text");
  locationContainerEl.classList.add("card__container");
  locationHeadingEl.classList.add("card__heading");
  locationTextEl.classList.add("card__text");
  button.classList.add("btn");
  divider.classList.add("content-divider");

  // hide date venue location headings
  dateHeadingEl.classList.add("hide-for-medium");
  venueHeadingEl.classList.add("hide-for-medium");
  locationHeadingEl.classList.add("hide-for-medium");

  // Convert timestamp to human readable
  const timestamp = show.date;
  const eventDate = new Date(timestamp);

  // innerText
  dateHeadingEl.innerText = "DATE";
  venueHeadingEl.innerText = "VENUE";
  locationHeadingEl.innerText = "LOCATION";
  button.innerText = "BUY TICKETS";
  dateTextEl.innerText = eventDate.toDateString();
  venueTextEl.innerText = show.place;
  locationTextEl.innerText = show.location;

  // put all the pieces in the card
  dateContainerEl.append(dateHeadingEl, dateTextEl);
  venueContainerEl.append(venueHeadingEl, venueTextEl);
  locationContainerEl.append(locationHeadingEl, locationTextEl);
  cardEl.append(dateContainerEl, venueContainerEl, locationContainerEl, button);
  cardsContEl.append(cardEl, divider);

  // Select all cards with .card class
   cardEl.addEventListener("click", toggleClicked);
  
};

// Click event function
const toggleClicked = (event) => {
  const closestCard = event.target.closest(".card");
  const currentlyClicked = document.querySelectorAll(".clicked");
  for (let i = 0; i < currentlyClicked.length; i++) {
    if (closestCard !== currentlyClicked[i]) {
      currentlyClicked[i].classList.remove("clicked");
    }
  }
  closestCard.classList.toggle("clicked");
};

// POPULATE SHOWS PAGE WITH SHOWS DATA THAT IS PULLED FROM THE API
// API Key
const apiKey = "f674ad2c-9472-4a18-a693-affb009c0829";

// API Call
axios
  .get(`https://project-1-api.herokuapp.com/showdates/?api_key=${apiKey}`)
  .then((response) => {
    response.data.forEach((show) => {
      makeCard(show)
    });
  })
 
