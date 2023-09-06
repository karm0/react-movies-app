import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
          <div className=" col-12 col-md-6 text-center">
            <Link className="text-decoration-none" to="/">Moves</Link>
          </div>
          <div className="flex-wrap mt-3 col-12 col-md-6 d-flex justify-content-center">
            <ul className="d-flex gap-5">
              <li>
                <NavLink className="text-decoration-none" to="/watchList">Watch List</NavLink>
              </li>
              <li>
                <NavLink className="text-decoration-none" to="/watched">Watched</NavLink>
              </li>
              <li>
                <NavLink className="text-decoration-none" to="/">Add</NavLink>
              </li>
            </ul>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
