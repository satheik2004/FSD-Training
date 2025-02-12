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

import React from 'react';
import Child1 from './Child1';
import Child2 from './Child2';


const Parent=()=>{
  const [count,setCount]=React.useState(0);
  
  const increment = () => setCount(count + 1);

  return(
    <div>
      <h1>Count:{count}</h1>
     
      <Child1/>
      <Child2 count={count} increment={increment}/>
    </div>
  )
}
export default Parent;