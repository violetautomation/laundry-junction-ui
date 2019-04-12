import React from 'react';
import { Redirect } from 'react-router-dom';

class UserWorkArea extends React.Component{

  isUserLoggedIn() {
    return true;
  }

  render(){
    if(this.isUserLoggedIn()){
      return(<div>Lets start taking orders</div>);
    }else{
      return(<Redirect to='/' />);
    }
  }
}

export default UserWorkArea;