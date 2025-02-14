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

// import React,{useState} from 'react'

// const ThemeToggler=()=>{
//     const[theme,setTheme]=useState('light')
//     const toggleTheme=()=>{
//         setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
//     }
//     return(
//         <div style={{backgroundColor:theme==='light'?'white':'black',color:theme==="light"?"black":"white",textAlign:'center'}}>
//             <h1>The Current Theme is {theme}</h1>
//             <button onClick={toggleTheme}>toggleTheme</button>
//         </div>
//     )
    
// }
// export default ThemeToggler;

////ASSIGNMENT

// import React from "react";
// import Greeting from "./Greeting";

// function App(){
//   const isLoggedIn = prompt("Did you log in? (true or false)") === "true";
//   return(
//    <div className='App'>
//      <Greeting isLoggedIn={isLoggedIn}/>
//    </div>
//   )}
// export default App;


// ////useMemo Hook
// import React, { useState, useMemo, Children } from 'react';
// import './App.css';

// const products = [
//   { id: 1082, name: 'Laptop', category: 'Electronics' },
//   { id: 3843, name: 'Mobile', category: 'Electronics' },
//   { id: 9843, name: 'Shoes', category: 'Footwear' },
//   { id: 2398, name: 'Shirt', category: 'Clothing' },
//   { id: 9832, name: 'Watch', category: 'Accessories' }
// ];

// function ProductSearch() {
//   const [searchQuery, setSearchQuery] = useState('');

//   // Function to filter products based on search query
//   const filterProducts = (query) => {
//     return products.filter(product =>
//       product.name.toLowerCase().includes(query.toLowerCase())
//     );
//   };

//   // Use memo to filter the products
//   const filteredProducts = useMemo(() => filterProducts(searchQuery), [searchQuery]);

//   return (
//     <div className='a'>
//       <h1>Product Search</h1>
//       <input
//         type='text'
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         placeholder='Search for a product...'
        
//       />
//       <ul>
//         {filteredProducts.map(product => (
//           <li key={product.id}>{product.name} - {product.category}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ProductSearch;

// import React from 'react';
// import Child1 from './Child1';
// import Child2 from './Child2';


// const Parent=()=>{
//   const [count,setCount]=React.useState(0);
  
//   const increment = () => setCount(count + 1);

//   return(
//     <div>
//       <h1>Count:{count}</h1>
     
//       <Child1/>
//       <Child2 count={count} increment={increment}/>
//     </div>
//   )
// }
// export default Parent;

// import React from 'react';
// function App(){
//   const data="Hello World";
//   return(
//     <div>
//       <User1 data={data}/>
//     </div>
//   )
// }

// function User1({ data }){
//   return<User2 data={data}/>
// }

// function User2({ data }){
//   return<User3 data={data}/>
// }

// function User3({ data }){
//   return(
//     <h1>{data}</h1>
//   )
// }

// export default App;

////useContext

// import React,{createContext,useContext} from 'react';

// //create context to hold the data

// const DataContext=createContext()

// function App(){
//   const data="Hello World";
//   return(
//     <div>
//       <DataContext.Provider value={data}>
//         <User1/>
//       </DataContext.Provider>
//     </div>
//   )
// }

// function User1({ data }){
//   return<User2 data={data}/>
// }

// function User2({ data }){
//   return<User3 data={data}/>
// }

// function User3({ data }){
//   return(
//     <User4/>
//   )
// }

// function User4(){
//   const data=useContext(DataContext)
//   return(
//     <h1>{data}</h1>
//   )
// }  

// export default App;

// ////React Assignment on React Context

// import React from 'react';
// function App(){
//   const name="Sathwik";
//   const email="abc@email.com"
//   return(
//     <div>
//       <User1 data={name}/>
//       <User1 data={email}/>
//     </div>
//   )
// }

// function User1({ data }){
//   return<User2 data={data}/>
// }

// function User2({ data }){
//   return<Profile data={data}/>
// }

// function Profile({ data }){
//   return(
//     <h1>{data}</h1>
//   )
// }

// export default App;

//React Assignment on React Context
//with useContext


// import React,{createContext,useContext} from 'react';

// //create context to hold the data

// const DataContext=createContext()

// function App(){
//   const name="Hello World";
//   const email="abc@email.com"
//   return(
//     <div>
//       <DataContext.Provider value={(name,email)}>
//         <User1/>
//       </DataContext.Provider>
//     </div>
//   )
// }

// function User1({ name,email }){
//   return<User2 data={{name,email}}/>
// }

// function User2({ name,email }){
//   return<User3 data={{name,email}}/>
// }

// function User3(da){
//   return(
//     <User4/>
//   )
// }

// function User4(){
//   const data=useContext(DataContext)
//   return(
//     <h1>{data}</h1>
//   )
// }  

// export default App;


///////useReducer

// import React,{useReducer} from 'react';

// //reducer function to track the number of apples
// function appleReducer(state=10,action){
//   switch(action.type){
//     case 'ADD APPLE':
//       return state+1;
//     case 'REMOVE APPLE':
//       return state-1;
//     default:
//       return state;
//   }

// }

// function App(){
//   const [appleCount,dispatch]=useReducer(appleReducer,99999);
//   return(
       
//     <div style={{textAlign:'center',backgroundColor:'grey',marginTop:'200px',}}>
//       <h1>Apple Counter</h1>
//       <h2>Number of Apples:{appleCount}</h2>
//       <button style={{backgroundColor:'lightgrey',borderStyle:"dashed",borderWidth:"5px",borderRadius:123}}onClick={()=>dispatch({type:'ADD APPLE'})}>Add Apple</button>
//       <button style={{backgroundColor:'lightgrey',borderStyle:"dashed",borderCollapse:"collapse",borderWidth:"5px",borderRadius:123}}onClick={()=>dispatch({type:'REMOVE APPLE'})}>Remove Apple</button>
//     </div>
//   )
// }
// export default App;

import React,{useState} from 'react';
import Child from './Child';

const Parent=()=>{
  const[message,setMessage]=useState('Hello World');

  const changeMessage=()=>{
    setMessage('Hello Sathwik');
  }
  return(
    <div>
      <h1>{message}</h1>
      <Child changeMessage={changeMessage}/>
    </div>
  )
}
export default Parent;