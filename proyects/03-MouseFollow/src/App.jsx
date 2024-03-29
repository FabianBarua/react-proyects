import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handlemove = event => {
      const { clientX, clientY } = event
      setPointer({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handlemove)
    }

    return () => window.removeEventListener('pointermove', handlemove)
  }, [enabled])
  return (
    <>
      <main>
        <h3>Mouse Follower</h3>
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: '1px solid #fff',
            borderRadius: '50%',
            opacity: 0.8,
            pointerEvents: 'none',
            left: -25,
            top: -25,
            width: 50,
            height: 50,
            transform: `translate(${pointer.x}px, ${pointer.y}px)`
          }}
        />
        <button
          onClick={() => {
            setEnabled(!enabled)
          }}
        >
          {enabled ? 'Desactivar' : 'Activar'} Seguimiento
        </button>
      </main>
    </>
  )
}

export default App
