import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Docs from "./Pages/Docs";
import Home from "./Pages/Home";
import Buytokens from "./Pages/BuyTokens";
import { Route, Routes  } from "react-router-dom";
import "./style.css";

function App() {  

  return (
    <>
      <Navbar className="navBar-App"/> 
      <div className="pageSection">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/docs" element={<Docs/>} />
        <Route path="/buytokens" element={<Buytokens/>} />
      </Routes>
      </div>
      <Footer/>
      {/* <p className="division">____________________________________________________________________________________________________________________________________________________________</p> */}
    </>
  );
}

export default App;
