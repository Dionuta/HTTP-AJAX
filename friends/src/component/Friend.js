import React from 'react';

import axios from 'axios';
import Span from './FriendStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import Modal from './Modal'



class Friend extends React.Component {

    state = {
        show: false,
        name: '',
        email: '',
        age: '',
      
    }

    handleChange = e => {
        this.setState({
             [e.target.name]: e.target.value
          }
         )}

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    deleteItem = () => {//axios deletes selected object
        axios
            .delete(`http://localhost:5000/friends/${this.props.id}`)
            .then(response => {
                this.props.updateFriends(response.data);
                this.props.history.push("/");
            })
            .catch(err => console.log(err));
    };

    putHandler = (e) => { //axios updates selected object
        e.preventDefault();
         axios
             .put(`http://localhost:5000/friends/${this.props.id}`, {
                 name: this.state.name,
                 age: this.state.age, 
                 email: this.state.email,
             })
             .then(res => {
                 this.props.history.push("/");
                 this.props.updateFriends(res.data);
                 console.log(res);
                 console.log(res.data)
             })
             .catch(err=> {console.log(err)})
     }

    render() {
        const { name, age, email } = this.props;
        return (
            <Span>
                <div>
                    <Modal show={this.state.show} handleClose={this.hideModal}>
                        <form onSubmit={this.putHandler}>
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
                            <button type='submit' onClick={this.hideModal}> Submit </button>
                        </form>
                    </Modal>
                    <div type="button" className='pencil' onClick={this.showModal}>
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </div>
                    <span className='remove-friend' onClick={this.deleteItem}><FontAwesomeIcon icon={faTimesCircle} /></span>
                    <ul>
                        <li>{name}</li>
                        <li>{age}</li>
                        <li>{email}</li>
                    </ul>
                </div>
            </Span>
        )
    }
}

export default Friend;

