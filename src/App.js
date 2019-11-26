import React from 'react'
import './App.css'
import Nav from './components/nav'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    )
  }
}

export default App
