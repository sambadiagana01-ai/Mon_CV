import './App.css'
import { infoPerso, experiences, competences } from './data/cv.js'
import InfoPerso from './components/InfoPerso.jsx'
import Experiences from './components/Experiences.jsx'
import Competences from './components/Competences.jsx'

function App() {
  return (
    <main className="page">
      <InfoPerso info={infoPerso} />
      <Experiences liste={experiences} />
      <Competences liste={competences} />
    </main>
  )
}

export default App