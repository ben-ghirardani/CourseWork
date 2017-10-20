const https = require('https');

class CountryFetcher {
  constructor() {
    this.countries = [];
  }

  fetchCountries() {
    var callback  = (response) => {  // 'this' will now be countryFetcher, => used in place of .bind(this) 
      console.log(this.countries)
    };

    https
      .get('https://restcountries.eu/rest/v1/all', callback)
      .end();
  }
}

var countryFetcher = new CountryFetcher();
countryFetcher.fetchCountries();

// const https = require('https');

// class CountryFetcher {
//   constructor() {
//     this.countries = [];
//   }

//   fetchCountries() {
//     var callback  = function(response){
//       console.log(this.countries)
//     };

//     https
//       .get('https://restcountries.eu/rest/v1/all', callback)
//       .end();
//   }
// }

// var countryFetcher = new CountryFetcher();
// countryFetcher.fetchCountries();