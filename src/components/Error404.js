import React from 'react'
import {Link} from 'react-router-dom'

const Error404 = ()=>{
    return <div>
        somthing went wrong
        <Link to='/login'>Login here again</Link>
    </div>
}
export default Error404