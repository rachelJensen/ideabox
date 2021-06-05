class Idea {
  constructor(ideaTitle, ideaBody, star) {
    this.id = Date.now();
    this.title = ideaTitle;
    this.body = ideaBody;
    this.star = star || false ;
  };

  saveToStorage() {
    var stringifiedIdea = JSON.stringify(this);
    localStorage.setItem(`Stored Idea ${this.id}`, stringifiedIdea);
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
