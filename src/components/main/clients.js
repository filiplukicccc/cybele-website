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
// import koddane from '../../images/koddane.png'
// import optiplaza from '../../images/optiplaza.png'
import osce from '../../images/osce.png'
import hilton from '../../images/hilton.png'
import tritacke from '../../images/tritacke.png'
import { Grid } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'


class Clients extends Component {
  render(){
    return(
      <div className={css.aboutUs}>
        <div>
      <h2>O U R  &nbsp;<span> C L I E N T S</span></h2>
      <p style={{textAlign:'center'}}>some text about cybele</p>
      <div style={{textAlign:'center',paddingTop:'15px',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'50px'}}>
        <span className={css.border}></span>
        <span style={{width:'8px',height:'8px',background:'#f0d389',display:'inline-block',borderRadius:'50%',margin:'0 20px'}}></span>
        <span className={css.border}></span>
      </div>
      </div>
      <Grid  className={style.clientsDiv}>
      <Icon name = "coffee" size='large'/>
      <div><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
      <Grid.Row centered style={{padding:"0px",backgroundColor:"#161e25",justifyContent:"centered"}}>
        <Grid.Column computer={3} className={css.gridColumns}>
        <div className={style.imgZoom}>
          <img className={style.imgZepter} src={zepter}/>
        </div>
        </Grid.Column>
        <Grid.Column computer={3} className={css.gridColumns}>
        <div className={style.imgZoom}>
          <img className={style.imgAerodrom} src={aerodrom}/>
          </div>
          </Grid.Column>
          <Grid.Column computer={3} className={css.gridColumns}>
          <div className={style.imgZoom}>
           <img   src={galenika}/>
           </div>
           </Grid.Column>
           {/* <div className={style.imgZoom}>
          <img src={optiplaza}/>
          </div> */}
          {/* <div className={style.imgZoom}>
          <img src={ap}/>
          </div> */}
          <Grid.Column computer={3} className={css.gridColumns}>
          <div className={style.imgZoom}>
            <img src={avanglion}/>
          </div>
          </Grid.Column>
       
          <Grid.Column computer={3} className={css.gridColumns}>
          <div className={style.imgZoom}>
          <img className={style.imgEli} src={eli}/>
          </div>
          </Grid.Column>
          </Grid.Row>
          <Grid.Row centered style={{padding:"0px",backgroundColor:"#161e25",justifyContent:"centered"}}>
          <Grid.Column computer={3} className={css.gridColumns}>
          <div className={style.imgZoom}>
          <img src={osce}/>
          </div>
          </Grid.Column>
          <Grid.Column computer={3} className={css.gridColumns}>
          <div className={style.imgZoom}>
          <img src={gecko}/>
          </div>
          </Grid.Column>
          {/* <div className={style.imgZoom}>
          <img src={jelka}/>
          </div> */}
          <Grid.Column computer={3} className={css.gridColumns}>
          <div className={style.imgZoom}>
          <img src={hilton}/>
          </div>
          </Grid.Column>
          <Grid.Column computer={3} className={css.gridColumns}>
          <div className={style.imgZoom}>
          <img src={tritacke}/>
          </div>
          </Grid.Column >
          </Grid.Row>
      </Grid>
      </div>
    )
  }
}
export default Clients;