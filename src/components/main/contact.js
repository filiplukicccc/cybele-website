import React, { Component } from 'react';
import css from './main.scss'
import style from './contact.css'
import { Grid } from 'semantic-ui-react'
import { Icon, Input, TextArea, Button, TransitionablePortal, Segment, Header } from 'semantic-ui-react'
import { rotateInUpLeft, rotateInUpRight, fadeInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import TrackVisibility from 'react-on-screen';

const styles = {
  rotateInUpLeft: {
    animation: 'x 2.5s',
    animationName: Radium.keyframes(rotateInUpLeft, 'rotateInUpLeft')
  },
  rotateInUpRight: {
    animation: 'x 2.5s',
    animationName: Radium.keyframes(rotateInUpRight, 'rotateInUpRight')
  },
  fadeInDown: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
  }
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      text: "",
      open: false,
      msg: "",
      valMsg: false
    }
  }

  handleInput = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleOpen = () => { this.setState({ open: true }) }

  handleClose = () => { this.setState({ open: false }) }

  validate = () => {
    let condition
    if (this.state.name == "" || this.state.email == "" || this.state.phone == "" || this.state.text == "" || this.state.subject == "") {
      return condition = false
    } else {
      return condition = true
    }
  }
  sendMail = async () => {
    let a = this.validate();
    if (a) {
      const data = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        text: this.state.text,
        subject: this.state.subject
      }
      await fetch('http://localhost:8081/sendMail', {
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      }).then((response)=>response.text())
        .then((responseText) => {
          let res = JSON.parse(responseText)
          if (res.success == true) {
            this.handleOpen();
            this.setState({
              msg: "Email successfully sent!"
            })
          } else {
            this.handleOpen();
            this.setState({
              msg: "Email not sent! Please try again"
            })
          }
        })
      this.setState({ valMsg: false })
    } else {
      this.setState({ valMsg: true })
    }
  }

  render() {
    let errorMsg = this.state.valMsg ? "block" : "none"
    console.log("STATE", this.state)
    return (
      <div className={css.aboutUs} style={{ paddingBottom: "20px" }}>
        <div>
          <TransitionablePortal
            closeOnTriggerClick
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            transition={{ duration: 1000 }}
            open={this.state.open}
          >
            <Segment className={style.segment}>
              <Header style={{ color: "#ffff" }}>{this.state.msg}<span onClick={this.handleClose} style={{ marginLeft: "20px" }}>X</span></Header>
            </Segment>
          </TransitionablePortal>
        </div>
        <TrackVisibility once throttleInterval={800}>
          {
            ({ isVisible }) => isVisible ?
              <StyleRoot>
                <div style={styles.fadeInDown}>
                  <h2>C O N T A C T  &nbsp;<span> U S</span></h2>
                  <p style={{ textAlign: 'center' }}>We'd love to hear your feedback.</p>
                  <div style={{ textAlign: 'center', paddingTop: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>
                    <span className={css.border}></span>
                    <span style={{ width: '8px', height: '8px', background: '#f0d389', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
                    <span className={css.border}></span>
                  </div>
                </div>
              </StyleRoot> : ''
          }
        </TrackVisibility>
        <Grid style={{ margin: '0px' }}>
          <Grid.Row>
            <Grid.Column computer={6} tablet={6} mobile={15} className={style.contactColumn} >
              <TrackVisibility once throttleInterval={800}>
                {
                  ({ isVisible }) => isVisible ?
                    <StyleRoot>
                      <div style={styles.rotateInUpLeft}>
                        <div className={style.contact}>
                          <div className={style.contactDiv}>
                            <span style={{ color: '#f0d389' }}>CALL US</span><br />
                            <span>+381652225536</span>
                          </div>
                          <Icon name='call square' size='big' className={css.iconWhite} />
                        </div>
                        <div className={style.contact}>
                          <div className={style.contactDiv}>
                            <span style={{ color: '#f0d389' }}>ADDRESS</span><br />
                            <span>Jocina Ada 31a, Belgrade-Serbia</span>
                          </div>
                          <Icon name='location arrow' size='big' className={css.iconWhite} />
                        </div>
                        <div className={style.contact}>
                          <div className={style.contactDiv} >
                            <span style={{ color: '#f0d389' }}>SAY HELLO </span><br />
                            <span>office@cybeletechnologies.com</span>
                          </div>
                          <Icon name='mail' size='big' className={css.iconWhite} />
                        </div>
                      </div>
                    </StyleRoot> : ''
                }
              </TrackVisibility>
            </Grid.Column>
            <Grid.Column className={style.formDiv} computer={8} tablet={8} mobile={15} >
              <TrackVisibility once throttleInterval={800}>
                {
                  ({ isVisible }) => isVisible ?
                    <StyleRoot>
                      <div style={styles.rotateInUpRight}>
                        <Input name="name" onChange={this.handleInput} className={style.inputs} placeholder='Name' />
                        <Input name="email" type="email" onChange={this.handleInput} className={style.inputs} placeholder='Email' />
                        <Input name="phone" onChange={this.handleInput} className={style.inputs} placeholder='Phone' />
                        <div className={style.inputs}>
                          <Input name="subject" onChange={this.handleInput} className={style.subjectInput} placeholder='Subject' />
                        </div>
                        <div className={style.inputs}>
                          <TextArea error name="text" onChange={this.handleInput} rows={10} placeholder='Message' />
                          <p style={{ display: errorMsg, color: "#db2b2b", letterSpacing: "1px" }}> *** Must fill out all fields!</p>
                        </div>
                        <div>
                          <Button onClick={this.sendMail} className={style.sendButton} inverted>Send</Button>
                        </div>
                      </div>
                    </StyleRoot> : ''
                }
              </TrackVisibility>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div>
          <p style={{ marginTop: "80px", textAlign: "center",fontSize:'14px' }}>© Cybele Technologies 2017 | All right reserved</p>
        </div>
      </div>
    )
  }
}
export default Contact;