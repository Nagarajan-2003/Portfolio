import React from 'react'
import Header from '../src/Components/Header/Header'
import TopContainer from './Components/TopContainer/TopContainer'
import Skill from './Components/Skill/Skill'
import Project from './Components/Project/Project'
import './App.css'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/Contact'
const App = () => {
  console.log("rendered app.jsx")
  return (
    <div>
      <Header/>
      <TopContainer/>
      <Skill/>
      <Project/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App