import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Docs from "./Pages/Docs";
import Home from "./Pages/Home";
import Buytokens from "./Pages/BuyTokens";
import { useState } from 'react';
import { Route, Routes  } from "react-router-dom";
import "./style.css";
import StoreProvider from "./store/StoreProvider";

function App() {  
  const [wallet, setWallet] = useState("");

  return (
    <>
    <StoreProvider >
      <Navbar className="navBar-App" wallet={wallet} setwallet={setWallet}/> 
      <div className="pageSection">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/docs" element={<Docs/>} />
        <Route path="/buytokens" element={<Buytokens/>} />
      </Routes>
      </div>
      <Footer/>
    </StoreProvider>
      
      {/* <p className="division">____________________________________________________________________________________________________________________________________________________________</p> */}
    </>
  );
}

export default App;
