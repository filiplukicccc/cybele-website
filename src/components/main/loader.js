import React, { Component } from 'react';
import css from './main.scss'
// import { Loader } from 'semantic-ui-react';
// import Loader from 'react-loaders';
import { BubbleLoader } from 'react-css-loaders';


class LoaderCom extends Component {

  render(){
    return(
      <div>
        <div style={{height:'100vh',background:'#161e25',display:'flex',justifyContent:'center',alignItems:'center'}}>
          {/* <Loader size='huge' active inline='centered' /> */}
          {/* <Loader type="ball-rotate" active={true} /> */}
          <BubbleLoader size={7} style={{color: '#f0d389'}} />
        </div>
      </div>
    )
    
  }
}
export default LoaderCom;