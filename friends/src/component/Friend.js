import React from 'react';
import axios from 'axios'
import styled from 'styled-components'


const Span = styled.span`
.remove-friend {
font-size: 1.15em;
border: none;
outline: none;
visibility: hidden;
color: #EF5350;
cursor: pointer;
margin: 0 10px 0 0;
padding: 0;
background: none;
}
div:hover .remove-friend {
    visibility: visible;
  }
`

const Friend = ({ name, age, email, id, updateFriends, history }) => {

    const deleteItem = () => {
        console.log("Item is being deleted");
        axios
            .delete(`http://localhost:5000/friends/${id}`)
            .then(response => {
                updateFriends(response.data);
                history.push("/friends");
            })
            .catch(err => console.log(err));
    };

    return (
        <Span>
            <div>
                <span className='remove-friend' onClick={deleteItem}>X</span>
                <ul>
                    <li>{name}</li>
                    <li>{age}</li>
                    <li>{email}</li>
                </ul>
            </div>
        </Span>
    )
}

export default Friend;

