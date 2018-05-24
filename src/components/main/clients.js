import React, { Component } from 'react';
import css from './main.scss'
import style from './imgZoom.css'
import zepter from '../../images/zepter.png'
import aerodrom from '../../images/aerodrom.png'
//import ap from '../../images/ap.png'
import avanglion from '../../images/avanglion.png'
import eli from '../../images/miss-eli.png'
import galenika from '../../images/galenika.png'
import gecko from '../../images/gecko.png'
// import jelka from '../../images/jelka.png'
import koddace from '../../images/koddace.png'
import optiplaza from '../../images/optiplaza.png'
import osce from '../../images/osce.png'
import hilton from '../../images/hilton.png'
import tritacke from '../../images/tritacke.png'
import { Grid } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import CountUp from 'react-countup'
import TrackVisibility from 'react-on-screen';
import { flipInY, fadeIn, zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import idea from '../../video/boobs.jpg'
import { Parallax } from 'react-parallax'

const styles = {
  flipInY: {
    animation: 'x 2.5s',
    animationName: Radium.keyframes(flipInY, 'flipInY')
  },
  fadeIn: {
    animation: 'x 3.5s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
  fadeIn1: {
    animation: 'x 2.5s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
  zoomIn: {
    animation: 'x 2.5s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  }
}

class Clients extends Component {
  render() {
    return (
      <div className={css.aboutUs} style={{paddingBottom:'0px'}}>
       <TrackVisibility once throttleInterval={100}>
            {
              ({ isVisible }) => isVisible ?
        <StyleRoot>
          <div style={styles.flipInY}>
            <h2>O U R  &nbsp;<span> C L I E N T S</span></h2>
            <p style={{ textAlign: 'center' }}>some text about cybele</p>
            <div style={{ textAlign: 'center', paddingTop: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>
              <span className={css.border}></span>
              <span style={{ width: '8px', height: '8px', background: '#f0d389', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
              <span className={css.border}></span>
            </div>
          </div>
        </StyleRoot> : ''
            }
      </TrackVisibility>
      <Parallax bgImage={idea} strength={-100}>
        <Grid style={{margin:'0px'}} className={style.clientsDiv}>
          <Grid.Row  centered>
            <Grid.Column computer={2}  tablet={3} mobile={14}>
              <TrackVisibility once throttleInterval={300}>
                {
                  ({ isVisible }) => isVisible ?
                    <StyleRoot>
                      <div style={styles.fadeIn1} className={css.iconGreyDiv}>
                        <Icon name='coffee' size='large' className={css.iconGrey} />
                        <p>DISCUSS</p>
                      </div>
                    </StyleRoot> : ''
                }
              </TrackVisibility>
            </Grid.Column>
            <Grid.Column computer={2} tablet={3} mobile={7}>
              <TrackVisibility once throttleInterval={700}>
                {
                  ({ isVisible }) => isVisible ?
                    <StyleRoot>
                      <div style={styles.fadeIn1} className={css.iconGreyDiv}>
                        <Icon name='write' size='large' className={css.iconGrey} />
                        <p>CREATIVE CONCEPT</p>
                      </div>
                    </StyleRoot> : ''
                }
              </TrackVisibility>
            </Grid.Column>
            <Grid.Column computer={2} tablet={3} mobile={7}>
              <TrackVisibility once throttleInterval={1100}>
                {
                  ({ isVisible }) => isVisible ?
                    <StyleRoot>
                      <div style={styles.fadeIn1} className={css.iconGreyDiv}>
                        <Icon name='settings' size='large' className={css.iconGrey} />
                        <p>PRODUCTION</p>
                      </div>
                    </StyleRoot> : ''
                }
              </TrackVisibility>
            </Grid.Column>
            <Grid.Column computer={2} tablet={3} mobile={7}>
              <TrackVisibility once throttleInterval={1500}>
                {
                  ({ isVisible }) => isVisible ?
                    <StyleRoot>
                      <div style={styles.fadeIn1} className={css.iconGreyDiv}>
                        <Icon name='bug' size='large' className={css.iconGrey} />
                        <p>TESTING</p>
                      </div>
                    </StyleRoot> : ''
                }
              </TrackVisibility>
            </Grid.Column>
            <Grid.Column computer={2} tablet={3} mobile={7}>
              <TrackVisibility once throttleInterval={1800}>
                {
                  ({ isVisible }) => isVisible ?
                    <StyleRoot>
                      <div style={styles.fadeIn1} className={css.iconGreyDiv}>
                        <Icon name='smile' size='large' className={css.iconGrey} />
                        <p>HAPPY CLIENT</p>
                      </div>
                    </StyleRoot> : ''
                }
              </TrackVisibility>
            </Grid.Column>
            
                      <Grid style={{ margin:'0px',minHeight:'297px'}}>
                        <Grid.Row centered>
                          <Grid.Column computer={10} mobile={14}>
                          <TrackVisibility once throttleInterval={1000}>
              {
                ({ isVisible }) => isVisible ?
                  <StyleRoot>
                    <div style={styles.fadeIn}>
                            <div style={{ textAlign: "center", color: "#161e25",borderTop:"1px solid #161e25",borderBottom:"1px solid #161e25",marginBottom:"85px",marginTop:"30px" }}><p style={{marginTop:"30px",marginBottom:"30px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
                            </div>
                  </StyleRoot> : ''
            }
          </TrackVisibility>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    
          </Grid.Row>
          </Grid>
          </Parallax>
          <div style={{minHeight:'400px'}}>
          <TrackVisibility once throttleInterval={1000}>
              {
                ({ isVisible }) => isVisible ?
                  <StyleRoot>
                    <div style={styles.zoomIn} >
                      <Grid style={{margin:'0px'}}>
                        <Grid.Row centered style={{ padding: "0px", backgroundColor: "#161e25", justifyContent: "centered" }}>
                        <Grid.Column computer={2} tablet={6} mobile={12} className={css.gridColumns}>
                          <div className={style.imgZoom}>
                            <img className={style.imgZepter + " " + style.logos} src={zepter} />
                          </div>
                        </Grid.Column>
                        <Grid.Column computer={2} tablet={6} mobile={12} className={css.gridColumns}>
                          <div className={style.imgZoom}>
                            <img className={style.imgAerodrom + " " + style.logos} src={aerodrom} />
                          </div>
                        </Grid.Column>
                        <Grid.Column computer={3} tablet={6} mobile={12} className={css.gridColumns}>
                          <div className={style.imgZoom }>
                            <img className={style.logos} src={galenika} />
                          </div>
                        </Grid.Column>
                        <Grid.Column computer={2} tablet={6} mobile={12} className={css.gridColumns}>
                          <div className={style.imgZoom}>
                            <img  className={style.logos + " " + style.imgHilton} src={hilton} />
                          </div>
                        </Grid.Column>
                        <Grid.Column computer={2} tablet={6} mobile={12} className={css.gridColumns}>
                          <div className={style.imgZoom}>
                            <img className={style.imgEli + " " + style.logos} src={eli} />
                          </div>
                        </Grid.Column>
                        <Grid.Column computer={3} tablet={6} mobile={12} className={css.gridColumns}>
                          <div className={style.imgZoom}>
                            <img className={style.imgOsce + " " + style.logos} src={osce} />
                          </div>
                        </Grid.Column>
                        <Grid.Column computer={3} tablet={6} mobile={12} className={css.gridColumns}>
                          <div className={style.imgZoom}>
                            <img  className={style.logos} src={gecko} />
                          </div>
                        </Grid.Column>
                        <Grid.Column computer={3} tablet={6} mobile={12} className={css.gridColumns}>
                          <div className={style.imgZoom}>
                            <img  className={style.logos} src={avanglion} />
                          </div>
                        </Grid.Column>
                      <Grid.Column computer={3} tablet={6} mobile={12} className={css.gridColumns}>
                          <div className={style.imgZoom}>
                            <img  className={style.logos} src={tritacke} />
                          </div>
                        </Grid.Column >
                        <Grid.Column computer={3} tablet={6} mobile={12} className={css.gridColumns}>
                          <div className={style.imgZoom}>
                            <img  className={style.logos} src={optiplaza} />
                          </div>
                        </Grid.Column >
                        <Grid.Column computer={3} tablet={6} mobile={12} className={css.gridColumns}>
                          <div className={style.imgZoom}>
                            <img  className={style.logos + " " + style.imgKodDace} src={koddace} />
                          </div>
                        </Grid.Column >
                      </Grid.Row>
                    </Grid>
                  </div>
                </StyleRoot> : ''
            }
          </TrackVisibility>
        </div>
      </div>
    )
  }
}
export default Clients;