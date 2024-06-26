import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
// import Contact from "./Contact";
import Missing from "./Missing";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/gallery" element={<Gallery/>}/>
        {/* <Route path="/contact" element={<Contact />}/> */}
        <Route path="*" element={<Missing/>}/>

      </Routes>
      

    </Router>
  );
}

export default App;
