import React, { Component } from 'react';
import css from './main.scss'
import HoverImage from "react-hover-image"
import yourFile from "../../video/elvis-1.jpg"
import yourFileHover from "../../video/elvis2.jpg"
import {
  Grid
} from 'semantic-ui-react'


class People extends Component {
  render(){
    return(
      <div className={css.aboutUs}>
        <div>
        <h2>M E E T &nbsp; T H E &nbsp; T E A M</h2>
        <p style={{textAlign:'center'}}>some text about cybele</p>
        <div style={{textAlign:'center',paddingTop:'15px',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'50px'}}>
          <span className={css.border}></span>
          <span style={{width:'8px',height:'8px',background:'#f0d389',display:'inline-block',borderRadius:'50%',margin:'0 20px'}}></span>
          <span className={css.border}></span>
        </div>
        </div>
        <Grid>
          <Grid.Row centered>
            <Grid.Column computer={3}>
              <div className={css.teamImg} style={{backgroundImage: `url(${yourFile})`}}>
              </div>
            </Grid.Column>
            <Grid.Column computer={3}>
              <div className={css.teamImg} style={{backgroundImage: `url(${yourFile})`}}>
              </div>
            </Grid.Column>
            <Grid.Column computer={3}>
              <div className={css.teamImg} style={{backgroundImage: `url(${yourFile})`}}>
              </div>
            </Grid.Column>
            <Grid.Column computer={3}>
              <div className={css.teamImg} style={{backgroundImage: `url(${yourFile})`}}>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
export default People;

{/* <HoverImage style={{width:'300px',height:'200px'}}
          src={yourFile}
          hoverSrc={yourFileHover}
        /> */}
        {/* <div className={css.slika} style={{width:'600px',height:'400px',position:'relative',overflow:'hidden'}}>
          <div style={{width:'100%',height:'100%'}}><img src={yourFile} style={{width:'100%',height:'100%'}} /></div>
          <div className={css.slika3} style={{width:'100%',height:'100%',position:'absolute',top:'0px',left:'0px'}}><img className={css.slika2} src={yourFileHover} style={{width:'100%',height:'100%'}} /></div>
        </div>
        <div className={css.slikaa} style={{width:'600px',height:'400px',position:'relative',overflow:'hidden'}}>
        <div className={css.crn}></div>
          <div className={css.b1} style={{width:'100%',height:'100%'}}></div>
          <div className={css.b2} style={{width:'100%',height:'100%',position:'absolute',top:'0px',left:'0px'}}></div>
        </div>
        <div style={{width:'200px',height:'200px'}}>a</div> */}