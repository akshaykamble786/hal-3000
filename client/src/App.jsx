import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import Stats from './pages/Stats.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/stats' element={<Stats />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App