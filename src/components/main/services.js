import React, { Component } from 'react';
import css from './main.scss'
import { Parallax } from 'react-parallax'
import idea from '../../video/idea.jpg'
import {
  Grid, Icon
} from 'semantic-ui-react'
import { fadeInLeft, fadeInRight, fadeInDown, fadeInUp, tada } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import TrackVisibility from 'react-on-screen';

const styles = {
  fadeInLeft: {
    animation: 'x 2.5s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
  },
  fadeInRight: {
    animation: 'x 2.5s',
    animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
  },
  fadeInDown: {
    animation: 'x 2.5s',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
  },
  fadeInUp: {
    animation: 'x 2.5s',
    animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
  },
  tada: {
    animation: 'x 2.5s',
    animationName: Radium.keyframes(tada, 'tada')
  }
}

class Services extends Component {
  render(){
    return(
      <div className={css.services}>
        <Parallax bgImage={idea} blur={{min: -1,max:3}}>
          <div style={{background:'rgba(0,0,0,0.85)',padding:'100px 0 50px 0'}}>
          <TrackVisibility once throttleInterval={100}>
            {
              ({ isVisible }) => isVisible ?
              <StyleRoot>
                <div style={styles.tada}>
                  <h2>O U R &nbsp;&nbsp; <span style={{color:'#f0d389'}}>S E R V I C E S</span></h2>
                  <p style={{textAlign:'center'}}>What we can offer you</p>
                  <div style={{textAlign:'center',paddingTop:'15px',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'50px'}}>
                    <span className={css.border}></span>
                    <span style={{width:'8px',height:'8px',background:'#f0d389',display:'inline-block',borderRadius:'50%',margin:'0 20px'}}></span>
                    <span className={css.border}></span>
                  </div>
                </div>
              </StyleRoot> : ''
            }
            </TrackVisibility>
            <Grid style={{margin:'0px'}}>
              <Grid.Row centered>
                <Grid.Column computer={4} tablet={6} mobile={14} style={{textAlign:'center',margin:'0 1px 50px 0'}}>
                <TrackVisibility once throttleInterval={100}>
            {
              ({ isVisible }) => isVisible ?
              <StyleRoot>
                <div style={styles.fadeInLeft}>
                  <div className={css.iconDiv}>
                    <Icon name='laptop' className={css.icon} style={{paddingTop:'5px'}}/>
                  </div>
                    <h3>Web Development</h3>
                    <p>Our  developers are trained  and experienced to provide top level web applications  across a variety of website platforms. Technologies: HTML,CSS,JavaScript,ReactJS,Material UI, SemanticUI.</p>
                </div>
              </StyleRoot> : ''
            }
            </TrackVisibility>
                </Grid.Column>
                <Grid.Column computer={4} tablet={6} mobile={14} style={{textAlign:'center',margin:'0 1px 50px 0'}}>
                <TrackVisibility once throttleInterval={100}>
            {
              ({ isVisible }) => isVisible ?
              <StyleRoot>
                <div style={styles.fadeInDown}>
                <div className={css.iconDiv}>
                  <Icon name='pencil' className={css.icon} style={{paddingTop:'5px'}}/>
                </div>
                  <h3>Graphic Design</h3>
                  <p>Businesses of all sizes count on our graphic design experts. Our aim is to exceed your expectations and create difference.Technologies: Adobe Photoshop,Adobe Illustrator,Adobe After Effect,Adobe Premiere,Maya</p>
                  </div>
              </StyleRoot> : ''
            }
            </TrackVisibility>
                </Grid.Column>
                <Grid.Column computer={4} tablet={6} mobile={14} style={{textAlign:'center',margin:'0 1px 50px 0'}}>
                <TrackVisibility once throttleInterval={100}>
              {
                ({ isVisible }) => isVisible ?
              <StyleRoot>
                <div style={styles.fadeInRight}>
                <div className={css.iconDiv}>
                  <Icon name='settings' className={css.icon} style={{paddingTop:'5px'}}/>
                </div>
                  <h3>Softwere Engeneering</h3>
                  <p>We offer services for integrating and engineering complete software systems including consulting services and maintaining  software. Technologies:C#,JAVA,Python,Ruby on Rails,JS.</p>
                  </div>
                </StyleRoot> : ''
              }
            </TrackVisibility>
                </Grid.Column>
                <Grid.Column computer={4} tablet={6} mobile={14} style={{textAlign:'center',margin:'0 1px 50px 0'}}>
                <TrackVisibility once throttleInterval={100}>
            {
              ({ isVisible }) => isVisible ?
              <StyleRoot>
                <div style={styles.fadeInLeft}>
                  <div className={css.iconDiv}>
                    <Icon name='announcement' className={css.icon} style={{paddingTop:'5px'}}/>
                  </div>
                    <h3>Internet Marketing</h3>
                    <p>We provide a range of services, with a focus on creating and marketing amazing content as well as providing expert consulting and a custom control panel for clients. Technologies:SEO,Google AdWords,Facebook Advertising.</p>
                </div>
              </StyleRoot> : ''
            }
            </TrackVisibility>
                </Grid.Column>
                <Grid.Column computer={4} tablet={6} mobile={14} style={{textAlign:'center',margin:'0 1px 50px 0' }}>
                <TrackVisibility once throttleInterval={100}>
            {
              ({ isVisible }) => isVisible ?
              <StyleRoot>
                <div style={styles.fadeInUp}>
                <div className={css.iconDiv}>
                  <Icon name='at' className={css.icon} style={{paddingTop:'5px'}}/>
                </div>
                  <h3>Support and Maintanence</h3>
                  <p>Our support and maintenance solutions can assist with updating content, hosting solutions and backing up the data. We can support and maintain a wide variety of platforms online. Technologies: All availabe.</p>
                  </div>
              </StyleRoot> : ''
            }
            </TrackVisibility>
                </Grid.Column>
                <Grid.Column computer={4} tablet={6} mobile={14} style={{textAlign:'center',margin:'0 1px 50px 0'}}>
                <TrackVisibility once throttleInterval={100}>
              {
                ({ isVisible }) => isVisible ?
              <StyleRoot>
                <div style={styles.fadeInRight}>
                <div className={css.iconDiv}>
                  <Icon name='wrench' className={css.icon} style={{paddingTop:'5px'}}/>
                </div>
                  <h3>Industrial Design</h3>
                  <p>Our industrial design team works alongside our product engineers to develop beautiful concepts that  meet your business requirements. Technologies : Adobe Illustrator, AutoCAD ,3D Max,Blender.</p>
                  </div>
                </StyleRoot> : ''
              }
            </TrackVisibility>
                </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid>
              <Grid.Row centered>
                
            </Grid.Row>
          </Grid>
          </div>
          
        </Parallax>
      </div>
    )
  }
}
export default Services;