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
        <video style={{marginBottom:'-4px'}} autoPlay loop src="https://coverr.co/s3/mp4/Love-Coding.mp4">
        </video>
        <div className={css.homeDiv}>
          <StyleRoot>
            <h1 className={css.welcome} style={styles.zoomInDown}>W E L C O M E &nbsp; T O &nbsp; <span>C Y B E L E</span></h1>
          </StyleRoot>
          <p><i>Creativity is intelligence having fun</i></p>
        </div>
      </div>
    )
  }
}
export default Video;