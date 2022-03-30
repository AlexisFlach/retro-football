import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import { Home } from './components/home/Home'
import { Header } from './components/layout/header/Header'
import { ClubsProvider } from './context/clubs/ClubsContext'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './shared/styles/'
import { Container } from './components/styles/Container.styled'
import { ClubsList } from './components/clubs/ClubsList'
import ClubPage from './components/clubs/ClubPage'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
    green: '#004001',
    yellow: '#f7f54f',
    grey: '#646464'
  },
  mobile: '768px',
}


const App = () => {
  return (
    <ThemeProvider theme={theme} >
      <>
        <GlobalStyles />
        <ClubsProvider>
          <Router>
            <Header />
            <Container>
              <Routes>
                <Route
                  path='/'
                  element={
                    <Home />
                  }
                />
                <Route path='/about' element={<About />} />
                <Route path='/clubs' element={<ClubsList />} />
                <Route path='/clubs/:id' element={<ClubPage />} />
              </Routes>
            </Container>
          </Router>
        </ClubsProvider>
      </>
    </ ThemeProvider>
  )
}

export default App
