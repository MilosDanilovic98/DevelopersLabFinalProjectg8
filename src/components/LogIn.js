import { useRef, useState, useEffect } from "react";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

const LOGIN_URL = "/login";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username: user, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const access = response?.data?.access;

      const isAdmin = response?.data?.is_staff;

      const roles = [];

      if (isAdmin) {
        roles.push(1, 2);
      } else {
        roles.push(1);
      }

      setAuth({ user, pwd, roles, access });
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div
      className="page-login"
      style={{
        display: "flex",
        justifyContent: "center",
        background: "black",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="ui centered aligned grid container">
        <div className="nine wide column">
          <div
            ref={errRef}
            className={errMsg ? "ui icon warning message" : "offscreen"}
          >
            <i className="lock icon"></i>
            <div className="content"></div>
            <div className="header" aria-live="assertive">
              {errMsg}
            </div>
          </div>
          <h1>Sign in</h1>
          <div className="ui fluid card">
            <div className="content ">
              <form onSubmit={handleSubmit} className="ui yellow form">
                <div className="field">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                  />
                </div>
                <button className="ui primary labeled icon button">
                  <i className="unlock alternate icon"></i>
                  Log Inn
                </button>
              </form>
              <p>
                Need an Account?
                <br />
                <span className="line">
                  <Link to="/register">Register</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
