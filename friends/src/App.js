import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './component/FriendsList';
import NewFriendInput from './component/NewFriendInput'
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

  render() {
    return (
     <div>
        <NewFriendInput friends={this.state.friends} />
        <FriendsList friends={this.state.friends}/>
     </div>
    );
  }
}

export default App;
