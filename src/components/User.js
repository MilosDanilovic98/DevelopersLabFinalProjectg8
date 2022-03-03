import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

const User = () => {
  const status = useContext(AuthContext);
  const name = status.auth.user;
  const pwd = status.auth.pwd;
  const token = status.auth.access;

  const handleSubmit = async (e) => {
    try {
      const response = await axios.get("/test", JSON.stringify({}), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      console.log(response?.data?.name);
    } catch {
      console.log("error");
    }
  };
  return (
    <section>
      <h1>{name}</h1>
      <br />
      <p>{pwd}</p>
      <div className="flexGrow">
        <button onClick={handleSubmit}>jwt get</button>
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};

export default User;
