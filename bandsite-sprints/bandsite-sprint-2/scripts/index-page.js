const commentData = [
  {
    name: "Connor Walton",
    timestamp: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    timestamp: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    timestamp: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// Create elements & add to dom
const formEl = document.querySelector(".form");
const commentSection = document.querySelector("#comments");

const cardsList = document.createElement("div");
cardsList.classList.add("cards-list");
commentSection.append(cardsList);

const bottomDivider = document.createElement("hr")
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

  // add content 
  heading.innerText = commentObject.name;
  timestamp.innerText = commentObject.timestamp;
  body.innerText = commentObject.comment;

  // put all the pieces into a card
  commentContainer.append(heading, timestamp);
  commentText.append(commentContainer, body);
  comment.append(avatar, commentText);
  cardsList.append(divider);
  
  // add the card to the cards list
  cardsList.append(comment);

  // return comment to access in our above function 
  return comment;
};


formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const comment = e.target.comment.value;

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  const timestamp = `${month}/${day}/${year}`;

  const newComment = {
    name,
    timestamp,
    comment,
  };

  commentData.unshift(newComment);
  cardsList.innerHTML = "";
  commentData.forEach((comment) => displayComment(comment));

  e.target.reset();
});


commentData.forEach((comment) => displayComment(comment));

cardsList.append(bottomDivider);