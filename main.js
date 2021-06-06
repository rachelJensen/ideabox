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

//Goal to display items from local storage on page load
   //an empty ideas array (data model)
   //whatever its in localStorage
   //ability to add new idea cards to both array and storage

//output - any object in storage will also be in the ideas array (which will be displayed to the DOM via existing functionality)





function clickIdeaCardAction(event){
  if (event.target.classList.contains('delete')){
    deleteIdeaCard(event)
  } else if (event.target.classList.contains('favorite')){
    toggleFavorite(event)
  }
}

function toggleFavorite(event){
  var clickedStar = event.target.closest('.idea-card')
  for (var i = 0; i < ideas.length; i++) {
    if(ideas[i].id === Number(clickedStar.id)) {
      ideas[i].star = !(ideas[i].star)
    }
  }
  displayIdeas();
}

function deleteIdeaCard(event) {
    var clickedDelete = event.target.closest('.idea-card')
    for(var i = 0; i < ideas.length; i++){
      if (ideas[i].id === Number(clickedDelete.id)) {
        ideas.splice(i, 1);
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
  }
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
  ideas.push(idea);
  idea.saveToStorage(idea); //ADDED FOR LOCAL STORAGE
};

function displayIdeas() {
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
