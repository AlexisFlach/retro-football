import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import Home from './components/home/Home'
import { ClubsProvider } from './context/clubs/ClubsContext'

const App = () => {
  return (
    <div>
      <ClubsProvider>
        <Router>
          <Routes>
            <Route
              path='/'
              element={
                <Home />
              }
            />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
      </ClubsProvider>
    </div >
  )
}

export default App
