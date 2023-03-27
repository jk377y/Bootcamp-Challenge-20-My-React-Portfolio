import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Resume from "./components/resume/Resume";
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <Projects />
      <Contact />
      <Resume />
      <Footer />
    </>
  )
}

export default App