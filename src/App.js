import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import ContactList from './pages/ContactList'
import Chat from './pages/Chat'

function App() {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/contact-list' component={ContactList} />
      <Route path='/chat' component={Chat} />
      <Route exact path='/'>
        <Redirect to='/login' />
      </Route>
    </Switch>
  )
}

export default App
