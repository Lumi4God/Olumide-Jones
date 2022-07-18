import React from 'react'
import './header.css'


const cube = () => {

  return (
    <div className="cube">
       <div className="store">
        <div className="cubic">
            <div className="surface one">HTML</div>
            <div className="surface two">CSS</div>
            <div className="surface three">JS</div>
            <div className="surface four">REACT</div>
            <div className="surface five">Node</div>
            <div className="surface six">Express</div>
        </div>
       </div>
    </div>
  )
}

export default cube

/*==================cube css=================*/
/* .store {
  width: 300px;
  height: 300px;
  position: absolute;
  perspective: 1000px;
}
.cubic {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transform: translateZ( -200px )
          rotateZ(100deg)
          rotateX(450deg);
  animation: spin 3s infinite linear;        
}
.cubic .surface {
  width: 100%;
  height: 100%;
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  display: block;
  position: absolute;
  line-height: 300px;
  background: #004080;
  text-align: center;
  backface-visibility: hidden;
}
.cubic .one { transform: rotateY(0deg) translateZ(150px);}
.cubic .two { transform: rotateX(180deg) translateZ(150px);}
.cubic .three { transform: rotateY(90deg) translateZ(150px);}
.cubic .four { transform: rotateY(-90deg) translateZ(150px);}
.cubic .five { transform: rotateX(90deg) translateZ(150px);}
.cubic .six { transform: rotateX(-90deg) translateZ(150px);}
@keyframes spin {
  0% {transform: translateZ(-100px) rotateY(360deg) rotateZ(0deg) rotateX(45deg);}
  50% {transform: translateZ(-100px) rotateY(180deg) rotateZ(180deg) rotateX(45deg);}
  100% {transform: translateZ(-100px) rotateY(0deg) rotateZ(360deg) rotateX(45deg);}
} */