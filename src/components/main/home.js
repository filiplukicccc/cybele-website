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
import Count from './count'
import People from './team'
import { Loader } from 'semantic-ui-react';

// const styles = {
//   zoomInDown: {
//     animation: 'x 3s',
//     animationName: Radium.keyframes(zoomInDown, 'zoomInDown')
//   }
// }
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }

    
    // setTimeout(function(){
    //   this.setState({
    //     loading: true
    //   })
    // }, 3000);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 4000);
  }

  render(){
    return(
      <div>
        {  this.state.loading === true ? <div style={{ marginTop: "100px" }}><Loader size='large' active inline='centered' /></div> : 
        <div>
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
          </div>
        }
      </div>
    )
    
  }
}
export default Home;