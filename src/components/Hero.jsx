import React from 'react'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Build Something Amazing</h1>
          <p className="hero-subtitle">
            Transform your ideas into reality with our powerful platform. Join thousands of creators who are already building the future.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn btn-primary">Get Started Free</a>
            <a href="#" className="btn btn-secondary">Watch Demo</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="gradient-orb"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

