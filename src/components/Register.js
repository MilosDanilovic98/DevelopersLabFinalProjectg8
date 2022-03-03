import { useRef, useState, useEffect } from "react";
import axios from "../api/axios";
import { Link, useNavigate } from "react-router-dom";

// REGEX
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const REGISTER_URL = "/register";

const Register = () => {
  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        REGISTER_URL,

        JSON.stringify({
          username: user,
          password: pwd,
          password2: matchPwd,
          email: email,
          first_name: firstName,
          last_name: lastName,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response.data.access);
      navigate("/login");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };
  return (
    <section
      className="  py-5"
      style={{
        background: "#6a11cb",
      }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <div
                    ref={errRef}
                    className={errMsg ? "alert alert-warning " : ""}
                    role="alert"
                  >
                    <h4 className="alert-heading">{errMsg}</h4>
                  </div>
                  <h2 className="fw-bold mb-2 text-uppercase">REGISTER</h2>
                  <p className="text-white-50 mb-5">Join us!</p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                        className="form-control form-control-lg"
                      />
                      <p
                        className={
                          userFocus && user && !validName
                            ? "alert alert-danger "
                            : "d-none"
                        }
                      >
                        4 to 24 characters.
                        <br />
                        Must begin with a letter.
                        <br />
                        Letters, numbers, underscores, hyphens allowed.
                      </p>
                      <label
                        className="form-label form-white mb-4"
                        htmlFor="username"
                      >
                        Username
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                        className="form-control form-control-lg"
                      />
                      <p
                        className={
                          pwdFocus && !validPwd
                            ? "alert alert-danger "
                            : "d-none"
                        }
                      >
                        8 to 24 characters.
                        <br />
                        Must include uppercase and lowercase letters, a number
                        and a special character.
                        <br />
                        Allowed special characters: <span>!</span>{" "}
                        <span>@</span> <span>#</span> <span>$</span>{" "}
                        <span>%</span>
                      </p>
                      <label
                        className="form-label form-white mb-4"
                        htmlFor="password"
                      >
                        Password
                      </label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="confirm_pwd"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        value={matchPwd}
                        required
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                        className="form-control form-control-lg"
                      />
                      <p
                        className={
                          matchFocus && !validMatch
                            ? "alert alert-danger "
                            : "d-none"
                        }
                      >
                        Password does not match!
                      </p>
                      <label
                        htmlFor="confirm_pwd"
                        className="form-label form-white mb-4"
                      >
                        Confirm Password
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        id="email"
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                        className="form-control form-control-lg"
                      />
                      <p
                        className={
                          emailFocus && !validEmail
                            ? "alert alert-danger "
                            : "d-none"
                        }
                      >
                        Not a Valid Email!
                      </p>
                      <label
                        htmlFor="email"
                        className="form-label form-white mb-4"
                      >
                        Email
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="firstName"
                        autoComplete="off"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        className="form-control form-control-lg"
                      />
                      <label
                        htmlFor="firstName"
                        className="form-label form-white mb-4"
                      >
                        First Name
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="lastName"
                        autoComplete="off"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        className="form-control form-control-lg"
                      />
                      <label
                        htmlFor="lastName"
                        className="form-label form-white mb-4"
                      >
                        Last Name
                      </label>
                    </div>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      disabled={
                        !validName || !validEmail || !validPwd || !validMatch
                          ? true
                          : false
                      }
                    >
                      Register
                    </button>
                  </form>
                  <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" className="text-white">
                      <i className="fa fa-facebook-f fa-lg" />
                    </a>
                    <a href="#!" className="text-white">
                      <i className="fa fa-twitter fa-lg mx-4 px-2" />
                    </a>
                    <a href="#!" className="text-white">
                      <i className="fa fa-google fa-lg" />
                    </a>
                  </div>
                </div>
                <div>
                  <p className="mb-0 text-white-50 fw-bold">
                    Don't have an account? <Link to="/register">Register</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
