import React from 'react'
import './About.css'

const About = () => {
  return (
    <main className="about-container">
      <h1 className="about-title">About This App</h1>
      <p className="about-text">
        This small React app lets you search books using the Open Library public APIs.
        You can browse search results, see basic details, and open a detail page for each work.
      </p>
      <p className="about-text">
        It is built with React, React Router for client-side routing, and fetch for calling
        the Open Library Search, Works, and Covers APIs.
      </p>
    </main>
  )
}

export default About
