class Idea {
  constructor(ideaTitle, ideaBody, star) {
    this.id = Date.now();
    this.title = ideaTitle;
    this.body = ideaBody;
    this.star = star || false ;
  };

  saveToStorage(idea) {
    // in order to make sure that the localStorage object is being updated with new information without duplicating existing data, this empties the idea array
    var ideas = [];
    var strIdeas = JSON.stringify(ideas);
    // var retrievedIdeas = localStorage.getItem('ideas');

    //check if there's a stored object with the key of 'ideas', if not, set that key and assign it the value of the stringifed array
    if (!JSON.parse(localStorage.getItem('ideas'))) {
      localStorage.setItem(`ideas`, strIdeas);
    }

    //parse the local storage into usable JS array
    var parsedLocalStorage = JSON.parse(localStorage.getItem('ideas'));

    // add new idea to the array
    parsedLocalStorage.push(idea);

    //stringify the array and return it to storage
    var saved = JSON.stringify(parsedLocalStorage);
    localStorage.setItem(`ideas`, saved);
  };


  deleteFromStorage(idNumber) {
// go to local storage and get the stored array of idea objects
// parse the array of objects into JS
  var parsedLocalStorage = JSON.parse(localStorage.getItem('ideas'));
// loop over the parsed array
// find the object whose ID matches the ID of the clicked element
// splice out the object from the array
  for(var i = 0; i < parsedLocalStorage.length; i++){
    if (parsedLocalStorage[i].id === Number(idNumber)) {
      parsedLocalStorage.splice(i, 1);
    }
  }
// then takes the new array and reassign it as the value of ideas
  ideas = parsedLocalStorage;
// then restringify
// and send back to storage
    localStorage.setItem(`ideas`, JSON.stringify(parsedLocalStorage));
  };

  //This might need to be refactored depending on use
  updateIdea(idNumber) {
    var parsedLocalStorage = JSON.parse(localStorage.getItem('ideas'));
    console.log(parsedLocalStorage);
    for (var i = 0; i < parsedLocalStorage.length; i++) {
      console.log('butts')
      if(parsedLocalStorage[i].id === Number(idNumber)) {
        console.log('ids matched')
        parsedLocalStorage[i].star = !(parsedLocalStorage[i].star)
        console.log(parsedLocalStorage[i].star);
      }
    }
      ideas = parsedLocalStorage;
      localStorage.setItem('ideas', JSON.stringify(parsedLocalStorage));
    };
  };
