import React,{memo} from 'react';
const Child2=({increment})=>{
    console.log('Child2 Rendered');
    return(
        <div>
            <button onClick={increment}>Increment</button>
            
        </div>
    )
}

export default memo(Child2);