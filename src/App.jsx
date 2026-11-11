
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AddMovie from './pages/AddMovie'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="*" element={<Navigate to="/add-movie" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
