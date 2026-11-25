import { useState } from 'react'
import { Toaster } from 'sonner'
import Counter from './components/Counter'
import Timer from './components/Timer'
import SubmitForm from './components/SubmitForm'
import SubmissionList from './components/SubmissionList'

function App() {
  const [submissions, setSubmissions] = useState([])

  // le plus récent en premier
  const addSubmission = (item) => {
    setSubmissions([item, ...submissions])
  }

  return (
    <div className="app">
      <Toaster position="top-right" richColors />
      <h1 className="title">React Playground</h1>
      <p className="subtitle">Compteur, chronomètre et formulaire</p>
      <div className="grid">
        <Counter />
        <Timer />
        <SubmitForm onSubmit={addSubmission} />
      </div>
      <SubmissionList items={submissions} />
    </div>
  )
}

export default App
