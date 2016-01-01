import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Master from './components/shared/master.jsx'

import NoMatch from './components/shared/noMatch.jsx'
import StartPage from './components/startPage.jsx'
import Game from './components/game.jsx'
import Result from './components/result.jsx'
import About from './components/about.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'

export default (
  <Route path="/" component={Master}>
    <IndexRoute component={StartPage} />
    <Route path="/game/:game" component={Game}/>
    <Route path="/result/:game" component={Result}/>
    <Route path="/about" component={About}/>
    <Route path="/faq" component={Faq}/>
    <Route path="/contact" component={Contact}/>
    <Route path="*" component={NoMatch}/>
  </Route>
)
