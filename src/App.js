import { Fragment } from "react";
import "./App.css";
import Navbars from "./components/Nav/Navbar";
import Home from "./Pages/Home.";
import Footer from "./components/Nav/Footer/Footer.";

function App() {
  return (
    <Fragment>
      <Navbars />
      <Home />
      <Footer/>
    </Fragment>
  );
}

export default App;
