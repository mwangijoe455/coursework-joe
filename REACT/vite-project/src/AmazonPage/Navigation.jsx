/*
top navigation of the page
import name from a relative path 
ensure before you import its in the src directory
*/

import logo from './assets/amazon-logo.png';

function Navigation(){
    return(
        <div className='nav'>
            <img src={logo} width='70px'/>
            <input placeholder='Search'/>
        </div>
    );
}

export default Navigation;