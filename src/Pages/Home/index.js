import "./Home.css";
import React from "react";
import HomeVideo from "../../components/HomeVideo";
import eduverseLogo from "../../media/educaverse_logo.png";
import landOne from "../../media/img/land-1x1.jpg";
import landTwo from "../../media/img/land-2x2.jpg";
import landTree from "../../media/img/land-3x3.jpg";
import landSix from "../../media/img/land-6x6.jpg";


export default function Home() {
  return (
    <>      
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
          <div className="home-video-div">          
            <img src={eduverseLogo} className="home-video-img" />
          </div>
          
        </div>     
        <div className="tittle-video">
          <HomeVideo/>
        </div>      
      </div> 

      <div className="lands">        
        <div className="lands-resume">
          <div className="OpenSea-div">          
              <img src="https://content.app-sources.com/s/49401586197528073/uploads/Logotipos/31df0e9-OpenSea-Logo-White-8570739.svg" className="OpenSea-img" />
              <button>HOLA</button>
          </div>
          <h2 className="lands-h2">
            <span className="lands-span">
              EDUCATIONAL <br/> METAVERSE
            </span>
          </h2>
          <div>
            <span>1st WAVE</span>
            <span>2000 Lands on</span>
            <span>Ethereum</span>
          </div>
        </div>

        <div className="lands-imgs-section">
          <div className="lands-img-section">
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
        <div className="feature">
          <h2>HOLA</h2>
          <p> dale loco</p>
        </div>
        <div className="feature">
          <h2>HOLA</h2>
          <p> dale loco</p>
        </div>
        <div className="feature">
          <h2>HOLA</h2>
          <p> dale loco</p>
        </div>

      </div>

      <div className="team-section">
        <div className="home-text-area">
          <h2>Educaverse Team</h2>
          <p><span>We are building the educational metaverse with the best team of people and professionals.</span></p>
        </div> 

        <div className="teams">
          <div className="top-teams">
            <div className="team">
              <div className="lands-img">
                <img src={landSix} className="land-img-Six" />
              </div>
              <h3> JOSE</h3>
            </div>
            <div className="team">
              <div className="lands-img">
                <img src={landSix} className="land-img-Six" />
              </div>
              <h3> JOSE</h3>
            </div>
            <div className="team">
              <div className="lands-img">
                <img src={landSix} className="land-img-Six" />
              </div>
              <h3> JOSE</h3>
            </div>
          </div>
          <div className="top-teams">
            <div className="team">
              <div className="lands-img">
                <img src={landSix} className="land-img-Six" />
              </div>
              <h3> JOSE</h3>
            </div>  
            <div className="team">
              <div className="lands-img">
                <img src={landSix} className="land-img-Six" />
              </div>
              <h3> JOSE</h3>
            </div>
            <div className="team">
              <div className="lands-img">
                <img src={landSix} className="land-img-Six" />
              </div>
              <h3> JOSE</h3>
            </div>
          </div>       
        </div>
        <div className="img-position">
          <div className="team-img"></div>
        </div>
        <div></div>
      </div>
    </>
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