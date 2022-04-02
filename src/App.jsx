import "./main.scss";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { RequireAuth } from "./shared/components/RequireAuth/RequireAuth";
import { JwtContext } from "./shared/contexts/JwtContext";
import { useState } from "react";
import { ButtonLogout } from "./shared/components/ButtonLogOut/ButtonLogOut";
import { CharacterPage } from "./pages/CharacterPage/CharacterPage";
import { MoviePage } from "./pages/MoviePage/MoviePage";
import { PlanetPage } from "./pages/PlanetPage/PlanetPage";
import { CharacterDetailPage } from "./pages/CharacterPage/CharacterDetailPage";
import { MovieDetailPage } from "./pages/MoviePage/MoviePageDetail";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("token"));

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <div className="App">
        <Router>
          <nav className="nav">
            <NavLink to="" activeclassname={"active"}></NavLink>
            {jwt && <NavLink to="/home">Home</NavLink>}
            {jwt && <NavLink to="/characters">Characters</NavLink>}
            {jwt && <NavLink to="/movies">Movies</NavLink>}
            {jwt && <NavLink to="/planets">Planets</NavLink>}
            {!jwt && (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </>
            )}
            {jwt && <ButtonLogout />}
          </nav>

          <Routes>
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <HomePage />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/movies" element={ <RequireAuth> <MoviePage /></RequireAuth>  }/>
            <Route path="/movies/:name" element={ <RequireAuth> <MovieDetailPage /></RequireAuth>  }/>
            <Route path="/characters" element={ <RequireAuth> <CharacterPage /></RequireAuth>}/>
            <Route path="/characters/:name" element={<RequireAuth> <CharacterDetailPage /> </RequireAuth>}/>
            <Route path="/planets" element={ <RequireAuth> <PlanetPage /> </RequireAuth>}/>
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Router>
      </div>
    </JwtContext.Provider>
  );
}

export default App;
