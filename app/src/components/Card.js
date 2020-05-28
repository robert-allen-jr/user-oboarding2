import React from 'react'

export default function Card(props) {
    return (
        <div>
            <h1>{props.users.firstName}</h1> 
            <p>{props.users.email}</p>
            <p>{props.users.password}</p>
        </div>
    )
}
