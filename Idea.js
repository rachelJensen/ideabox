class Idea {
  constructor(ideaTitle, ideaBody) {
    this.id = Date.now();
    this.title = ideaTitle;
    this.body = ideaBody;
    this.star = false;
  };

  saveToStorage() {
    var stringifedIdea = JSON.stringify(this);
    localStorage.setItem(`Stored Idea ${this.id}`, stringifiedIdea);
  };

  deleteFromStorage() {

  };

  updateIdea() {

  };
};
