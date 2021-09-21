import React from 'react';
import './App.css';
import Photo1 from './img/offset1.jpg';




function About(){

	return(
		<React.Fragment>

		<div className="About">

        

        <img src={Photo1} className="Photo1" />
        <img src={Photo1} className="Photo2" />
        <img src={Photo1} className="Photo3" />
         

     



		 
		<span className= "header"> About Us </span>

		 


       <p className="para2">Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. 
         It helps designers plan out where the content will sit</p>
         
         </div>
</React.Fragment>
       
		);

}

export default About;