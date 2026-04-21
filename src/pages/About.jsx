import React from 'react'

export default function About() {
  return (
    <div style={{ textAlign: 'left', padding: '20px', maxWidth: '860px', margin: '0 auto', marginTop: '50px', fontSize: '1.1rem'}}>
      <h2 style={{fontSize: '2rem', marginBottom: '20px', textAlign: 'center'}}>About DevHub Portal</h2>
      <p style={{marginBottom: '10px'}}>
        DevHub Portal is a small learning project built with React to help
        demonstrate common frontend concepts and patterns.
      </p>
      <p style={{marginBottom: '10px'}}>
        The app showcases components, props, hooks, and client-side routing
        so you can see how these building blocks fit together in a real UI.
      </p>
      <p style={{marginBottom: '10px'}}>
        User data is loaded from the JSONPlaceholder API, which provides
        placeholder JSON endpoints useful for development and demos.
      </p>
    </div>
  )
}
