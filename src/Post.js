import React from 'react'

function Post(props) {
    return (
        <div className='posting'>
            <div>{props.data.price}</div>
            <img src={props.data.imageURL} alt={props.data.title} />
            <h3>{props.data.title}</h3>
        </div>
    )
}

export default Post