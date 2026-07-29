/*
top navigation of the page
import name from a relative path 
ensure before you import its in the src directory
*/

import logo from './assets/amazon-logo.png';

function Navigation(){
    return(
        <div>
            <img src={logo} width='70px'/>
            <h2>Navigation section</h2>
        </div>
    );
}

export default Navigation;