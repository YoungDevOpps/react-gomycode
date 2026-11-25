import { useState } from 'react'
import { toast } from 'sonner'

function SubmitForm({ onSubmit }) {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const time = new Date().toLocaleTimeString()

    onSubmit({ id: Date.now(), name, message, time })
    toast.success(`Envoyé à ${time}`)

    setName('')
    setMessage('')
  }

  return (
    <div className="card">
      <h2>Formulaire</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ton nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Ton message"
          rows="3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  )
}

export default SubmitForm
