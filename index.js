import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import NotFound from './views/not-found'
import Home from './views/home'
import Checkout from './views/checkout'
import Hulu from './views/hulu'
import Netflix from './views/netflix'
import Paramount from './views/paramount'
import HBOMax from './views/hbo-max'
import AMC from './views/amc'
import PrimeVideo from './views/prime-video'
import Disney from './views/disney'
import AppleTV from './views/apple-tv'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={NotFound} path="**" />
        <Route component={Home} exact path="/" />
        <Route component={Checkout} exact path="/checkout" />
        <Route component={Hulu} exact path="/hulu" />
        <Route component={Netflix} exact path="/netflix" />
        <Route component={Paramount} exact path="/paramount" />
        <Route component={HBOMax} exact path="/hbo-max" />
        <Route component={AMC} exact path="/amc" />
        <Route component={PrimeVideo} exact path="/prime-video" />
        <Route component={Disney} exact path="/disney" />
        <Route component={AppleTV} exact path="/apple-tv" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
