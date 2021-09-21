import logo from './logo.svg';
import './App.css';
import Menu from './menu';
import About from './About';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
library.add(faArrowLeft,faArrowRight);




function App(){

return(
   <div>
   
   
   < Menu /> 

   <About />
   
   </div>
  

   );

}


export default App;