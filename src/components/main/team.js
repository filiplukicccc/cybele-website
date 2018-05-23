import React, { Component } from 'react';
import css from './main.scss'
import HoverImage from "react-hover-image"
import GridColumn, { Grid } from 'semantic-ui-react'
import { flipInX, slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import TrackVisibility from 'react-on-screen';
import elvis from "../../video/Elvis.png";
import sane from "../../video/Sanee.png";
import ciga from "../../video/Ciga.png";
import ficko from "../../video/Ficko.png";
import gagi from "../../video/Gagi.png";
import kova from "../../video/Kova.png";
import marko from "../../video/Marko.png";
import tiki from "../../video/Tiki.png";
import steva from "../../video/steva-stefan.png";

const styles = {
  flipInX: {
    animation: 'x 2.5s',
    animationName: Radium.keyframes(flipInX, 'flipInX')
  },
  slideInRight: {
    animation: 'x 2.5s',
    animationName: Radium.keyframes(slideInRight, 'slideInRight')
  }
}

class People extends Component {
  constructor(props){
    super(props);
    this.state = {
      trans: 0
    }
  }
  plus = () => {
    this.setState({
      trans: this.state.trans - 305
    })
    if(this.state.trans === -1525) {
      this.setState({
        trans: -1525
      })
    }
  }
  plus1 = () => {
    this.setState({
      trans: this.state.trans - 305
    })
    if(this.state.trans === -1830) {
      this.setState({
        trans: -1830
      })
    }
  }
  plus2 = () => {
    this.setState({
      trans: this.state.trans - 305
    })
    if(this.state.trans === -2135) {
      this.setState({
        trans: -2135
      })
    }
  }
  plus3 = () => {
    this.setState({
      trans: this.state.trans - 305
    })
    if(this.state.trans === -2440) {
      this.setState({
        trans: -2440
      })
    }
  }
  minus = () => {
    this.setState({
      trans: this.state.trans + 305
    })
    if(this.state.trans === 0) {
      this.setState({
        trans: 0
      })
    }
  }
  render(){
    console.log('trans',this.state.trans)
    return(
      <div className={css.aboutUs}>
        <TrackVisibility once throttleInterval={800}>
            {
              ({ isVisible }) => isVisible ?
              <StyleRoot>
                <div style={styles.flipInX}>
                <h2>M E E T &nbsp; T H E &nbsp; T E A M</h2>
                <p style={{textAlign:'center'}}>We're the best professionals in this field</p>
                <div style={{textAlign:'center',paddingTop:'15px',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'50px'}}>
                  <span className={css.border}></span>
                  <span style={{width:'8px',height:'8px',background:'#f0d389',display:'inline-block',borderRadius:'50%',margin:'0 20px'}}></span>
                  <span className={css.border}></span>
                </div>
                </div>
              </StyleRoot> : ''
            }
        </TrackVisibility>
        <TrackVisibility once throttleInterval={800}>
            {
              ({ isVisible }) => isVisible ?
          <StyleRoot>
            <div style={styles.slideInRight} className={css.container}>
              <div className={css.inCon}>
                <div className={css.wrap}>
                  <div style={{transform: `translateX(${this.state.trans + 'px'})` }} className={css.inWrap}>
                    <div className={css.pic}>
                      <div className={css.inPic}>
                        <div style={{backgroundImage: `url(${sane})`}} className={css.mem}>
                        <div className={css.hoverDiv}></div>
                        </div>
                        <div className={css.teamImgHover} style={{backgroundImage: `url(${sane})`}}>
                        <div className={css.hoverDivSec}></div></div>
                      </div>
                      <h3 className={css.name}>DUSAN MARKOVIC</h3>
                      <p className={css.profession}>Project Manager</p>
                    </div>
                    <div className={css.pic}>
                      <div className={css.inPic}>
                        <div style={{backgroundImage: `url(${ficko})`}} className={css.mem}>
                        <div className={css.hoverDiv}></div>
                        </div>
                        <div className={css.teamImgHover} style={{backgroundImage: `url(${ficko})`}}>
                        <div className={css.hoverDivSec}></div></div>
                      </div>
                      <h3 className={css.name}>FILIP LUKIC</h3>
                      <p className={css.profession}>Frontend Developer</p>
                    </div>
                    <div className={css.pic}>
                      <div className={css.inPic}>
                        <div style={{backgroundImage: `url(${tiki})`}} className={css.mem}>
                        <div className={css.hoverDiv}></div>
                        </div>
                        <div className={css.teamImgHover} style={{backgroundImage: `url(${tiki})`}}>
                        <div className={css.hoverDivSec}></div></div>
                      </div>
                      <h3 className={css.name}>TIJANA ERCEG</h3>
                      <p className={css.profession}>Web Designer</p>
                    </div>
                    <div className={css.pic}>
                      <div className={css.inPic}>
                        <div style={{backgroundImage: `url(${ciga})`}} className={css.mem}>
                        <div className={css.hoverDiv}></div>
                        </div>
                        <div className={css.teamImgHover} style={{backgroundImage: `url(${ciga})`}}>
                        <div className={css.hoverDivSec}></div></div>
                      </div>
                      <h3 className={css.name}>MILOS CIGANOVIC</h3>
                      <p className={css.profession}>Software Developer</p>
                    </div>
                    <div  className={css.pic}>
                      <div className={css.inPic}>
                        <div style={{backgroundImage: `url(${steva})`}} className={css.mem}>
                        <div className={css.hoverDiv}></div>
                        </div>
                        <div className={css.teamImgHover} style={{backgroundImage: `url(${steva})`}}>
                        <div className={css.hoverDivSec}></div></div>
                      </div>
                      <h3 className={css.name}>STEFAN PAREZANOVIC</h3>
                      <p className={css.profession}>Backend Developer</p>
                    </div>
                    <div className={css.pic}>
                      <div className={css.inPic}>
                        <div style={{backgroundImage: `url(${elvis})`}} className={css.mem}>
                        <div className={css.hoverDiv}></div>
                        </div>
                        <div className={css.teamImgHover} style={{backgroundImage: `url(${elvis})`}}>
                        <div className={css.hoverDivSec}></div></div>
                      </div>
                      <h3 className={css.name}>ELVIS MASOVIC</h3>
                      <p className={css.profession}>Software Developer</p>
                    </div>
                    <div className={css.pic}>
                      <div className={css.inPic}>
                        <div style={{backgroundImage: `url(${gagi})`}} className={css.mem}>
                        <div className={css.hoverDiv}></div>
                        </div>
                        <div className={css.teamImgHover} style={{backgroundImage: `url(${gagi})`}}>
                        <div className={css.hoverDivSec}></div></div>
                      </div>
                      <h3 className={css.name}>DRAGAN NIKOLIC</h3>
                      <p className={css.profession}>Frontend Developer</p>
                    </div>
                    <div className={css.pic}>
                      <div className={css.inPic}>
                        <div style={{backgroundImage: `url(${marko})`}} className={css.mem}>
                        <div className={css.hoverDiv}></div>
                        </div>
                        <div className={css.teamImgHover} style={{backgroundImage: `url(${marko})`}}>
                        <div className={css.hoverDivSec}></div></div>
                      </div>
                      <h3 className={css.name}>MARKO VENIGER</h3>
                      <p className={css.profession}>Gameplay Progammer</p>
                    </div>
                    <div className={css.pic}>
                      <div className={css.inPic}>
                        <div style={{backgroundImage: `url(${kova})`}} className={css.mem}>
                        <div className={css.hoverDiv}></div>
                        </div>
                        <div className={css.teamImgHover} style={{backgroundImage: `url(${kova})`}}>
                        <div className={css.hoverDivSec}></div></div>
                      </div>
                      <h3 className={css.name}>NEMANJA KOVACEVIC</h3>
                      <p className={css.profession}>PHP Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </StyleRoot> : ''
            }
        </TrackVisibility>
            <div className={css.buttons}>
              <span style={{width:'20px',height:'8px',backgroundColor:'#f0d389',borderRadius:'3px',marginRight:'10px',cursor:'pointer'}} onClick={this.minus}></span>
              <span style={{width:'20px',height:'8px',backgroundColor:'#f0d389',borderRadius:'3px',marginLeft:'10px',cursor:'pointer'}} onClick={this.plus}></span>
            </div>
            <div className={css.buttons1}>
              <span style={{width:'20px',height:'8px',backgroundColor:'#f0d389',borderRadius:'3px',marginRight:'10px',cursor:'pointer'}} onClick={this.minus}></span>
              <span style={{width:'20px',height:'8px',backgroundColor:'#f0d389',borderRadius:'3px',marginLeft:'10px',cursor:'pointer'}} onClick={this.plus1}></span>
            </div>
            <div className={css.buttons2}>
              <span style={{width:'20px',height:'8px',backgroundColor:'#f0d389',borderRadius:'3px',marginRight:'10px',cursor:'pointer'}} onClick={this.minus}></span>
              <span style={{width:'20px',height:'8px',backgroundColor:'#f0d389',borderRadius:'3px',marginLeft:'10px',cursor:'pointer'}} onClick={this.plus2}></span>
            </div>
            <div className={css.buttons3}>
              <span style={{width:'20px',height:'8px',backgroundColor:'#f0d389',borderRadius:'3px',marginRight:'10px',cursor:'pointer'}} onClick={this.minus}></span>
              <span style={{width:'20px',height:'8px',backgroundColor:'#f0d389',borderRadius:'3px',marginLeft:'10px',cursor:'pointer'}} onClick={this.plus3}></span>
            </div>
      </div>
    )
  }
}
export default People;
