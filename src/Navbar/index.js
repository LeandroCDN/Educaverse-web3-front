import { Children } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.css";
import {ConectButton} from "../ConectButton";

export default function Navbar() {
  const path = window.location.pathname;
  return <nav className="nav">
    <Link to="/" className="site-tittle">
      <p className="site-tittle">

      EDUCAVERSE
      </p>
    </Link>
    <ul>
      
      <Link to="/" >Home</Link>  
      <p>|</p>
      <CustomLink to="/buytokens">Buy Tokens</CustomLink>
      <p>|</p>
      <a  href="https://content.app-sources.com/s/49401586197528073/uploads/pdf/WP_VentaPrivada-Educaverse_V.06-5310040.pdf"  >Whitepaper</a>
    </ul>
    <ConectButton/>
  </nav>
}

function CustomLink({to, children,...props}){
  const resolvePath = useResolvedPath(to);
  
  const isActive = useMatch ({path: resolvePath.pathname, end: true});
  return(
    <li className={isActive ? "active" : ""}>
        <Link to={to}>
          {children}
        </Link>
    </li>
  )
}

// function conectWalletButton(){
//   console.log(conectWalletButton());
//   return(
//     <ConectButton/>
//   )
// }