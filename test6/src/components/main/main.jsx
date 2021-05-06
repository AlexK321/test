import React from 'react'

import { Switch, Route } from 'react-router-dom'
import MainPage from '../mainPage/mainPage'
import Employees from '../employees/employees'

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path={'/'} render={() => <MainPage/>} />
        <Route path={'/employees'} render={() => <Employees/>}/>
      </Switch>
    </main>
  );
}

export default (Main);
