import React, { Component } from 'react'
import logo from '../logo.png'

class Nav extends Component {
  render() {
    return (
      <header className="nav">
        <img src={logo} className="logo" alt="logo" />
        <button type="button" className="link">Menu 1</button>
        <button type="button" className="link">Menu 2</button>
        <button type="button" className="link">Menu 3</button>
        <button type="button" className="link r-buttons btn-login">Login</button>
        <button type="button" className="button btn-sign-up">Sign Up</button>
      </header>
    )
  }
}

export default Nav