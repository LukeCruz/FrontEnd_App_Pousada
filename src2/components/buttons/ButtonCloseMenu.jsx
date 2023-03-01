import React from 'react';


export default function ButtonCloseMenu(){
    return(
        <button 
          onClick="closeMenu()" 
          className="closeButton" 
          id="closeMenu">
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M30 10L10 30M10 10L30 30" 
          stroke="" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"/>
       </svg>  
       </button>
      );
   };