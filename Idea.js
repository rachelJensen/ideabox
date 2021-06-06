class Idea {
  constructor(ideaTitle, ideaBody, star) {
    this.id = Date.now();
    this.title = ideaTitle;
    this.body = ideaBody;
    this.star = star || false ;
  };

  saveToStorage(idea) {
    this.resetLocalStorage();

    var parsedLocalStorage = JSON.parse(localStorage.getItem('ideas'))
    parsedLocalStorage.push(idea);
    var saved = JSON.stringify(parsedLocalStorage);
    localStorage.setItem(`ideas`, saved);
  };

  resetLocalStorage() {
    var ideas = [];
    var strIdeas = JSON.stringify(ideas);
    if (!JSON.parse(localStorage.getItem('ideas'))) {
      localStorage.setItem(`ideas`, strIdeas);
    }
  }

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
