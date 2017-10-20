import React from 'react';

class CountrySelector extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      selectedIndex: undefined
    }
  }
  
  handleChange(e) {
    this.setState({ selectedIndex: e.target.value })
    this.props.onChangeCountry( this.props.countries[ e.target.value ] )
  }

  render() {

    // map around this.props.countries and create an option element for each
    const options = this.props.countries.map(( country, index ) => {
      return <option value={ index } key={ index } > { country.name } </option>
    })

    return (
      <select id="countries" value={ this.state.selectedIndex } onChange={ this.handleChange.bind(this) } >
        { options }
      </select>
    );
  }
}

export default CountrySelector;