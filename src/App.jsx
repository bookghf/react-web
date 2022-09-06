
import { Routes, Route} from 'react-router-dom'
import './App.css'

import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Footer from './components/Footer'


function App() {
 
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Blog" element={<Blog/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
