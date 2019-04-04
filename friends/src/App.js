import React, { Component } from 'react';

import {Route} from 'react-router-dom';
import axios from 'axios';

import FriendsList from './component/FriendsList';
import NewFriendInput from './component/NewFriendInput'
import Nav from './component/Nav';


class App extends Component {
  
  state = {
    friends: []
  }

  componentDidMount(){
     axios
       .get('http://localhost:5000/friends')
       .then( res => {this.setState({friends: res.data})})
       .catch(err => console.log(err));
  }
   
  updateFriends = newFriends => {
    this.setState({ friends: newFriends});
  };


  render() {
    return (
     <div>
        <Route path='/' component={Nav}/>
        <Route path='/add' exact render={props => <NewFriendInput {...props } friends={this.state.friends}  updateFriends={this.updateFriends}/>}/>
        <Route path='/friends' render={props => <FriendsList {...props} friends={this.state.friends} updateFriends={this.updateFriends}/>}/>
        
     </div>
    );
  }
}

export default App;
