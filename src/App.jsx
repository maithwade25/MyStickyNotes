import { useState } from 'react'
import NotesPage from './pages/NotesPage'; 
import NoteProvider from './context/NoteContext';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="app">
      <NoteProvider>
          <NotesPage />
      </NoteProvider>
      
    </div>
  )
}

export default App
