import React, { Component } from 'react';
import css from './main.scss'
import HoverImage from "react-hover-image"
import yourFile from "../../video/idea.jpg"
import yourFileHover from "../../video/profil.jpg"


class People extends Component {
  render(){
    return(
      <div style={{width:'300px',height:'200px'}}>
          ahah
       <HoverImage style={{width:'300px',height:'200px'}}
          src={yourFile}
          hoverSrc={yourFileHover}
        />
      </div>
    )
  }
}
export default People;