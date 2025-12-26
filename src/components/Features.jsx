import React from 'react'

const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Experience blazing-fast performance with our optimized infrastructure.'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Your data is protected with enterprise-grade security measures.'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Create stunning experiences with our intuitive design tools.'
    },
    {
      icon: '📈',
      title: 'Scale Easily',
      description: 'Grow without limits with our scalable architecture.'
    },
    {
      icon: '🌐',
      title: 'Global Reach',
      description: 'Reach audiences worldwide with our global infrastructure.'
    },
    {
      icon: '💡',
      title: 'Smart Analytics',
      description: 'Make data-driven decisions with powerful analytics tools.'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

