import {Routes, Route} from 'react-router'
import Home from './views/home'
import Menu from "./views/Menu"
import Cart from "./views/Cart"
import Profile from "./views/Profile"
import Register from './views/Register'
import DefaultLayout from "./views/DefaultLayout"


function App() {

  return (
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>  
  )
}

export default App
