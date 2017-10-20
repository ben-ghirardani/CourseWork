import React from 'react'
import { render } from 'react-dom'
import Main from './components/Main'
import { HashRouter, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Pricing from './components/Pricing'

window.onload = () => {
  render(
    <HashRouter>
      <div>
      {/*the / means main will render on every page with a /, we want the nav bar to appear everywhere  */}
        <Route path="/" component={Main} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/pricing" component={Pricing} />
      </div>
    </HashRouter>,
    document.getElementById('app')
  )
}
