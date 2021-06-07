var ideas = [];

var saveButton = document.getElementById('saveButton')
var ideaCardBoard = document.getElementById('ideaCardBoard')
var titleInput = document.getElementById('titleInput')
var bodyInput = document.getElementById('bodyInput')
var ideaInput = document.getElementById('ideaInput')
var starredIdeaButton = document.getElementById('starredIdeaButton')

saveButton.addEventListener('click', displayNewIdea)
window.addEventListener('load', loadIdeasPage)
ideaInput.addEventListener('keyup', enableButton)
ideaCardBoard.addEventListener('click', function(event){
  clickIdeaCardAction(event)
});
starredIdeaButton.addEventListener('click', toggleDisplay)

function toggleDisplay() {
 //conditional determining displayAll or displayFavorites
  ideas = [];
  var parsedLocalStorage = JSON.parse(localStorage.getItem('ideas'));
  if (starredIdeaButton.innerText === 'Show Starred Ideas') {
    displayFavorites(parsedLocalStorage);
  } else {
    ideas = parsedLocalStorage
    displayIdeas();
    starredIdeaButton.innerText = 'Show Starred Ideas';
  }
 }

function displayFavorites(parsedLocalStorage) {
  for(var i=0; i < parsedLocalStorage.length; i++) {
    if (parsedLocalStorage[i].star) {
      ideas.push(parsedLocalStorage[i]);
    }
  }
  starredIdeaButton.innerText = "Show All Ideas"
  displayIdeas();
}

function loadIdeasPage() {
  disableButton();
  if (JSON.parse(localStorage.getItem('ideas'))) {
    var ideasFromStorage = localStorage.getItem('ideas');
    var parsedIdeasFromStorage = JSON.parse(ideasFromStorage);
    ideas = parsedIdeasFromStorage;
  };
  displayIdeas();
};

function clickIdeaCardAction(event) {
  if (event.target.classList.contains('delete')){
    deleteIdeaCard(event)
  } else if (event.target.classList.contains('favorite')){
    toggleFavorite(event)
  }
}

function toggleFavorite(event) {
  var newTestIdea = new Idea()
  var clickedStar = event.target.closest('.idea-card').id
  newTestIdea.updateIdea(clickedStar);
  displayIdeas();
}

function deleteIdeaCard(event) {
    var newTestIdea = new Idea();
    var clickedDelete = event.target.closest('.idea-card').id
    newTestIdea.deleteFromStorage(clickedDelete);
    displayIdeas();
}

function disableButton() {
  saveButton.disabled = true
};

function enableButton() {
  if (titleInput.value.length && bodyInput.value.length > 0) {
    saveButton.disabled = false
  }
};

function displayNewIdea() {
  saveIdea();
  displayIdeas();
  event.preventDefault();
  document.querySelector('form').reset();
  disableButton();
};

function saveIdea() {
  var idea = new Idea(titleInput.value, bodyInput.value)
  ideas.push(idea);
  idea.saveToStorage(idea);
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
