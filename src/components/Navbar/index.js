import {ConectButton} from "../ConectButton";
import React, { useState } from "react";
import "./Navbar.css";
import { useAccordionButton } from "react-bootstrap";


function Navbar({ wallet, setWallet}) {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <div className="Navbar">
      <span className={"nav-logo nav-items"} target="_blank" rel="noopener noreferrer" >EDUCAVERSE </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="https://educaverse.org/" target="_blank" rel="noopener noreferrer" >Home</a>        
        <a 
          href="https://content.app-sources.com/s/49401586197528073/uploads/pdf/WP_VentaPrivada-Educaverse_V.06-5310040.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
        >Whitepaper</a>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar">

        </div>
      </div>
      <ConectButton wallet={wallet} setwallet={setWallet}/>
    </div>
  )

}

export default Navbar;