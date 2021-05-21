import React from 'react'
import {Link} from 'react-router-dom'

const Undifined = () =>{
    return (
        <div>
        <center><h1>something wrong, no question with that ID</h1></center>
        <br/>
        <br/>
        <p>
            you may entered wrong question id
        </p>
        <Link to='/'>Return to home</Link>
        </div>

    )
}

export default Undifined