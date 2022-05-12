import "./App.css";
import logo from "./assets/logo.svg";
import Todo from "./components/Todo";
//import NavbarElements from "./components/Navbar/NavbarElements";
//import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

function App() {
  //var Navbar = "";
  const title = "Welcome To The Bookstore";
  const likes = "9238642";
  const max = 10000;
  const min = 5000;

  return (
    <div>
      <div className="App">
        <div className="content">
          <Navbar bg="dark" variant="dark" sitcky="top">
            <Navbar.Brand>
              <img src={logo} />
              {""}
              Logo
            </Navbar.Brand>
          </Navbar>
          <Nav>
            <Nav.Link href="products">products</Nav.Link>
          </Nav>
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
