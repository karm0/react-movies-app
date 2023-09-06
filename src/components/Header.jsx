import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
          <div>
            <Link className="text-decoration-none" to="/">Moves</Link>
          </div>
          <div >
            <ul className="d-flex gap-5">
              <li>
                <NavLink className="text-decoration-none" to="/">Watch List</NavLink>
              </li>
              <li>
                <NavLink className="text-decoration-none" to="/watched">Watched</NavLink>
              </li>
              <li>
                <NavLink className="text-decoration-none" to="/add">Add</NavLink>
              </li>
            </ul>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
