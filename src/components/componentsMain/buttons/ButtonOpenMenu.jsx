import React from 'react';
import { useState } from 'react';

import Menu from '../menu/Menu';

export default function ButtonOpenMenu() {

const [showElement, setShowElement] = useState(false);

const showOrHide = () => {
  setShowElement(!showElement)
}


  return(
    <div className='menuExpanded'>
      <button 
        onClick={showOrHide} 
        className="openButton" 
        id="openButton">
        <svg 
          className="menuLateral" 
          width="40" 
          height="40" 
          viewBox="0 0 40 40"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M10 20H30" 
              stroke="#080808" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="ound"/>
            <path 
                  d="M10 12H30" 
                  stroke="#080808" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"/>
                <path
                  d="M18 28L30 28" 
                  stroke="#080808" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"/>                     
            </svg>
         </button>
         {showElement ? (<Menu/>): null}
</div>
      );
   };