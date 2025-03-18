import { Fragment } from "react";
import "./App.css";
import Home from "./Pages/Home.";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Contact from "./Pages/Contact";
import Layout from "./components/Nav/Layout/Layout";

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path="/Layouat"  element={<Layout/>}>
    <Route index path="/home" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Route>
))

function App() {
  return (
    <Fragment>
      <RouterProvider router={routes}/>
    </Fragment>
     
   ) ;
}

export default App;
