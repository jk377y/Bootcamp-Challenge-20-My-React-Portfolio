import React from 'react'
import CV from '../../assets/pdf/resume.pdf'

// simple component that displays a link to download my resume
const Resume = () => {
  return (
    <section id="resume" className='wrapper resume'>
      <h2 className="sectionTitle">Resume</h2>
      <a href={CV} download className="btn cvBtn">Download CV</a>
    </section>
  )
}

export default Resume