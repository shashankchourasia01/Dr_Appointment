import React from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <h1 style={{ color: 'var(--color-primary)' }} className="text-2xl font-bold p-4">
        Dr. Dinesh Kumar Agarwal
      </h1>
      <p style={{ color: 'var(--color-secondary)' }} className="px-4">
        Spine Surgery & Orthopaedics Specialist
      </p>
      
      {/* Test buttons */}
      <div className="p-4 space-x-2">
        <button style={{ backgroundColor: 'var(--color-primary)' }} className="text-white px-4 py-2 rounded">
          Primary Button
        </button>
        <button style={{ backgroundColor: 'var(--color-accent)' }} className="text-white px-4 py-2 rounded">
          Accent Button
        </button>
      </div>
    </div>
  );
}

export default App;