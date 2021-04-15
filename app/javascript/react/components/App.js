import React from 'react'

import TasksIndexContainer from "./TasksIndexContainer"

import { BrowserRouter, Route, Switch } from "react-router-dom"

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/tasks" component={TasksIndexContainer}/>
        <Route exact path="/starships" component={TasksIndexContainer}/>
        <Route exact path="/questions" component={TasksIndexContainer}/>
        <Route exact path="/articles" component={TasksIndexContainer}/>
        <Route exact path="/groceries" component={TasksIndexContainer}/>
      </Switch>
    </BrowserRouter>
  )
}


export default App
