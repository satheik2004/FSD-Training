import React from 'react';

const RemoveFruitList=()=>{
    let i=prompt("Enter the index of the fruit to be removed");
    const fruits=['Apple','Banana','Mango','Orange','Grapes'];
    fruits.splice(i,1);
    return(
        <div>
            <h1>Fruits List</h1>
            <ul>
                {fruits.map((fruit,index)=><li key={index}>{fruit}</li>)}
            </ul>
        </div>
    )

}
export default RemoveFruitList;