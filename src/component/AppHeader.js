import React from 'react';
import './AppHeader.css';
import logo from './logo.svg';

class AppHeader extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
        userDisplayName: ''
      };
    }

    render(){
      return (
          <div className='navBar'>
            <div className='logo'>
              <img src={logo} className='logo' alt='logo' />
            </div>
            <div className='userProfile'>
              {this.state.userDisplayName.length > 0 ? 'Welcome '+this.state.userDisplayName : ''}
            </div>
          </div>
      );
    }
}

export default AppHeader;