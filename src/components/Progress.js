import React from 'react'
import InsideProgress from './InsideProgress'


function Progress(props){

    return <div className='progress'>
    
        <InsideProgress width={props.width}/>
    </div>
}

export default Progress 