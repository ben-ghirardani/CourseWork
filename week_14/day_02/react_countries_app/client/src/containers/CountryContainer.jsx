import React from 'react';
import CountrySelector from '../components/CountrySelector';
import CountryDetail from '../components/CountryDetail';

class CountryContainer extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      countries: [],
      selectedCountry: null
    }
  }

  onChangeCountry(country) {
    this.setState({selectedCountry: country})
  }

  componentDidMount() {
    // set up a new request
    const url = 'https://restcountries.eu/rest/v2/all'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url)
    // pass a callback to it's onload
    xhr.onload = () => {
      if( xhr.status === 200 ) {
        const data = JSON.parse( xhr.responseText )
        this.setState({
          countries: data
        })
      }
    }
    // send the request
    xhr.send();
  }

  // fetch("https://restcountries.eu/rest/v2/all")
  //   .then((res) => res.json())
  //   .then((res) => this.setState({ countries: [res]}));


  render(){
    return (
      <div>
        <h2>Country Container</h2>
        <CountrySelector countries={this.state.countries} onChangeCountry={ this.onChangeCountry.bind(this) }/>
        <CountryDetail country={ this.state.selectedCountry }/>
      </div>
    );
  }
}

export default CountryContainer;