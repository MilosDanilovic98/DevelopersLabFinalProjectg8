import { Link } from "react-router-dom";

const User = () => {
  return (
    <section>
      <h1>User Page</h1>
      <br />
      <p>You must have been assigned an User role.</p>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};

export default User;
