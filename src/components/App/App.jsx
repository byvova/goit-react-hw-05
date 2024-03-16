import { HomePage } from '../../pages/HomePage/HomePage'
import { MoviesPage } from '../../pages/MoviesPage/MoviesPage'
import './App.css'

function App() {

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  )
}

export default App
