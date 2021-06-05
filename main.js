var ideas = [];
//var newIdea = new Idea('Idea Title', 'Idea Body Test Butts');

//Iteration 2
// When I click save
  // if I entered a title and body,
  // a new idea card should appear

//goal save and display the user input title and body to a new idea card

  //output -
    //new idea card is saved to ideas array
    //displayed on browser
  //inputs
    // value of the title field
    // value of the body field

  //logic
    //make query selector of saved button
    //make event handler of saved button

var saveButton = document.getElementById('saveButton')
var ideaCardBoard = document.getElementById('ideaCardBoard')
var titleInput = document.getElementById('titleInput')
var bodyInput = document.getElementById('bodyInput')
var ideaInput = document.getElementById('ideaInput')

saveButton.addEventListener("click", saveIdea)
window.addEventListener("load", disableButton)
ideaInput.addEventListener("keyup", enableButton)

function disableButton(){
  saveButton.disabled = true
}

function enableButton(){
  if (titleInput.value.length && bodyInput.value.length > 0) {
    saveButton.disabled = false
  }
}

function saveIdea(){
  event.preventDefault()
  ideaCardBoard.innerHTML +=
  `<article class="idea-card">
    <div class="card-upper-border">
      <button class="upper">
        <img class="icon" src="assets/star.svg" alt="star"/>
      </button>
      <button class="upper">
        <img class="icon upper" src="assets/delete.svg" alt="X"/>
      </button>
    </div>
    <div class="card-info-field">
      <h1 id="cardTitle" class="card-title">${titleInput.value}</h1>
      <p id="cardBody">${bodyInput.value}</p>
    </div>
    <div class="card-lower-border">
      <button class="add-comment-button" type="submit">
        <img class="icon" src="assets/comment.svg" alt="plus sign with white circle"/>
      </button>
      <h4>Comment</h4>
    </div>
  </article>`
   document.querySelector('form').reset();
   saveButton.disabled = true
}



    // on click of save button, a new Idea instance is generated (update data model first)
      //assign title input to idea instance title property
      //assign body input to idea instance body property
    //new instance should be saved to the ideas array

    //use ideas array to generate display cards
      //for each object in the array
      //use it to update the innerHTML section to display the new card
