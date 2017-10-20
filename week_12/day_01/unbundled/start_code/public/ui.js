var UI = function(){
  var films = new Films();
  this.render(films);
}

UI.prototype = {
  createText: function(text, label){
    var p = document.createElement("p");
    p.innerText = label+text;
    return p;
  },

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  createReview: function(container, review){
    this.appendText(container, review.comment, "Comment: ");
    this.appendText(container, review.rating, "Rating: ");
  },

  render: function(films) {
    var container = document.getElementById("films");

    for(var film of films) {
      var li = document.createElement("li");
      this.appendText(li, film.title, "Film: ");
      
      for(var review of film.reviews){
        this.createReview(li, review);
      }
      container.appendChild(li);
    }
  }
}

render: function(reviews){
  var container = document.getElementById("reviews");
  for(var review of reviews) {
    var li = document.createElement("li");
    this.appendItem(li, review.film.title, "Title: ");
    this.appendItem(li, review.comment, "Comment: ");
    this.appendItem(li, review.rating, "Rating: ");
    this.appendItem(li, review.author, "Reviewer: "); //NEW
    container.appendChild(li);
  }
}