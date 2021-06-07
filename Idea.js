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
    var retrievedIdeas = localStorage.getItem('ideas');

    //check if there's a stored object with the key of 'ideas', if not, set that key and assign it the value of the stringifed array
    if (!JSON.parse(retrievedIdeas)) {
      localStorage.setItem(`ideas`, strIdeas);
    }

    //parse the local storage into usable JS array
    var parsedLocalStorage = JSON.parse(retrievedIdeas);

    // add new idea to the array
    parsedLocalStorage.push(idea);

    //stringify the array and return it to storage
    var saved = JSON.stringify(parsedLocalStorage);
    localStorage.setItem(`ideas`, saved);
  };


  deleteFromStorage() {
    localStorage.removeItem(`Stored Idea ${this.id}`);
  };

  //This might need to be refactored depending on use
  updateIdea(title, body, star) {
    this.title = title;
    this.body = body;
    this.star = star;
  };
};
