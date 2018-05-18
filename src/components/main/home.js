import React, { Component } from 'react';
import Header from './header';
import AboutUs from './about-us'
import css from './main.scss'
import { Parallax } from 'react-parallax'
import ScrollableAnchor from 'react-scrollable-anchor'
import { zoomInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Video from './video'
import Services from './services'
import Clients from './clients'
import People from './team'

// const styles = {
//   zoomInDown: {
//     animation: 'x 3s',
//     animationName: Radium.keyframes(zoomInDown, 'zoomInDown')
//   }
// }

class Home extends Component {
  render(){
    return(
      <div>
        <ScrollableAnchor id={'home'}>
          <Parallax>
            <Header />
            <Video />
          </Parallax>
        </ScrollableAnchor >
        <ScrollableAnchor id={'about-us'}>
          <Parallax>
            <AboutUs />
          </Parallax>
        </ScrollableAnchor>
        <ScrollableAnchor id={'services'}>
          <Services />
        </ScrollableAnchor>
        <ScrollableAnchor id={'clients'}>
          <Clients />
        </ScrollableAnchor>
        <ScrollableAnchor id={'people'}>
          <People />
        </ScrollableAnchor>
      </div>
    )
  }
}
export default Home;