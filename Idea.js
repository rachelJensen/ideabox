class Idea {
  constructor(ideaTitle, ideaBody, star) {
    this.id = Date.now();
    this.title = ideaTitle;
    this.body = ideaBody;
    this.star = star || false ;
  };

  saveToStorage(idea) {
    // var ideas = [];
    var strIdeas = JSON.stringify([]);

    if (!JSON.parse(localStorage.getItem('ideas'))) {
      localStorage.setItem(`ideas`, strIdeas);
    }

    var parsedLocalStorage = JSON.parse(localStorage.getItem('ideas'));
    parsedLocalStorage.push(idea);

    var saved = JSON.stringify(parsedLocalStorage);
    localStorage.setItem(`ideas`, saved);
  };

  deleteFromStorage(idNumber) {
    var parsedLocalStorage = JSON.parse(localStorage.getItem('ideas'));
    for(var i = 0; i < parsedLocalStorage.length; i++){
      if (parsedLocalStorage[i].id === Number(idNumber)) {
        parsedLocalStorage.splice(i, 1);
      }
    }
    ideas = parsedLocalStorage;
    localStorage.setItem(`ideas`, JSON.stringify(parsedLocalStorage));
  };

  updateIdea(idNumber) {
    var parsedLocalStorage = JSON.parse(localStorage.getItem('ideas'));
    for (var i = 0; i < parsedLocalStorage.length; i++) {
      if(parsedLocalStorage[i].id === Number(idNumber)) {
        parsedLocalStorage[i].star = !(parsedLocalStorage[i].star)
      }
    }
      ideas = parsedLocalStorage;
      localStorage.setItem('ideas', JSON.stringify(parsedLocalStorage));
    };
  };
