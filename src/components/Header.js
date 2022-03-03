import { useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import ThemeContext from "../context/Theme";

const Header = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const status = useContext(AuthContext);
  const themeStatus = useContext(ThemeContext);
  const isLoggedin = status.auth.loggedIn;
  const isAdmin = status.auth.isAdmin;
  const signOut = async () => {
    await logout();
    console.log(isAdmin);
    navigate("/");
  };

  const themeChange = () => {
    themeStatus.setTheme(false);
    console.log(themeStatus);
  };
  const themeChange2 = () => {
    themeStatus.setTheme(true);
    console.log(themeStatus);
  };

  const register = () => navigate("/register");
  const login = () => navigate("/login");
  const admin = () => navigate("/admin");
  const user = () => navigate("/user");
  const home = () => navigate("/");

  return (
    <nav className="navbar navbar-dark bg-dark border border-secondary">
      {isLoggedin && (
        <div className="fs-2  bg-dark d-flex justify-content-center align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            className="bi bi-person text-danger"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
          </svg>
          <h2 className="text-success">{status.auth.user}</h2>
        </div>
      )}
      {isLoggedin && (
        <button className="btn btn-primary btn-lg" onClick={user}>
          User
        </button>
      )}
      {/* <button onClick={themeChange}>Theme</button>
      <button onClick={themeChange2}>Theme2</button> */}
      {isLoggedin && isAdmin && (
        <button className="btn btn-primary btn-lg" onClick={admin}>
          Admin
        </button>
      )}
      <button className="btn btn-primary btn-lg" onClick={home}>
        Home
      </button>
      {!isLoggedin && (
        <button className="btn btn-primary btn-lg" onClick={login}>
          Log in
        </button>
      )}
      {!isLoggedin && (
        <button className="btn btn-primary btn-lg" onClick={register}>
          Register
        </button>
      )}
      {isLoggedin && (
        <button className="btn btn-primary btn-lg" onClick={signOut}>
          Log Out
        </button>
      )}

      <form className="form-inline d-flex justify-content-center ">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
        />
        <button className="btn btn-outline-success px-2" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Header;
