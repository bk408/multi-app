import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navWrapper">
      <Link className="navLink" to="/">
        <span>MULTI APP</span>
      </Link>

      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;


