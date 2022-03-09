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
    <div className="fixed-top">
    <nav class="navbar navbar-expand-md navbar-custom1">
        <div class="container-fluid">
            
            <a class="navbar-brand">
                <img class="logo-custom" src="./images/Logo.JPG" alt="Logo" border="0"></img>
            </a>
            {/*<!-- navbar links -->*/}
            <div class="justify-content-end align-center" id="main-nav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#" ><span class="yellowText">About us</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" ><span class="yellowText">Contact us</span></a>
                    </li>
                    <li class="nav-item icon-custom dropdown">
                        <a role="button" id="dropdownMenuLink" data-toggle="dropdown" 
                        class="nav-link dropdown-toggle d-flex align-items-center"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false">
                            <span class="iconify yellowText" data-icon="bi:person-fill"></span>
                        </a>
                        <div class="dropdown-menu yellowText" aria-labelledby="dropdownMenuLink">
                            {!isLoggedin && (
                                <a class="dropdown-item" href="#" onClick={login}>Log in</a>
                            )}
                            {!isLoggedin && (
                                <a class="dropdown-item" href="#" onClick={register}>Sign up</a>
                            )}
                            {isLoggedin && (
                                <a class="dropdown-item" href="#" onClick={signOut}>Log out</a>
                            )}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <nav className="navbar navbar-expand-sm navbar-custom2">
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
        <div class="container-fluid container2">
            <ul class="navbar-nav navbar-nav-custom">
                <li class="nav-item">
                    <a class="nav-link" href="#" onClick={home}><span class="grayBox">HOME</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><span class="grayBox">TOP RATED</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><span class="grayBox">RECENTLY ADDED</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><span class="grayBox">CATEGORY</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                        <div class="search">
                            <input type="search" class="rounded searchBox" placeholder="Search for game" aria-label="Search" aria-describedby="search-addon" />
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link right">
                        <button type="submit" class="yellowBox noHover right">SEARCH</button>
                    </a>
                </li> 
            </ul>
        </div>
    </nav>
    </div>
  );
};

export default Header;
