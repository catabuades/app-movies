import React, { useEffect, useState } from 'react'
import './App.scss';
import './mixins.scss'
import TopBar from './Components/TopBar/TopBar'
import Listing from './Components/Listing/Listing'
import Login from './Components/Login/Login'
import Registry from './Components/Registry/Registry'
import Favourites from './Components/Favourites/Favourites'
import AuthenticatorProvider from './Contexts/AuthenticatorProvider';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import fetchAllMovies from './Services/moviesService';

function App() {
  const [movies, setMovies] = useState([])

  async function fetchMovies() {
    const data = await fetchAllMovies()

    setMovies(data)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <div className="App">
      <AuthenticatorProvider>
        <Router>
          <header>
            <TopBar></TopBar>
          </header>
          <main className="App__grid">
            {/* Routes shna de posar dintre del embolcall que li pertoca, en general hauría de ser el main */}
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/registry" element={<Registry />} />
              <Route path="/favourites" element={
                <RequireAuth>
                  <Favourites movies={movies} />
                </RequireAuth>
              } />
              <Route path="/" element={<Listing movies={movies} />} />
            </Routes>
          </main>
          <footer>

          </footer>
        </Router>
      </AuthenticatorProvider>
    </div>
  );
}

export default App;
