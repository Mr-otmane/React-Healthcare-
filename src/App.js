import { Fragment } from "react";
import "./App.css";
import Navbars from "./components/Nav/Navbar";
import Home from "./Pages/Home.";

function App() {
  return (
    <Fragment>
     <Navbars />
     <Home/>
     </Fragment>
   ) ;
}

export default App;
