var app = function(){
    var url = "https://restcountries.eu/rest/v2/all"
    var populateList = document.querySelector('#populate-list')
    populateList.addEventListener('click', function(){
        makeRequest(url, requestComplete);    
    });
}

var makeRequest = function(url, callback){
    // create a new object -> XMLHttpRequest
    var request = new XMLHttpRequest();
    // set the type of request we want to make (GET request)
    request.open('GET', url);
    // tell the request which function to run when it has completed
    request.addEventListener('load', callback);
    // send request
    request.send();
}

var requestComplete = function(){
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var countries = JSON.parse(jsonString);
    populateList(countries);
}

var populateList = function(countries){
    var ul = document.querySelector('#country-list');
    countries.forEach(function(country){
        var li = document.createElement('li');
        li.innerText = country.name;
        ul.appendChild(li);
    })
}



window.addEventListener('load', app);