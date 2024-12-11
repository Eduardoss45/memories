import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to="/">Memories</Link>
      </h2>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/add-memory">Adicionar Memória</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
