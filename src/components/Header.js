import { useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const Header = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const status = useContext(AuthContext);
  const isLoggedin = status.auth.loggedIn;

  const signOut = async () => {
    await logout();
    navigate("/");
  };

  const register = () => navigate("/register");
  const login = () => navigate("/login");
  const admin = () => navigate("/admin");
  const user = () => navigate("/user");
  const home = () => navigate("/");

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div>{status.auth.user}</div>
      <button className="btn btn-primary btn-lg" onClick={user}>
        User
      </button>
      <button className="btn btn-primary btn-lg" onClick={admin}>
        Admin
      </button>
      <button className="btn btn-primary btn-lg" onClick={home}>
        Home
      </button>
      {!isLoggedin && (
        <button className="btn btn-primary btn-lg" onClick={login}>
          log in
        </button>
      )}
      {!isLoggedin && (
        <button className="btn btn-primary btn-lg" onClick={register}>
          register
        </button>
      )}
      {isLoggedin && (
        <button className="btn btn-primary btn-lg" onClick={signOut}>
          Log Out
        </button>
      )}

      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Header;
