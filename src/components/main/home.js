import React, { Component } from 'react';
import Header from './header';
import AboutUs from './about-us'
import css from './main.scss'
import { Parallax } from 'react-parallax'
import ScrollableAnchor from 'react-scrollable-anchor'
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Video from './video'
import Services from './services'
import Clients from './clients'
import Count from './count'
import Contact from './contact'
import People from './team'
import LoaderCom from './loader'
import { configureAnchors } from 'react-scrollable-anchor'

configureAnchors({offset: 0, scrollDuration: 800})

const styles = {
  fadeIn: {
    animation: 'x 2.5s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 3000);
  }

  render(){
    return(
      <div>
        {  this.state.loading === true ? <LoaderCom /> : 
          <StyleRoot>
            <div style={styles.fadeIn}>
              <ScrollableAnchor id={'home'}>
                <Parallax>
                  <Header />
                  <Video />
                </Parallax>
              </ScrollableAnchor >
              <ScrollableAnchor id={'about-us'}>
                  <AboutUs />
              </ScrollableAnchor>
              <ScrollableAnchor id={'services'}>
                  <Services />
              </ScrollableAnchor>
              <ScrollableAnchor id={'clients'}>
                <Clients />
              </ScrollableAnchor>
              <ScrollableAnchor id={'count'}>
                <Parallax>
                  <Count />
                </Parallax>
              </ScrollableAnchor>
              <ScrollableAnchor id={'people'}>
                <People />
              </ScrollableAnchor>
              <ScrollableAnchor id={'contact'}>
                <Contact />
              </ScrollableAnchor>
            </div>
          </StyleRoot>
        }
      </div>
    )
    
  }
}
export default Home;