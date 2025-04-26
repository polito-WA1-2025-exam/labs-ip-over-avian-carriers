import {Routes, Route} from 'react-router'
import Home from './views/home'
import Menu from "./views/menu"
import Cart from "./views/cart"
import Profile from "./views/profile"
import Register from './views/register'
import DefaultLayout from "./views/DefaultLayout"
import LoggedHome from './views/loggedHome'


function App() {

  return (
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logged" element={<LoggedHome/>} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>  
  )
}

export default App
