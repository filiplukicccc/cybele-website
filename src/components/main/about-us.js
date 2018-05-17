import React, { Component } from 'react';
import css from './main.scss'
import {
  Grid
} from 'semantic-ui-react'
import { fadeInLeft, fadeInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
// import { Button, Image, Transition } from 'semantic-ui-react'
import TrackVisibility from 'react-on-screen';

// const transitions = ['fade left','jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce']

// const options = transitions.map(name => ({ key: name, text: name, value: name }))

const styles = {
  fadeInLeft: {
    animation: 'x 3.5s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
  }
}


class AboutUs extends Component {
  // state = { animation: transitions[0], duration: 2000, visible: false }

  // handleChange = (e, { name, value }) => this.setState({ [name]: value })

  // toggleVisibility = () => this.setState({ visible: true })

  render(){
    // const { animation, duration, visible } = this.state
    return(
      <div className={css.aboutUs} // onMouseEnter={this.toggleVisibility}
      >
      <div>
       <h2>A B O U T &nbsp;<span> C Y B E L E</span></h2>
       <p>jajaj inacin </p>
       <div style={{textAlign:'center'}}>
         <span>marko</span>
         <span style={{width:'8px',height:'8px',background:'#f0d389',display:'inline-block'}}></span>
         <span>janko</span>
       </div>
       </div>
        <Grid>
          <Grid.Row centered>
            <Grid.Column computer={6}>
            <TrackVisibility once throttleInterval={100}>
            {
              ({ isVisible }) => isVisible ?
              <StyleRoot>
              <div style={styles.fadeInLeft}>
                <h3><span style={{height:'20px',background:'#f0d389',display:'inline-block',width:'2px'}}></span> Who we are</h3>
                <p>We were established in April 2017 with desire to offer our customers the best possible services. We are a young company which, thanks to our highly competent personnel and immense enthusiasm, is in the position to meet all your expectations!</p>
              </div>
              </StyleRoot> : ''
            }
            </TrackVisibility>
            </Grid.Column>
            <Grid.Column computer={6}>
            {/* <Transition animation={animation} duration={duration} visible={visible}> */}
            <div>
              <h3><span style={{height:'20px',background:'#f0d389',display:'inline-block',width:'2px'}}></span> Our mission</h3>
              <p>Let’s grow together! We are constantly following the trends in the dynamic world of information technologies in order to provide our customers with the best service and that is exactly what distinguishes us from others.</p>
              <h3><span style={{height:'20px',background:'#f0d389',display:'inline-block',width:'2px'}}>&nbsp;</span> Our vision</h3>
              <p>Cybele is going to rise over Silicon Valley and conquer (not divide) like we are supposed to. 2020 Our vision is becoming reality.</p>
              </div>
              {/* </Transition> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
export default AboutUs;