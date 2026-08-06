/*create a form to name, email,phone password 
 have a submit button that console log the value when form is submitted
 after the form have a list to showcase the state changes as user is typing for each
 for all the input fields use only.
    1.state variable
    example[input, setinput]= usestate(< object: hint>)>> it stores other data types
 */

import { useState } from "react";

function App() {
  // 1. SINGLE STATE VARIABLE (Object)
  // Stores all 4 fields in one object as requested
  const [input, setInput] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  // Handle typing for all inputs using one shared function
  const handleChange = (e) => {
    // Get the field name and typed value from the input element
    const { name, value } = e.target;

    // Update the single object state
    setInput((prevState) => ({
      ...prevState,      // Copy existing data (so we don't lose email/phone/etc.). Spread operator
      [name]: value      // Update ONLY the field that just changed
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Stop the page from refreshing
    console.log('Form Submitted:', input); // Log the full object to console
  };

  return (
    <div>
      {/* --- THE FORM --- */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input 
            type="text" 
            name="name" 
            value={input.name} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>Email: </label>
          <input 
            type="email" 
            name="email" 
            value={input.email} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>Phone: </label>
          <input 
            type="tel" 
            name="phone" 
            value={input.phone} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>Password: </label>
          <input 
            type="password" 
            name="password" 
            value={input.password} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {/* --- THE LIVE STATE LIST --- */}
      {/* Updates instantly because it reads directly from the 'input' state */}
      <div>
        <h4>Live State Preview:</h4>
        <ul>
          <li><strong>Name:</strong> {input.name || ''}</li>
          <li><strong>Email:</strong> {input.email || ''}</li>
          <li><strong>Phone:</strong> {input.phone || ''}</li>
          <li><strong>Password:</strong> {'*'.repeat(input.password.length) || ''}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;