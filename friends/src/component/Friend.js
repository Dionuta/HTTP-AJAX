import React from 'react';




const Friend = ({name, age, email}) =>{
    return(
    <ul>
        <li>{name}</li>
        <li>{age}</li>
        <li>{email}</li>
    </ul>
    )
}

export default Friend;

