var ideas = [];

var saveButton = document.getElementById('saveButton')
var ideaCardBoard = document.getElementById('ideaCardBoard')
var titleInput = document.getElementById('titleInput')
var bodyInput = document.getElementById('bodyInput')
var ideaInput = document.getElementById('ideaInput')

saveButton.addEventListener('click', displayNewIdea)
window.addEventListener('load', disableButton)
ideaInput.addEventListener('keyup', enableButton)
ideaCardBoard.addEventListener('click', function(event){
  clickIdeaCardAction(event)
});

function clickIdeaCardAction(event){
  if (event.target.classList.contains('delete')){
    deleteIdeaCard(event)
  } else if (event.target.classList.contains('favorite')){
    toggleFavorite(event)
  }
}

function toggleFavorite(event){
  //if the star is clicked
  //change the value of idea.star to the value it currently is not
  var clickedStar = event.target.closest('.idea-card')
  for (var i = 0; i < ideas.length; i++) {
    if(ideas[i].id === Number(clickedStar.id)) {
      ideas[i].star = !(ideas[i].star)

    }
  }
  displayIdeas();
}

function deleteIdeaCard(event){
    var clickedDelete = event.target.closest('.idea-card')
    for(var i = 0; i < ideas.length; i++){
      if (ideas[i].id === Number(clickedDelete.id)) {
        ideas.splice(i, 1)
      }
    }
    displayIdeas();
  }


function disableButton(){
  saveButton.disabled = true
};

function enableButton(){
  if (titleInput.value.length && bodyInput.value.length > 0) {
    saveButton.disabled = false
  };
};

function displayNewIdea(){
  saveIdea();
  displayIdeas();
  event.preventDefault();
  document.querySelector('form').reset();
  disableButton();
};

function saveIdea() {
  var idea = new Idea(titleInput.value, bodyInput.value)
  ideas.push(idea)
};

function displayIdeas(){
  var starToDisplay;
  ideaCardBoard.innerHTML = "";
  for (var i = 0; i < ideas.length; i++) {
      if (!ideas[i].star) {
        starToDisplay = 'src="assets/star.svg" alt="empty star"';
      } else {
        starToDisplay = 'src="assets/star-active.svg" alt="red star"';
      };
    ideaCardBoard.innerHTML +=
    `<article class="idea-card" id="${ideas[i].id}" >
      <div class="card-upper-border">
        <button class="upper">
          <img class="icon favorite" ${starToDisplay}/>
        </button>
        <button class="upper">
          <img class="icon upper delete" src="assets/delete.svg" alt="X"/>
        </button>
      </div>
      <div class="card-info-field">
        <h1 class="card-title" id="cardTitle">${ideas[i].title}</h1>
        <p id="cardBody">${ideas[i].body}</p>
      </div>
      <div class="card-lower-border">
        <button class="add-comment-button" type="submit">
          <img class="icon" src="assets/comment.svg" alt="plus sign with white circle"/>
        </button>
        <h4>Comment</h4>
      </div>
    </article>`
  };
};


//ITERATION 3 - Favoriting and deleting
// GOAL:
// When delete button is clicked
// the card object should be removed from the array
// display should be updated to show new array
// INPUT:
// Exisiting array
// identification of the element to remove
// OUTPUT:
// An updated array
// An updated display not containing the deleted card
// LOGIC:
// The element that has been clicked
// if the object within the array contains the same information (ID?) as the card that was clicked
// then remove the object from the ideas array
// refresh the display


// GOAL:
// When the "star" button is clicked,
// the "star" button turns from a clear image to a red image
// INPUT:
// An exisitng array
// An identification of the element that needs to be changed
// OUTPUT:
// an updated object within the array reflecting the star key updated to true
// refreshed display reflecting update
// LOGIC:
// If a star element is clicked,
// find the ID of the clicked card,
// find that ID within an object within the ideas array
  // Loop through the ideas array to find an object with the matching
  // IF the object contains the ID, then:
  // update the star property within the object to "true"
  // IF NOT, keep it movin

  // for bullet point 3, we think the logic will be the opposite of this ^^^
  // once it's functional,
  // it may be easier to see how best to go about switching the favorite property back
