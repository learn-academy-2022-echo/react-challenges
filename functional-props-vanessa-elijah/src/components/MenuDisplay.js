import React from 'react'


  // pass props as a parameter on the functional component declaration
  const MenuDisplay = ( props ) => {

    // reference the props and data passed down the river on the component call through App.js 
    //  structure --> props.name of variable pass to the component 
      {props.event.map((value, index) => {
        return(
          <ul key={index}>
            <li> 
              Menu: { value.menu }  
              <p>
                <button>Price: {value.price}</button>
              </p>
            </li>
          </ul>
        )
      })}}

      
        export default MenuDisplay



//         // pass props as a parameter on the functional component declaration
//   const MenuDisplay = ( props ) => {

//     // reference the props and data passed down the river on the component call through App.js 
//     //  structure --> props.name of variable pass to the component 
//       {props.event.map((value, index) => {
//         return(
//           <ul key={index}>
//             <li> 
//               Menu: { value.menu }  
//               <p>
//                 <button>Price: {value.price}</button>
//               </p>
//             </li>
//           </ul>
//         )
//       })}}

      
//         export default MenuDisplay