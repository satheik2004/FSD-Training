import React from 'react';

// import './App.css';
import Welcome from './Welcome'
// const Welcome=()=><h1 className='s'>Hello Sathwik</h1>

// function App(){
//   return(
//     <div className='App'>
//       <Welcome/>
      
//     </div>
//   )
// }

const App=()=>{
  return(
    <div style={{textAlign:'center' ,color:'grey'}}> 
   < Welcome name="Sathwik" greeting="Hello"/>
   <Welcome name="Ram" greeting="Hi"/>
   
   </div>
    
  )
  
}
export default App;