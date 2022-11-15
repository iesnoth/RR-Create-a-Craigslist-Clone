import React from 'react'
import Post from './Post'
const craigPost = require('./postings')
function Gallery() {
    return(
        <div>
            {
                craigPost.postings.map((data, i) => {
                    return <Post data={data} key={i}/>
                })
            }
        </div>
    )
}

export default Gallery