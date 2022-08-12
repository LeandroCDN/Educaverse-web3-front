import "./Home.css";
import React from "react";
import HomeVideo from "../../components/HomeVideo";
import eduverseLogo from "../../media/educaverse_logo.png";
import landOne from "../../media/img/land-1x1.jpg";
import landTwo from "../../media/img/land-2x2.jpg";
import landTree from "../../media/img/land-3x3.jpg";
import landSix from "../../media/img/land-6x6.jpg";
import featureone from "../../media/img/feature-one.png";
import featuretwo from "../../media/img/feature-two.png";
import featuretree from "../../media/img/feature-tree.png";
import socialTw from "../../media/media-icons/twitter.png";
import socialLn from "../../media/media-icons/linkedin.png";
import socialst from "../../media/media-icons/spotify.png";


export default function Home() {
  return (
    <div className="pagestyle">      
      <div className="tittle">
        <div className="tittle-text-section">
          <h1 className="tittle-h1">
            <span className="tittle-span">
              EDUCATIONAL <br/> METAVERSE
            </span>
          </h1>
          <div className="tittle-p p1">
            <p>Educaverse is the first decentralised educational metaverse,</p>
            <p>backed by true digital property rights on the Ethereum network.</p>
          </div>
          <div className="tittle-p p2">
            <p>We employ blockchain technology to enable our users to</p>
            <p>own NFTs assets on a virtual platform built on web 3.0.</p>
          </div>
          {/* <div className="home-video-div">          
            <img src={eduverseLogo} className="home-video-img" />
          </div> */}
          
        </div>     
        <div className="tittle-video">
          <HomeVideo/>
          <div className="home-video-div">          
            <img src={eduverseLogo} className="home-video-img" />
          </div> 
        </div>     
       
          {/* <div className="home-video-div">          
            <img src={eduverseLogo} className="home-video-img" />
          </div>  */}
      </div> 

      <div className="lands">        
        <div className="lands-resume">
          <div className="OpenSea-div">          
              <img 
                src="https://content.app-sources.com/s/49401586197528073/uploads/Logotipos/31df0e9-OpenSea-Logo-White-8570739.svg" 
                className="OpenSea-img" />
              <a  
                href="https://opensea.io/collection/educaverse-lands-presale-voucher" 
                target="_blank" 
                rel="noopener noreferrer"
                className="landsButton"
              >
                View on OpenSea
              </a>
          </div>
          <h2 className="lands-h2">
            <span className="lands-span">
              SALES PRIVATE LANDS
            </span>
          </h2>
          <div className="land-cant">
            <span className="blue-span-lands">1st WAVE | </span>
            <span >2000 Lands on </span>
            <span className="blue-span-lands">Ethereum</span>
          </div>
        </div>

        <div className="lands-imgs-section">
          <div className="lands-img-section img-one">
            <div className="lands-img">
              <img src={landOne} className="land-img-one" />
            </div>
            <div className="lands-ratio">
              <h3> 1 X 1</h3>
            </div>
            <div className="lands-state">
              <span> AVAIBLE</span>
            </div>
          </div>
          <div className="lands-img-section">
            <div className="lands-img">
            <img src={landTwo} className="land-img-Two" />
            </div>
            <div className="lands-ratio">
              <h3> 1 X 1</h3>
            </div>
            <div className="lands-state">
              <span> AVAIBLE</span>
            </div>
          </div>
          <div className="lands-img-section">
            <div className="lands-img">
              <img src={landTree} className="land-img-Tree" />
            </div>
            <div className="lands-ratio">
              <h3> 1 X 1</h3>
            </div>
            <div className="lands-state">
              <span> AVAIBLE</span>
            </div>
          </div>
          <div className="lands-img-section">
            <div className="lands-img">
              <img src={landSix} className="land-img-Six" />
            </div>
            <div className="lands-ratio">
              <h3> 1 X 1</h3>
            </div>
            <div className="lands-state">
              <span> AVAIBLE</span>
            </div>
          </div>
        </div>  

      </div>

      
      <div className="features">
      <div className="features-overlay">
          <div className="feature f-one">
            <h2>CUSTOMISE <br/>YOUR AVATAR</h2>
            <div className="feature-img">
              <img src={featureone} className="land-img-one" />
            </div>
            <p> 
              Users can customize their own avatar with plug-ins created in 
              Educaverse and can import their own avatars and plug-ins from external partners, 
              such as Ready Player Me.
            </p>
            <a  
              href="https://content.app-sources.com/s/49401586197528073/uploads/pdf/WP_VentaPrivada-Educaverse-2_-2717250.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="feature-button"
            >
              MORE DETAILS
            </a>
          </div>
          <div className="feature f-two">
            <h2>LEARN TO <br/>EARN</h2>
            <div className="feature-img">
              <img src={featuretwo} className="land-img-one" />
            </div>
            
            <p> 
              Imagine a place where students can get certified and get 
              benefits thanks to our incredible tokenization system.
            </p>
            <a  
              href="https://content.app-sources.com/s/49401586197528073/uploads/pdf/WP_VentaPrivada-Educaverse-2_-2717250.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="feature-button"
            >
              MORE DETAILS
            </a>
          </div>
          <div className="feature f-tree">
            <h2>EDUCATIONAL <br/>CONTENT</h2>
            <div className="features-img">
              <img src={featuretree} className="land-img-one" />
            </div>
            <p>
              ducaverse makes educational content more accessible from anywhere in the world, 
              using a cell phone, tablet, computer or virtual reality devices. 
            </p>
            <a  
              href="https://content.app-sources.com/s/49401586197528073/uploads/pdf/WP_VentaPrivada-Educaverse-2_-2717250.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="feature-button"
            >
              MORE DETAILS
            </a>
          </div>
        </div>
      </div>
     

      <div className="team-section">
        <div className="home-text-area">
          <h2>Educaverse Team</h2>
          <p><span>We are building the educational metaverse<br/> with the best team of people and professionals.</span></p>
        </div> 

        <div className="teams">
          <div className="group-teams">
            <div className="team t1">
              <div className="team-overlay">
                <h3> José Pico</h3>
                {/* <a href="https://www.flaticon.com/free-icons/twitter" title="twitter icons">Twitter icons created by Freepik - Flaticon</a> */}
                <p><span>Metaverse Urban Architect</span></p>
                <div>
                  <div className="social-links">
                    <a className="social-media-button slow-transition-bg" href="https://www.linkedin.com/in/picoj/" target="_blank">
                      <i className="fa fa-linkedin bg-color-primary">
                        <img src={socialLn} className="media-ico" />
                      </i>
                    </a>
                    <a className="social-media-button" href="https://twitter.com/picoj?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
                    <img src={socialTw} className="media-ico" />
                    </a>
                    <a className="social-media-button slow-transition-bg" href="http://www.picoj.com/" target="_blank">
                      <i className="fa fa-rss-square bg-color-primary">
                        <img src={socialst} className="media-ico" />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team t2">
              <div className="team-overlay">
                <h3> Sonia Díez</h3>
                <p><span>Educational possibilist</span></p>
                <div>
                  <div className="social-links">
                    <a className="social-media-button slow-transition-bg" href="https://www.linkedin.com/in/sonia-d%C3%ADez/" target="_blank">
                      <i className="fa fa-linkedin bg-color-primary">
                        <img src={socialLn} className="media-ico" />
                      </i>
                    </a>
                    <a className="social-media-button" href="https://twitter.com/soniadiez_edu" target="_blank">
                    <img src={socialTw} className="media-ico" />
                    </a>
                    <a className="social-media-button slow-transition-bg" href="https://www.educaccion.org/" target="_blank">
                      <i className="fa fa-rss-square bg-color-primary">
                        <img src={socialst} className="media-ico" />
                      </i>
                    </a>
                  </div>
                </div>
              </div>              
            </div>
            <div className="team t3">
              <div className="team-overlay">
                <h3>Fen Sierra</h3>
                <p><span>Technologist Metaverse</span></p>
                <div>
                  <div className="social-links">
                    <a className="social-media-button slow-transition-bg" href="https://www.linkedin.com/in/fernandosvr/" target="_blank">
                      <i className="fa fa-linkedin bg-color-primary">
                        <img src={socialLn} className="media-ico" />
                      </i>
                    </a>
                    <a className="social-media-button" href="https://twitter.com/FernandoXierra" target="_blank">
                    <img src={socialTw} className="media-ico" />
                    </a>
                    <a className="social-media-button slow-transition-bg" href="https://educa360.com/" target="_blank">
                      <i className="fa fa-rss-square bg-color-primary">
                        <img src={socialst} className="media-ico" />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-teams">
            <div className="team t4">
              <div className="team-overlay">
                <h3>Antonio Sierra</h3>
                <p><span>Advisor Expert Metaverse</span></p>
                <div>
                  <div className="social-links">
                    <a className="social-media-button slow-transition-bg" href="https://www.linkedin.com/in/antoniossxr/" target="_blank">
                      <i className="fa fa-linkedin bg-color-primary">
                        <img src={socialLn} className="media-ico" />
                      </i>
                    </a>
                    <a className="social-media-button" href="https://twitter.com/Antonio_SxR" target="_blank">
                    <img src={socialTw} className="media-ico" />
                    </a>
                    <a className="social-media-button slow-transition-bg" href="https://educa360.org/" target="_blank">
                      <i className="fa fa-rss-square bg-color-primary">
                        <img src={socialst} className="media-ico" />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team t5">
              <div className="team-overlay">
                <h3>Adriano Pérez</h3>
                <p><span>MInvestor & Metaverse Expert</span></p>
                <div>
                  <div className="social-links">
                    <a className="social-media-button slow-transition-bg" href="https://www.linkedin.com/in/adrianoperez/" target="_blank">
                      <i className="fa fa-linkedin bg-color-primary">
                        <img src={socialLn} className="media-ico" />
                      </i>
                    </a>
                    <a className="social-media-button" href="https://twitter.com/Adrianoperezgil" target="_blank">
                    <img src={socialTw} className="media-ico" />
                    </a>
                    <a className="social-media-button slow-transition-bg" href="https://educaverse.org/" target="_blank">
                      <i className="fa fa-rss-square bg-color-primary">
                        <img src={socialst} className="media-ico" />
                      </i>
                    </a>
                  </div>
                </div>
              </div>              
            </div>
            <div className="team t6">
              <div className="team-overlay">
                <h3>Fran Roncero</h3>
                <p><span>Creative Director Metaverse</span></p>
                <div>
                  <div className="social-links">
                    <a className="social-media-button slow-transition-bg" href="https://www.linkedin.com/in/fran-roncero-080753178/" target="_blank">
                      <i className="fa fa-linkedin bg-color-primary">
                        <img src={socialLn} className="media-ico" />
                      </i>
                    </a>
                    <a className="social-media-button" href="https://twitter.com/roncero_franM" target="_blank">
                    <img src={socialTw} className="media-ico" />
                    </a>
                    <a className="social-media-button slow-transition-bg" href="https://educa360.com/" target="_blank">
                      <i className="fa fa-rss-square bg-color-primary">
                        <img src={socialst} className="media-ico" />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>      
        </div>
        
        <div className="img-position">
          <div>
            <img src="https://content.app-sources.com/s/49401586197528073/uploads/equipo/educaverse_Team2-2107823.png" className="team-img" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
// style="text-align: center; line-height: 1;"
// style="color: rgb(255, 255, 255); font-family: &quot;Paytone One&quot;; font-size: 90px; background-color: rgba(255, 255, 255, 0);"
{/* <div class="widget-row with-centered-content">
  <div class="widget           anim-delayed-item widgetResponsive textWidget col20 anim-displayed lazyAnimation-fadeInUp" id="text-widget-1518129426778" data-type="TextWidget" data-delay="" data-animation-duration="1100" data-animation-delay="500" data-animation="lazyAnimation-fadeInUp" style="margin-top: 1%; margin-left: 0%; animation-delay: 500ms; animation-duration: 1100ms;">
    <div class="text-widget-content">
      <p style="text-align: center; line-height: 1.6;">
        <span style="font-size: 20px; color: rgb(141, 202, 236);" class="">
          Educaverse is the first decentralised educational metaverse, 
        </span>
      </p>
      <p style="text-align: center; line-height: 1.6;">
        <span style="font-size: 20px; color: rgb(141, 202, 236);" class="">
          backed by true digital property rights on the Ethereum network.
        </span>
      </p>
    </div>
  </div>

<iframe width="1584" height="630" src="https://www.youtube.com/embed/jgvme6xICfM?list=RDjgvme6xICfM" title="El Cuarteto de Nos - Hombre Con Alas (Official Lyric Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<div id="container-widget-1509144589946" data-video="https://www.youtube.com/watch?v=S6j4k_RWnzQ" data-video-start="0" data-video-end="" data-video-volume="0" data-type="Container" class="grid-row        stretched-mobile stretched-tablet with-video bg-video-active" data-delay="" style="padding-bottom:1.04068%;
      padding-top: 4.15134%; padding-left: 0;
      background-color: rgba(35, 34, 52, 0.2);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
      
      background-image: url('https://content.app-sources.com/s/49401586197528073/uploads/Images/educationmetaverse-8560488.jpg');">
      <a name="school" id="school" class="anchor-point-link"></a>
      <div class="grid-content ">
          <div class="grid-column    " style="width: 100%;
                 padding-left:0px;padding-right:0px;
                 background-image: none;
                 
                   background-size: cover;
                   background-repeat: no-repeat;
                   background-position: center center;
                 
                 top: 0px;
                 
                 ">

              <div class="widget-row ">
                  <div class="widget 
          
         widgetResponsive spacer col20" id="spacer-widget-1518959549615" data-type="Spacer" style="margin-top: 0px; margin-left: 0px;">
      <div class="widget-preserving-ratio-outer" style="padding-bottom: 5.181818181818182% ">
        <div class="widget-preserving-ratio-inner"></div>
      </div>
    </div>
  </div>
              <div class="widget-row with-centered-content">
                  <div class="widget           anim-delayed-item widgetResponsive textWidget headingWidget col20 anim-displayed lazyAnimation-fadeInDown" id="heading-widget-1518129426779" data-type="HeadingWidget" data-delay="" data-animation-duration="1100" data-animation-delay="0" data-animation="lazyAnimation-fadeInDown" style="margin-top: 0%; margin-left: 0px; animation-delay: 0ms; animation-duration: 1100ms;">
      <div class="text-widget-content"><h1 style="text-align: center; line-height: 1;"><span style="color: rgb(255, 255, 255); font-family: &quot;Paytone One&quot;; font-size: 90px; background-color: rgba(255, 255, 255, 0);">EDUCATIONAL METAVERSE</span><br></h1></div>
    </div>
  </div>
              <div class="widget-row with-centered-content">
                  <div class="widget           anim-delayed-item widgetResponsive textWidget col20 anim-displayed lazyAnimation-fadeInUp" id="text-widget-1518129426778" data-type="TextWidget" data-delay="" data-animation-duration="1100" data-animation-delay="500" data-animation="lazyAnimation-fadeInUp" style="margin-top: 1%; margin-left: 0%; animation-delay: 500ms; animation-duration: 1100ms;">
      <div class="text-widget-content"><p style="text-align: center; line-height: 1.6;"><span style="font-size: 20px; color: rgb(141, 202, 236);" class="">Educaverse is the first decentralised educational metaverse, </span></p><p style="text-align: center; line-height: 1.6;"><span style="font-size: 20px; color: rgb(141, 202, 236);" class="">backed by true digital property rights on the Ethereum network.</span></p></div>
    </div>
  </div>
              <div class="widget-row with-centered-content">
                  <div class="widget 
          widgetResponsive textWidget col8" id="text-widget-1518973632135" data-type="TextWidget" data-delay="" data-animation-duration="" data-animation-delay="" data-animation="lazyAnimation-" style="margin-top: 3%; margin-left: 0%;">
      <div class="text-widget-content"><p style="text-align: center; line-height: 1.8;"><span style="color: rgb(204, 204, 204); font-size: 16px;">We employ blockchain technology to enable our users to own NFTs assets on a virtual platform built on web 3.0.</span></p></div>
    </div>
  </div>
              <div class="widget-row ">
                  <div class="widget 
          widgetResponsive imageWidget col20" id="image-widget-1648560719883" data-type="ImageWidget" data-delay="" data-animation-duration="" data-animation-delay="" data-animation="lazyAnimation-" style="margin-top: 0px; margin-left: 0px;">

      <div class="image-box  image-position-default" style="max-width: 1100px;">
        <div class="widget-preserving-ratio-outer " style="padding-bottom: 18.181818181818183%">

          <div class="widget-preserving-ratio-inner" data-slide="https://content.app-sources.com/s/49401586197528073/uploads/Logotipos/educaverse_logo-8560354.png">
            <a class="lazyImage flex flex-col
                image-fit">
              <img src="https://content.app-sources.com/s/49401586197528073/uploads/Logotipos/educaverse_logo-8560354.png" class="flex-none" alt="" style="">
            </a>
            </div>
        </div>
      </div>
    </div>
  </div>
              <div class="widget-row ">
                  <div class="widget 
          
         widgetResponsive spacer col20" id="spacer-widget-1511555914983" data-type="Spacer" style="margin-top: 0px; margin-left: 0px;">
      <div class="widget-preserving-ratio-outer" style="padding-bottom: 9.818181818181818% ">
        <div class="widget-preserving-ratio-inner"></div>
      </div>
    </div>
  </div>
              <div class="widget-row ">
                  <div class="widget 
         mobile-only  
         widgetResponsive spacer col20" id="spacer-widget-1648562477897" data-type="Spacer" style="margin-top: 0px; margin-left: 0px;">
      <div class="widget-preserving-ratio-outer" style="padding-bottom: 23.142857142857142% ">
        <div class="widget-preserving-ratio-inner"></div>
      </div>
    </div>
  </div>
              </div></div>
      <div class="background-overlay " style="background-color:rgba(35, 34, 52, 0.880520114650974);"></div>
      <div       class="full-size-abs container-video"><iframe id="video-container-widget-1509144589946" class="container-video-wrapper slow-transition-opacity active" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="The Educational Metaverse - Educaverse" width="1106.805511111111" height="622.5781" src="https://www.youtube.com/embed/?autoplay=0&amp;autohide=1&amp;modestbranding=1&amp;rel=0&amp;mute=1&amp;showinfo=0&amp;controls=0&amp;disablekb=0&amp;enablejsapi=1&amp;iv_load_policy=3&amp;playsinline=1&amp;origin=https%3A%2F%2Feducaverse.org&amp;widgetid=1"></iframe><div class="full-size-abs"></div></div></div>



</div> */}