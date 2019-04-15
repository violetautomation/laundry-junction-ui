import React from 'react';
import './Logon.css';

class Logon extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onChange = e => this.setState({ [e.target.id]: e.target.value });

  onLogon = () => console.log('login with username:'
      + this.state.username +' and password: '+ this.state.password);

  render(){
    return (
            <div align="center">
            <input
                type="text"
                defaultValue="username"
                id="username"
                onChange={this.onChange}
            /><br/>
            <input
                type="password"
                defaultValue="password"
                id="password"
                onChange={this.onChange}
            /><br/>
            <button className='button'
                    onClick={this.onLogon}
                    >Logon</button>
           </div>
    );
  }
}

export default Logon;