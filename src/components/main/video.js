import React, { Component } from 'react';
import css from './main.scss'
import { zoomInDown, fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import logo from "../../video/logo.png";
import movie from "../../video/film.mp4";


const styles = {
  zoomInDown: {
    animation: 'x 3s',
    animationName: Radium.keyframes(zoomInDown, 'zoomInDown')
  },
  fadeIn: {
    animation: 'x 7.5s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
}

class Video extends Component {
  render(){
    return(
      <div>
        <video className={css.videoHome} style={{marginBottom:'-6px'}} autoPlay loop src={movie}>
        </video>
           <div className={css.homeDiv}>
             <StyleRoot>
              <img src={logo} width='140px' style={styles.fadeIn} />
               <h1 className={css.welcome} style={styles.zoomInDown}>WELCOME TO <span>CYBELE</span></h1>
             </StyleRoot>
             <p><i>Creativity is intelligence having fun</i></p>
           </div>
      </div>
    )
  }
}
export default Video;