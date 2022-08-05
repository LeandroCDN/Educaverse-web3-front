import React, { useState } from "react";
import "./Footer.css";
import { useAccordionButton } from "react-bootstrap";


function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <div className="Footer">
      <div className="line"></div>
      <p>© 2022 Educa360 All Rights Reserved  - info@educaverse.org</p>
      
      
    </div>
  )

}

export default Footer;