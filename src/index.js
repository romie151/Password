import React from 'react';
import { render } from 'react-dom';

class PasswordChecker extends React.Component {
  constructor () {
    super();
    this.state = {
      password1: "",
      password2: "",
      samepassword: true
    }
  }

  handlepassword = (e) => {
    if (e.target.id === 'password1') {
      this.setState({ password1: e.target.value })
      // console.log('state: ' + this.state.password1)
      // console.log('e.target.value: ' + e.target.value)
      if (e.target.value === this.state.password2) {
        this.setState({
          samepassword: 'the same'
        })
      } else {
        this.setState({ 
          samepassword: 'not the same' 
        })
      }
    } else if (e.target.id === 'password2') {
      this.setState({ password2: e.target.value})
      if (e.target.value === this.state.password1) {
        this.setState({
          samepassword: 'the same'
        })
      } else {
        this.setState({
          samepassword:'not the same'
        })
      }
    } 
    // this.setState({
    //   [e.target.id]: e.target.value
    // })

  }

  handleClear = () => {
    this.setState({
      password1: "",
      password2: ""
    })
  }

  render () {
    // console.log(this.state)
    const password1 = this.state.password1
    const password2 = this.state.password2
    return (
      <div>
        <p>Password 1</p>
        <input id="password1" onChange={this.handlepassword}/>
        <p>Password 2</p>
        <input id="password2" onChange={this.handlepassword}/>
        <br></br>
        <button onClick={this.handleClear} >Clear</button>
        <p>These passwords are {this.state.samepassword}</p>
      </div>
    )
  }

}


render(
  <PasswordChecker />, 
  document.getElementById('root')
);
