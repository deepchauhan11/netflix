import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Netflix from './pages/Netflix'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Player from './pages/Player'
import Movies from './pages/Movies'
import TVShows from './pages/TVShows'
import UserLiked from './pages/UserLiked'

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Netflix />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/player' element={<Player />} />
        <Route exact path='/movies' element={<Movies />} />
        <Route exact path='/tv' element={<TVShows/>} />
        <Route exact path='/mylist' element={<UserLiked/>} />
      </Routes>
    </Router>
  )
}

export default App
