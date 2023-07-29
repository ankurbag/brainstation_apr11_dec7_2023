// API KEY
const apiKey = "f674ad2c-9472-4a18-a693-affb009c0829";

const comments = [];

// Create elements & add to dom
const formEl = document.querySelector(".form");
const commentSection = document.querySelector("#comments");

const cardsList = document.createElement("div");
cardsList.classList.add("cards-list");
commentSection.append(cardsList);

const bottomDivider = document.createElement("hr");
bottomDivider.classList.add("content-divider");

const displayComment = (commentObject) => {
  // create pieces
  const comment = document.createElement("article");
  const avatar = document.createElement("div");
  const commentText = document.createElement("div");
  const commentContainer = document.createElement("div");
  const heading = document.createElement("h3");
  const timestamp = document.createElement("p");
  const body = document.createElement("p");
  const divider = document.createElement("hr");

  // add classes
  comment.classList.add("comment");
  avatar.classList.add("avatar--comment");
  commentText.classList.add("comment__text");
  commentContainer.classList.add("comment__container");
  heading.classList.add("comment__heading");
  timestamp.classList.add("comment__timestamp");
  body.classList.add("comment__body");
  divider.classList.add("content-divider");

  // Convert timestamp to human readable
  const commentTimestamp = commentObject.timestamp;
  const eventDate = new Date(commentTimestamp);

  // add content
  heading.innerText = commentObject.name;
  timestamp.innerText = eventDate.toLocaleDateString();
  body.innerText = commentObject.comment;

  // put all the pieces into a card
  commentContainer.append(heading, timestamp);
  commentText.append(commentContainer, body);
  comment.append(avatar, commentText);
  cardsList.append(divider);

  // add the card to the cards list
  cardsList.append(comment);
};

// API Call
function axiosGet() {
  axios
    .get(`https://project-1-api.herokuapp.com/comments/?api_key=${apiKey}`)
    .then((response) => {
      sortData(response.data);

      response.data.forEach((comment) => {
        displayComment(comment);
      });
    });
}

axiosGet();

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
 console.log(e.target);
  const name = e.target.name.value;
  const comment = e.target.comment.value;

  const newComment = {
    name,
    comment,
  };

  cardsList.innerHTML = "";
  e.target.reset();

  axios
    .post(
      `https://project-1-api.herokuapp.com/comments/?api_key=${apiKey}`,
      newComment
    )
    .then((response) => {
      axios
        .get(`https://project-1-api.herokuapp.com/comments/?api_key=${apiKey}`)
        .then((response) => {
          sortData(response.data);

          response.data.forEach((comment) => {
            displayComment(comment);
          });
        });
    });
});

// Sort function
function sortData(data) {
  return data.sort((a, b) => {
    const timeStampA = a.timestamp;
    const timeStampB = b.timestamp;
    if (timeStampB < timeStampA) {
      return -1;
    }
    if (timeStampB > timeStampA) {
      return 1;
    }
  });
}
