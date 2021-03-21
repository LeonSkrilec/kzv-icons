import React from 'react'
import './App.css'
import IconsTesting from './IconsTesting'
import IconsMapping from './IconsMapping'

function App() {
  return (
    <div className='App'>
      <div className='row'>
        <IconsTesting></IconsTesting>
        <div style={{ marginLeft: 40 }}>
          <IconsMapping></IconsMapping>
        </div>
      </div>
    </div>
  )
}

export default App
