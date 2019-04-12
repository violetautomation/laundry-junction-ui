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

  render(){
    return (
        <table align="center">
            <input type="text" defaultValue="username"/><br/>
            <input type="text" defaultValue="password"/><br/>
            <button className='button'>Logon</button>
        </table>
    );
  }
}

export default Logon;