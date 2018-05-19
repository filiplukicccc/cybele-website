import React, { Component } from 'react';
import css from './main.scss'
import style from './count.css'
import { Grid } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import CountUp from 'react-countup'
import TrackVisibility from 'react-on-screen';
import countImg from '../../video/countUpBG.jpg'
import { Parallax } from 'react-parallax'

class Count extends Component {
  render() {
    return (
      <div style={{width:"100%"}}>
       <div style={{background:'rgba(0,0,0,0.85)',width:"100%",height:"100%"}}>
       <Parallax bgImage={countImg} strength={-100} className={style.bgImg}>
         <Grid>
          <Grid.Row className={style.countUpRow}>
          <Grid.Column >
          <TrackVisibility once throttleInterval={100}>
          {
              ({ isVisible }) => isVisible ?
              <div className={style.countDiv}>
          <div style={{textAlign:"center"}}>
           <CountUp className={style.countUp} start={0} end={160} duration={4.75} useEasing={true}/>
          <p>HAPPY CLIENTS</p>
          </div>
          <div style={{textAlign:"center"}}>
          <CountUp className={style.countUp} start={0} end={160} duration={4.75} useEasing={true}/>
          <p>CUPS OF COFFEE (per day)</p>
          </div>
          <div style={{textAlign:"center"}}>
          <CountUp className={style.countUp} start={0} end={360} duration={4.75} useEasing={true}/>
          <p>POSITIVE FEEDBACK</p>
          </div>
          <div style={{textAlign:"center"}}>
          <CountUp className={style.countUp} start={0} end={60} duration={4.75} useEasing={true}/>
          <p>FINISHED PROJECTS</p>
          </div>
          <div style={{textAlign:"center"}}>
          <CountUp className={style.countUp} start={0} end={92} duration={4.75} useEasing={true}/>
          <p>OWN PROJECTS</p>
          </div>
          <div style={{textAlign:"center"}}>
          <CountUp className={style.countUp} start={0} end={12} duration={4.75} useEasing={true}/>
          <p>WINNING AWARDS</p>
          </div>
          </div>
          : ""}
          </TrackVisibility>
            </Grid.Column >
          </Grid.Row>
        </Grid>
        </Parallax>
        </div>
      </div>
    )
  }
}
export default Count;