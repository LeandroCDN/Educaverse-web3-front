
import React, { useState } from "react";
import "./homeVideo.css";

function HomeVideo() {
  return(
    <>
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
            </div>
          </div>      
      </div>
    </>
  )
}
export default HomeVideo;













/*<div className="abajo">
        
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
        
        
      </div> */