import "./App.css";
import logo from "./assets/logo.svg";
import Todo from "./components/Todo";
//import NavbarElements from "./components/Navbar/NavbarElements";
//import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function App() {
  //var Navbar = "";
  const title = "Welcome To The Bookstore";
  const likes = "9238642";
  const max = 10000;
  const min = 5000;

  return (
    <div>
      <div className="App">
        <Navbar bg="myRed" variant="dark" sticky="top">
          <Navbar.Brand>
            <img src={logo} width="40px" height="40px" />
            {""}
            Logo
          </Navbar.Brand>

          <Nav>
            <NavDropdown title="Genres">
              <NavDropdown.Item href="#mystery">Mystery</NavDropdown.Item>
              <NavDropdown.Item href="#action">Action</NavDropdown.Item>
              <NavDropdown.Item href="#comedy">Comedy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#book-of-the-month">
                Book Of The Month
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Support Us">
              <NavDropdown.Item href="#facebook">Facebook</NavDropdown.Item>
              <NavDropdown.Item href="#twitter">Twitter</NavDropdown.Item>
              <NavDropdown.Item href="#instagram">Instagram</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#donate">Donate</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Us">
              <NavDropdown.Item href="#licensing">Licensing</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar>
        <div className="content">
          <h1>{title}</h1>
          <p>
            Liked {likes * Math.round(Math.random() * (max - min)) + min} Times!
          </p>
          <Todo text="In Search of Lost Time by Marcel Proust" />
          <Todo text="Ulysses by James Joyce" />
          <Todo text="Don Quixote by Miguel de Cervantes" />
          <Todo text="War and Peace by Leo Tolstoy" />{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
