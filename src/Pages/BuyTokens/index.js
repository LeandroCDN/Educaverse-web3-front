import BuyForm from "./BuyForm";
import axonImg from "./media/axon2.jpg";
import HomeVideo from "../../components/HomeVideo";
import "./buyTokens.css";

export default function Buytokens() {
  

  return(
    <>
      <div className="column c-One">
        <div className="buyBox">
          <h1 className="h1Form">AXON - ICO</h1>
          <p className="pbuyForm">
            Educaverse está abriendo su whitelist para el lanzamiento de AXON Token,
            <br/>
            el token oficial de Educaverse creado para potenciar la experiencia del metaverso educativo. 
          </p>
          <div className="ContextFormBox">         
            <BuyForm/>        
          </div>
          <br></br>
        </div>
      </div>
      <div className="column c-two">
        <img src={axonImg} className="axonImg" alt=""/>     
      </div>
      <div className="buy-video">
          <HomeVideo/>
      </div>  
      {/* <div className="abajo">
        
        <div className="margin">
          <div className="main">        
            <iframe 
              className='video'
              title='Youtube player'
              sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
              src={`https://youtube.com/embed/S6j4k_RWnzQ?autoplay=1&mute=1&loop=1&playlist=S6j4k_RWnzQ&controls=0`}
            >
            </iframe>
            <div className="overlay"></div>
            <div className="content">
              <h2 className="h2Video">Descarga nuestro<br/> Whitepaper</h2> 
              <p className="videoBar">_______________________________</p>
              <p className="videoText">
                Educaverse es la primera plataforma educativa virtual construida con
                {/* <br/> }
                tecnología blockchain, destinada a instituciones educativas, docentes y
                {/* <br/> }
                alumnos, para facilitar y potenciar el proceso de enseñanza y aprendizaje.
              </p>
              <button className="buttonDowload"> DESCARGAR </button>
            </div>
          </div>
          <div className="fotter">
            <div className="contentFooter">
              <p className="contentFooter">____________________________________________________________________________________________________________________________________________________________</p>
              <p>© 2022 Educa360 All Rights Reserved  - info@educaverse.org</p>
            </div>
          </div>
        </div>
        
        
      </div> */}
      
    </>
  )
    
}

  // <div class="full-size-abs container-video">
  //   <iframe 
  //     id="video-container-widget-1651611276882" 
  //     class="container-video-wrapper slow-transition-opacity active" 
  //     frameborder="0" 
  //     allowfullscreen="1" 
  //     allow="accelerometer; 
  //     autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  //     title="The Educational Metaverse - Educaverse" 
  //     width="759.1944888888888" 
  //     height="427.0469" 
  //     src="https://www.youtube.com/embed/?autoplay=0&amp;autohide=1&amp;modestbranding=1&amp;rel=0&amp;mute=1&amp;showinfo=0&amp;controls=0&amp;disablekb=0&amp;enablejsapi=1&amp;iv_load_policy=3&amp;playsinline=1&amp;origin=https%3A%2F%2Feducaverse.org&amp;widgetid=1">
  //   </iframe>
  // <div class="full-size-abs"></div></div>

  // <iframe 
  //         className="videoIframe" 
  //         src="https://www.youtube.com/embed/S6j4k_RWnzQ?autoplay=1&mute=1&loop=1&playlist=S6j4k_RWnzQ&controls=0"   
  //         frameborder="0" 
  //         allow="autoplay; fullscreen" 
  //         allowfullscreen
  //         marginheight="0" 
  //         marginwidth="0" 
  //         width="100%" 
  //         height="100%" 
  //         scrolling="auto"

  // src="https://www.youtube.com/embed/S6j4k_RWnzQ?autoplay=1&autohide=1&modestbranding=1&rel=0&mute=1&showinfo=0&controls=0&disablekb=0&enablejsapi=1&iv_load_policy=3&playsinline=1&origin=https%3A%2F%2Feducaverse.org&widgetid=1&loop=1&playlist=S6j4k_RWnzQ"
  //       ></iframe>