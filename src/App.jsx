import "./main.scss";
import {  BrowserRouter as Router,  NavLink,  Route,  Routes,} from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { RequireAuth } from "./shared/components/RequireAuth/RequireAuth";
import { JwtContext } from "./shared/contexts/JwtContext";
import { useState } from "react";
import { ButtonLogout } from "./shared/components/ButtonLogOut/ButtonLogOut";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("token"));

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <div className="App">
        <Router>
          <nav className="nav">
            {jwt && <NavLink to="/">Home</NavLink>}
            {!jwt && (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </>
            )}
            {jwt && <ButtonLogout />}
          </nav>

          <Routes>
            <Route  path="/" element={<RequireAuth> <HomePage /> </RequireAuth> } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Router>
      </div>
    </JwtContext.Provider>
  );
}

export default App;
