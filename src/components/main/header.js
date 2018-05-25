import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { HamburgerButton } from 'react-hamburger-button';
import style from './header.css'


class Header extends Component {
  constructor(props){
    super(props);
      this.state= {
        open:false
      }
  }
  handleClick=()=>{
    this.setState({
        open: !this.state.open
    });
}
  render(){
    let display=this.state.open ? "inline-block" : "none"
    return(
      <div>
        <div style={{position:'fixed',width:'100%',zIndex:'1000'}}>
          <div>
            <div className={style.menu}>
              {/* <Menu inverted pointing secondary>
                <Link to="#home"><Menu.Item name='HOME' /></Link>
                <Link to="#about-us"><Menu.Item name='ABOUT US' /></Link>
                <Link to="/services"><Menu.Item name='SERVICES' /></Link>
                <Link to="/clients"><Menu.Item name='CLIENTS' /></Link>
                <Link to="/people"><Menu.Item name='PEOPLE' /></Link>
                <Link to="/contact"><Menu.Item name='CONTACT' /></Link>
              </Menu> */}
                <Menu style={{outline: 'none',border: 'none',float:'right'}} inverted pointing secondary>
                  <a href='#home'><Menu.Item name='HOME' /></a>
                  <a href='#about-us'><Menu.Item name='ABOUT US' /></a>
                  <a href='#services'><Menu.Item name='SERVICES' /></a>
                  <a href='#clients'><Menu.Item name='CLIENTS' /></a>
                  <a href='#people'><Menu.Item name='PEOPLE' /></a>
                  <a href='#contact'><Menu.Item name='CONTACT' /></a>
                </Menu>
              </div>
            </div>
          </div>
          <div className={style.ham}>
          <HamburgerButton
            open={this.state.open}
            onClick={this.handleClick}
            width={30}
            height={25}
            strokeWidth={3}
            color='#f0d389'
            animationDuration={0.5}
          />
          </div>
          <div className={style.hamMenuDiv} style={{display:display}}>
          <Menu className={style.hamMenu} inverted pointing secondary>
            <a href='#home'><Menu.Item name='HOME' /></a>
            <a href='#about-us'><Menu.Item name='ABOUT US' /></a>
            <a href='#services'><Menu.Item name='SERVICES' /></a>
            <a href='#clients'><Menu.Item name='CLIENTS' /></a>
            <a href='#people'><Menu.Item name='PEOPLE' /></a>
            <a href='#contact'><Menu.Item name='CONTACT' /></a>
          </Menu>
          </div>
      </div>
    )
  }
}
export default Header;