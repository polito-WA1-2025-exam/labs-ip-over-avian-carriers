import {Routes, Route} from 'react-router'
import Home from './views/home'
import Menu from "./views/menu"
import Cart from "./views/cart"
import Profile from "./views/profile"
import AuthPage from './views/AuthPage'
import DefaultLayout from "./views/DefaultLayout"
import LoggedHome from './views/loggedHome'
import { UserProvider } from './contexts/UserContext'


function App() {

  return (
      <UserProvider>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/logged" element={<LoggedHome/>} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>  
      </UserProvider> 
  )
}

export default App
