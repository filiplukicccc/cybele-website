import React, { Component } from 'react';
import {
  Menu
} from 'semantic-ui-react'
import ScrollableAnchor from 'react-scrollable-anchor'

class Header extends Component {
  render(){
    return(
      <div style={{position:'absolute',right:'30px', zIndex:'100'}}>
         {/* <Menu inverted pointing secondary>
          <Link to="#home"><Menu.Item name='HOME' /></Link>
          <Link to="#about-us"><Menu.Item name='ABOUT US' /></Link>
          <Link to="/services"><Menu.Item name='SERVICES' /></Link>
          <Link to="/clients"><Menu.Item name='CLIENTS' /></Link>
          <Link to="/people"><Menu.Item name='PEOPLE' /></Link>
          <Link to="/contact"><Menu.Item name='CONTACT' /></Link>
        </Menu> */}
        <Menu inverted pointing secondary>
          <a href='#home'><Menu.Item name='HOME' /></a>
          <a href='#about-us'><Menu.Item name='ABOUT US' /></a>
          <a href='#services'><Menu.Item name='SERVICES' /></a>
          <a href='#clients'><Menu.Item name='CLIENTS' /></a>
        </Menu>
      </div>
    )
  }
}
export default Header;