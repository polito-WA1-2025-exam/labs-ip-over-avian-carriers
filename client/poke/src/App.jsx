import Footer from "./components/Footer"
import NavHeader from "./components/NavHeader"
import {BrowserRouter, Routes, Route} from 'react-router'
import Home from "./views/home"
import Menu from "./views/menu"


function App() {

  return (
    <>
    <NavHeader />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>  
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
