import { useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const Header = () => {
  const navigate = useNavigate();
  const logout = useLogout();

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
    <section
      style={{
        width: "100%",
        background: "brown",
        display: "flex",
        height: "50px",
        justifyContent: "space-around",
      }}
    >
      <button onClick={register}>Register</button>
      <button onClick={login}>log in</button>
      <button onClick={user}>User</button>
      <button onClick={admin}>Admin</button>
      <button onClick={home}>Home</button>
      <button onClick={signOut}>Logout</button>
    </section>
  );
};

export default Header;
