import React, { Component } from 'react';
import css from './main.scss'
import style from './contact.css'
import { Grid } from 'semantic-ui-react'
import { Icon,Input,TextArea,Button,TransitionablePortal,Segment,Header} from 'semantic-ui-react'

class Contact extends Component {
  constructor(props){
    super(props);
      this.state={
        name:"",
        email:"",
        phone:"",
        subject:"",
        text:"",
        open:false,
        msg:"",
      }
  }
  
  handleInput = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }
  handleOpen = () => { this.setState({ open: true }) }
  handleClose = () => { this.setState({ open:false }) }
  sendMail = () => {
    const  data = {
      name:this.state.name,
      email:this.state.email,
      phone:this.state.phone,
      text:this.state.text,
      subject:this.state.subject
    }
    fetch('http://localhost:8081/sendMail', {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST'
    }).then((response) =>response.text())
    .then((responseText) => {
      let res=JSON.parse(responseText)
      if(res.success==true){
        this.handleOpen();
        this.setState({
          msg:"Email successfully sent!"
        })
      }else{
        this.handleOpen();
        this.setState({
          msg:"Email not sent!please try again"
        })
      }
    })
  }
  
  render() {
    console.log("STATE",this.state)
    return (
       <div className={css.aboutUs}>
       <div>
        <TransitionablePortal
          closeOnTriggerClick
          onClose={this.handleClose}
          onOpen={this.handleOpen}
          transition={{duration:1000}}
          open={this.state.open}
        >
          <Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 ,height:"auto",fontSize:"16px",backgroundColor:"#161e25",color:"#ffff"}}>
            <Header style={{color:"#ffff"}}>{this.state.msg}<span onClick={this.handleClose}style={{marginLeft:"20px"}}>X</span></Header>
          </Segment>
        </TransitionablePortal>
        </div>
        <div>
          <h2>C O N T A C T  &nbsp;<span> U S</span></h2>
          <p style={{ textAlign: 'center' }}>We'd love to hear your feedback.</p>
          <div style={{ textAlign: 'center', paddingTop: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>
            <span className={css.border}></span>
            <span style={{ width: '8px', height: '8px', background: '#f0d389', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
            <span className={css.border}></span>
          </div>
        </div>
        <Grid>
        <Grid.Row>
        <Grid.Column computer={6} tablet={6} mobile={15} className={style.contactColumn} >
              <div className={style.contact}>
              <div className={style.contactDiv}>
                <span>CALL US</span><br/>
                <span>064 5555 5555</span>
              </div>
             <Icon name='call square' size='big' className={css.iconWhite} />
              </div>
              <div className={style.contact}>
              <div className={style.contactDiv}>
                <span>ADDRESS</span><br/>
                <span>Mladena Mitrica 2A, Belgrade-Serbia</span>
              </div>
              <Icon name='location arrow' size='big' className={css.iconWhite} />
              </div>
              <div className={style.contact}>
              <div className={style.contactDiv} >
                <span>SAY HELLO </span><br/>
                <span>cybeletechonologies@gmail.com</span>
              </div>
              <Icon name='mail' size='big' className={css.iconWhite} />
              </div>
            </Grid.Column>
            <Grid.Column  className={style.formDiv} computer={8} tablet={8} mobile={15} >
             {/* <div className={style.inputDiv}> */}
               <Input name="name" onChange={this.handleInput}  className={style.inputs} placeholder='Name' /> 
               <Input name="email" onChange={this.handleInput} className={style.inputs}placeholder='Email' /> 
               <Input name="phone" onChange={this.handleInput} className={style.inputs} placeholder='Phone' />
              {/* </div> */}
              {/* <div className={style.inputDiv}> */}
              <div className={style.inputs}>
               <Input name="subject" onChange={this.handleInput} className={style.subjectInput} placeholder='Subject' /> 
              </div>
              {/* </div> */}
              <div className={style.inputs}>
              <TextArea name="text" onChange={this.handleInput} rows={10} placeholder='Message' />
              </div>
              <div>
               <Button onClick={this.sendMail} className={style.sendButton} inverted>Send</Button>
              </div>
              </Grid.Column>
            </Grid.Row>
        </Grid>
      </div>
    )
  }
}
export default Contact;