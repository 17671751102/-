import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Even from './component/even.js'
import Leak from './component/leak.js'
import Home from './component/home.js'
import Header from './component/header.js'
class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path='/' component={Home}/>
          <Route path='/2222' component={Leak}/>
          <Route path='/3333' component={Even}/>
        </div>
      </BrowserRouter>
    )
  }
}
export default App