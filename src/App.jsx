import React, { useState } from 'react'
import Header from './components/Header'

export default function App() {
  const [authenticated, setAuthenticated] = useState(false)

  return (
    <div>
      <Header authenticated={authenticated} setAuthenticated={setAuthenticated} />
      <main style={{ padding: 24 }}>
        <h1>Welcome to DND Manager</h1>
        <p>This is a starter page. Use the user icon to sign in.</p>
      </main>
    </div>
  )
}
