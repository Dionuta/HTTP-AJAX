import React from 'react';
import axios from 'axios';

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

    handleSubmit = () => {

        axios
            .post('http://localhost:5000/friends', {
                name: this.state.name,
                age: this.state.age, 
                email: this.state.email,
                id: Date.now(),
            })
            .then(res => {
                console.log(res);
                console.log(res.data)
            })
            .catch(err=> {console.log(err)})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                <input type='text' name='name' onChange={this.handleChange} value={this.state.name} />
                </label>
                <label>
                    Email:
                <input type='email' name='email' onChange={this.handleChange} value={this.state.email} />
                </label>
                <label>
                    Age:
                <input type='number' name='age' onChange={this.handleChange} value={this.state.age} />
                </label>
                <button type='submit'> Submit </button>
            </form>
        )
    }
}

