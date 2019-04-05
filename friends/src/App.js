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
//  axios gets data from server 
  componentDidMount(){
     axios
       .get('http://localhost:5000/friends') // server
       .then( res => {this.setState({friends: res.data})}) // set state on friends 
       .catch(err => console.log(err)); // if error return msg in console
  }
   
  updateFriends = newFriends => { // updates friends state once info is passed to it 
    this.setState({ friends: newFriends});
  };


  render() {
    return (
     <div>
        <Route path='/' component={Nav}/>
        <Route path='/add' exact render={props => <NewFriendInput {...props } friends={this.state.friends}  updateFriends={this.updateFriends}/>}/>
        <Route path='/' exact render={props => <FriendsList {...props} friends={this.state.friends} updateFriends={this.updateFriends}/>}/>
        
     </div>
    );
  }
}

export default App;
