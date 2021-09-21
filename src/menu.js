import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pic from './img/gab.jpg';








function Menu(){
	return(
        <React.Fragment>
		 <div className = "Menu">
           
           <img src={pic} className="MenuBg"/>
            
         

           <a href = "#" className="a1">Home </a> 
            <a href = "#" className="a2">About </a>
            <a href = "#" className="a3">Service & Package </a>
            <a href = "#" className="a4">Gallery </a>
            <a href = "#" className="a5">Package </a>
            <a href = "#" className="a6">FAQ </a>
            <a href = "#" className="a7"> Contact </a>

           


        
          <p className="heading"> A picture is worth a thousand words </p>
          <span className="para"> It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos. </span>

          <div className="Arrow1">
           <FontAwesomeIcon icon="arrow-left"  size="2x" />
           </div>

           <div className="Arrow2">
           <FontAwesomeIcon icon="arrow-right"  size="2x" />
           </div>


           <button className="button">View Gallery </button>
           
         </div>




         
        
         
          

           


	

    


    </React.Fragment>
	);
}

export default Menu;