import logo from "./logo.svg";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/LogIn";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Admin from "./components/Admin";
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./components/Unauthorized";
import User from "./components/User";
import LinkPage from "./components/LinkPage";
import AboutUs from "./components/AboutUs";
const ROLES = {
  User: 1,
  Admin: 2,
};
function App() {
  return (
    <div className="App">
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="register" element={<Register />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="/" element={<LinkPage />} />

          {/* admin routes */}

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="user" element={<User />} />
          </Route>

          {/* add 404 page */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
