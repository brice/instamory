import React from 'react'
import { render } from 'react-dom'

function App(props) {
  return (
    <div className="App">
      Hello {props.name}
    </div>
  )
}

render((<App name="World"/>), document.getElementById('app'));