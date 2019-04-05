import React from 'react'
import styled from 'styled-components';




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

.pencil {
    font-size: 1.15em;
    border: none;
    outline: none;
    visibility: hidden;
    color: green;
    cursor: pointer;
    margin: 0 10px 0 0;
    padding: 0;
    background: none;
    }

div:hover .remove-friend {
    visibility: visible;
  }

  div:hover .pencil {
    visibility: visible;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
  
  .modal-main {
    position:fixed;
    background: white;
    width: 80%;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
  
  .display-block {
    display: block;
  }
  
  .display-none {
    display: none;
  }
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
`



export default Span