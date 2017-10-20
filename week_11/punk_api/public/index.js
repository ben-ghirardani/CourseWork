var app = function(){

    var url = "https://api.punkapi.com/v2/beers";
    makeRequest(url, requestComplete);

}

var makeRequest = function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener('load', callback);
    request.send();
}

var requestComplete = function(){
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var beers = JSON.parse(jsonString);
    populateList(beers);
    // console.log(beers);
}


// split this up into smaller methods?
var populateList = function(beers){
    var ul = document.getElementById('beer-list');

    beers.forEach(function(beer){
        var li = document.createElement('li');
        var div = document.createElement('div');
        var pTagName = document.createElement('p');
        var pTagPairings = document.createElement('p');
        var img = document.createElement('img');

        // styling in style.css
        pTagName.id = 'beer-name';
        pTagPairings.id = 'food-pairings'

        img.src = beer.image_url;
        img.width = 50;
        pTagName.innerText = beer.name;
        
        // better to loop through the array and print each option.
        // pTagPairings.innerText = beer.food_pairing[0];

    // beers.forEach(function(beer){
    //     pTagPairings = beer.food_pairing;
    // })
        
        div.appendChild(pTagName);
        div.appendChild(pTagPairings);
        div.appendChild(img);
        li.appendChild(div);
        ul.appendChild(li);
        console.log(beer.food_pairing);
    });
}



window.addEventListener('load', app);