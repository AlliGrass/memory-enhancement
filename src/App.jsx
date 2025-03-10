import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { MainMenu } from './components/MainMenu'
import { NewVocab } from './components/NewVocab'
import { MemoryCards } from './components/MemoryCards'
import { GrammaticalRuleJpVerb } from './components/GrammaticalRuleJpVerb'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu/>}/>
        <Route path="/newvocab" element={<NewVocab/>}/>
        <Route path="/memorycards" element={<MemoryCards/>}/>
        <Route path="/grammarmatch" element={<GrammaticalRuleJpVerb/>}/>
      </Routes>
    </Router>
  )
}

export default App
