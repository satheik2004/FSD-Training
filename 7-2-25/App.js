import React from 'react';

import RemoveFruitList from './listremove';

// import Wish from './Wish'

// import './App.css';
// import Welcome from './Welcome'
// const Welcome=()=><h1 className='s'>Hello Sathwik</h1>

// function App(){
//   return(
//     <div className='App'>
//       <Welcome/>
      
//     </div>
//   )
// }

////Conditional Resndering

// const App=()=>{
//   return(
//     <div style={{textAlign:'center' ,color:'grey'}}> 
//    < Welcome name="Sathwik" greeting="Hello"/>
//    <Welcome name="Ram" greeting="Hi"/>
   
//    </div>
    
//   )
  
// }
// export default App;

////conditional rendering
// function App(){
//   const isLoggedIn=false;
//   return(
//     <div className='App'>
//       <Wish isLoggedIn={isLoggedIn}/>
//     </div>
    
//   )
// }
// export default App;

function App(){
  return(
    <div className='App'>
      <RemoveFruitList/>
    </div>
    
  )
}
export default App;