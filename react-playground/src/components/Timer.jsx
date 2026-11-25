import { useState, useEffect } from 'react'

function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(true)

  useEffect(() => {
    if (!running) return

    const id = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)

    // nettoyage quand le composant change ou disparaît
    return () => clearInterval(id)
  }, [running])

  return (
    <div className="card">
      <h2>Chronomètre</h2>
      <p className={running ? 'value pulse' : 'value'}>{seconds} s</p>
      <div className="buttons">
        <button onClick={() => setRunning(!running)}>
          {running ? 'Pause' : 'Reprendre'}
        </button>
        <button className="secondary" onClick={() => setSeconds(0)}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Timer
