import './App.css'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'


function App() {

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
