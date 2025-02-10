// import React from 'react';

// import RemoveFruitList from './listremove';

// // import Wish from './Wish'

// // import './App.css';
// // import Welcome from './Welcome'
// // const Welcome=()=><h1 className='s'>Hello Sathwik</h1>

// // function App(){
// //   return(
// //     <div className='App'>
// //       <Welcome/>
      
// //     </div>
// //   )
// // }

// ////Conditional Resndering

// // const App=()=>{
// //   return(
// //     <div style={{textAlign:'center' ,color:'grey'}}> 
// //    < Welcome name="Sathwik" greeting="Hello"/>
// //    <Welcome name="Ram" greeting="Hi"/>
   
// //    </div>
    
// //   )
  
// // }
// // export default App;

// ////conditional rendering
// // function App(){
// //   const isLoggedIn=false;
// //   return(
// //     <div className='App'>
// //       <Wish isLoggedIn={isLoggedIn}/>
// //     </div>
    
// //   )
// // }
// // export default App;

// function App(){
//   return(
//     <div className='App'>
//       <RemoveFruitList/>
//     </div>
    
//   )
// }
// export default App;

// ////Hooks
// import React from 'react';

// import './App.css';

// //conter component
// const Counter=()=>{
//     const[count,setCount]=React.useState(0);
//     //current state=count
//     //function to update state=setCount 
//     //useState(0) is the initial state    
//     return(
//         <div className='counter'> 
//             <h1>{count}</h1>
//             <button className='inc' onClick={()=>setCount(count+1)}>Increment</button>
//             <button onClick={()=>setCount(count-1)}>Decrement</button>
//             <button onClick={()=>setCount(count*count*count)}>Multiplier</button>
//         </div>
//     )
// }
// export default Counter;

import React,{useState} from 'react'

const ThemeToggler=()=>{
    const[theme,setTheme]=useState('light')
    const toggleTheme=()=>{
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
    }
    return(
        <div style={{backgroundColor:theme==='light'?'white':'black',color:theme==="light"?"black":"white",textAlign:'center'}}>
            <h1>The Current Theme is {theme}</h1>
            <button onClick={toggleTheme}>toggleTheme</button>
        </div>
    )
    
}
export default ThemeToggler;