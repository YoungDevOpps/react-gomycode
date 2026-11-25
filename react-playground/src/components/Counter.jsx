import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <h2>Compteur</h2>
      {/* key={count} relance l'animation à chaque changement */}
      <p key={count} className="value bump">
        {count}
      </p>
      <div className="buttons">
        <button aria-label="Diminuer" onClick={() => setCount(count - 1)}>
          <Minus size={20} />
        </button>
        <button className="secondary" onClick={() => setCount(0)}>
          Reset
        </button>
        <button aria-label="Augmenter" onClick={() => setCount(count + 1)}>
          <Plus size={20} />
        </button>
      </div>
    </div>
  )
}

export default Counter
