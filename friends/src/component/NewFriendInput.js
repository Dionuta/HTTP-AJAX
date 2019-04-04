import React from 'react';

import axios from 'axios';
import styled from 'styled-components';

const Input = styled.div`
   form {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
     buttom{
        width: 15rem;
     }
    label{
        display: flex;
        flex-direction: column;  
    }
   }

`;




export default class NewFriendInput extends React.Component {

    state = {
        name: '',
        email: '',
        age: '',
        id: ''
    }

    handleChange = e => {
        this.setState({
             [e.target.name]: e.target.value
          }
         )}

    handleSubmit = (e) => {
       e.preventDefault();
        axios
            .post('http://localhost:5000/friends', {
                name: this.state.name,
                age: this.state.age, 
                email: this.state.email,
                id: Date.now(),
            })
            .then(res => {
                this.props.history.push("/friends");
                this.props.updateFriends(res.data);
                console.log(res);
                console.log(res.data)
            })
            .catch(err=> {console.log(err)})
    }

    render() {
        return (
            <Input>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <span>Name:</span>
                <input type='text' name='name' onChange={this.handleChange} value={this.state.name} />
                </label>
                <label>
                  <span>Email:</span>
                <input type='email' name='email' onChange={this.handleChange} value={this.state.email} />
                </label>
                <label>
                   <span> Age:</span>
                <input type='number' name='age' onChange={this.handleChange} value={this.state.age} />
                </label>
                <button type='submit'> Submit </button>
            </form>
            </Input>
        )
    }
}

