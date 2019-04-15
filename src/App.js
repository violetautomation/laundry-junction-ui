import React from 'react';
import Logon from './component/Logon';
import AppHeader from './component/AppHeader';
import UserWorkArea from './component/UserWorkArea'
import './App.css'
import {Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className='appHeader'>
          <AppHeader />
        </div>
        <div>
          <Route exact path='/' component={Logon}  />
          <Route exact path='/userWorkArea' component={UserWorkArea} />
        </div>
      </div>
    );
  }
}

export default App;
