import React, { Component } from 'react';
import css from './main.scss'
import { zoomInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  zoomInDown: {
    animation: 'x 3s',
    animationName: Radium.keyframes(zoomInDown, 'zoomInDown')
  }
}

class Video extends Component {
  render(){
    return(
      <div>
        <video className={css.videoHome} style={{marginBottom:'-4px'}} autoPlay loop src="https://coverr.co/s3/mp4/Love-Coding.mp4">
        </video>
           <div className={css.homeDiv}>
             <StyleRoot>
               <h1 className={css.welcome} style={styles.zoomInDown}>WELCOME TO <span>CYBELE</span></h1>
             </StyleRoot>
             <p><i>Creativity is intelligence having fun</i></p>
           </div>
      </div>
    )
  }
}
export default Video;