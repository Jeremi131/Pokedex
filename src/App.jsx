import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokeInfo from './pages/PokeInfo'
import ProtectedRoutes from './pages/protectedRoutes'

function App() {

  const { nameTrainer } = useSelector(state => state)

  console.log({nameTrainer})

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/pokedex/:id' element={<PokeInfo/>}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App