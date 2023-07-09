import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import More from "./Components/More/More";
import Navbar from "./Components/Navbar/Navbar";

import Portfolio from "./Components/Portfolio/Portfolio";



function App() {
  return (
    <div className="App">


      <Routes> 
        <Route path="" element={ <Navbar> </Navbar> }> 
        </Route>

        <Route path="/home" element={<Home> </Home>}> </Route>
      </Routes>

      
      <Home> </Home>
      <About> </About>
      <Portfolio> </Portfolio>
      <More> </More>
      <Contact> </Contact>
      <Footer> </Footer>
     
     
      
    </div>
  );
}

export default App;
