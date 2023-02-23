import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Shared/Footer'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokeInfo from './pages/PokeInfo'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  const { nameTrainer } = useSelector(state => state)


  

 
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home/>} />

        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/pokedex/:id' element={<PokeInfo/>}/>
        </Route>
        

      </Routes>
      <Footer/>

    </div>
  )
}

export default App
