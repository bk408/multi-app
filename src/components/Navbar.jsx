import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="navWrapper">
      <Link className="navLink" to="/home">
        <span>MULTI APP</span>
      </Link>

      <div>
        <Link className="navLink" to="/home">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <button className="nav-btn" onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Navbar;
