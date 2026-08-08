/*
1. move the color and set color state inside the colorForm
2. add a button on single color to remove the color. <remove color>
hint: [perform a state update]
*/
import { useState } from "react";

// PARENT COMPONENT: ColorsCircles
// This component manages the list of colors and passes state down to children
function ColorsCircles() {
    // State: Array of colors (shared between ColorForm and ColorList)
    const [colors, setColors] = useState(['yellow', 'blue', 'red']);
    
    // State: Radius (not used yet, but available for future features)
    const [radius, setRadius] = useState('');

    console.log('colors circle render', new Date());
    
    return (
        <div>
            {/* Pass setColors and colors to ColorForm so it can add new colors */}
            <ColorForm setColors={setColors} colors={colors} />
            
            {/* Pass colors and setColors to ColorList so it can display and remove colors */}
            <ColorList colors={colors} setColors={setColors} />
        </div>
    );
}
// CHILD COMPONENT: ColorForm

// This component handles user input and adds new colors to the list
function ColorForm(props) {
    // Destructure props to get the functions from parent
    const { setColors, colors } = props;
    
    // Local state for the input field (moved from parent as per requirement 1)
    const [color, setColor] = useState(''); 
    
    // Log when this component renders (for debugging)
    console.log('colorForm render', new Date());

    // Handle form submission - adds the color to the list
    const onSubmit = () => {
        // Validation: Don't add empty or whitespace-only colors
        if (color.trim() === '') {
            alert('Please enter a color');
            return; // Exit the function
        }
        
        // USING FOR LOOP TO ADD A COLOR
        // Step 1: Create an empty array to hold the new list
        const clonedColors = [];
        
        // Step 2: Loop through all existing colors and copy them
        for (let i = 0; i < colors.length; i++) {
            clonedColors.push(colors[i]); // Copy each color
        }
        // After loop: clonedColors = ['yellow', 'blue', 'red']
        
        // Step 3: Add the new color to the end
        clonedColors.push(color);
        // Now: clonedColors = ['yellow', 'blue', 'red', 'green']
        
        // Step 4: Update the parent's state with the new array
        setColors(clonedColors);
        
        // Step 5: Clear the input field for the next entry
        setColor(''); 
    };

    return (
        <div>
            {/* Label for the input field */}
            <label>Enter color</label>
            
            {/* 
                Controlled input component:
                - value: controlled by React state
                - onChange: updates state on every keystroke
            */}
            <input 
                value={color} 
                onChange={(e) => setColor(e.target.value)} 
            />
            
            {/* Button to submit the color - calls onSubmit function */}
            <button onClick={onSubmit}>Save</button>
        </div>
    );
}
// CHILD COMPONENT: ColorList
// This component displays all colors and handles removal
function ColorList(props) {
    // Destructure props to get the colors array and setter function
    const { colors, setColors } = props;
    
    // Log when this component renders (for debugging)
    console.log('ColorList render ', new Date());

    // REMOVE COLOR FUNCTION (Requirement 2)
    // This function removes a color at a specific index
    const removeColor = (index) => {
        // Log which color is being removed (for debugging)
        console.log('remove color', colors[index], 'index is ', index);
        
        // USING FOR LOOP TO REMOVE A COLOR
        // Step 1: Create an empty array for the new list
        const newArray = [];
        
        // Step 2: Loop through all colors
        for (let i = 0; i < colors.length; i++) {
            // Step 3: Check if this is the index to remove
            if (i === index) {
                // If it's the one to remove, skip it (do nothing)
                continue; // Skip this iteration
            } else {
                // Otherwise, add this color to the new array
                newArray.push(colors[i]);
            }
        }
        // After loop: newArray contains all colors EXCEPT the removed one
        
        // Step 4: Update the parent's state with the new array
        setColors(newArray);
    };

    // USING FOR LOOP TO RENDER THE LIST
    // Step 1: Create an empty array to hold all the JSX elements
    const colorElements = [];
    
    // Step 2: Loop through all colors
    for (let i = 0; i < colors.length; i++) {
        // Get the current color from the array
        const color = colors[i];
        
        // Step 3: Create a JSX element for each color
        colorElements.push(
            <div
                key={i} // React needs a unique key for each element in a list
                style={{ 
                    margin: '10px', // Space between items
                    width: '150px', // Fixed width
                    height: '40px', // Fixed height
                    backgroundColor: color, // Dynamic background color
                    color: 'white', // Text color
                    padding: '10px', // Inner spacing
                    display: 'flex', // Flexbox for layout
                    alignItems: 'center', // Vertically center content
                    justifyContent: 'space-between', // Space between text and button
                    borderRadius: '4px' // Rounded corners
                }}
            >
                {/* Display the color name */}
                <span>{color}</span>
                
                {/* 
                    Remove button - calls removeColor with the current index
                    This is the "remove color" button (Requirement 2)
                */}
                <button 
                    onClick={() => removeColor(i)}
                    style={{
                        backgroundColor: 'rgba(255,255,255,0.3)', // Semi-transparent white
                        border: 'none', // No border
                        color: 'white', // White text
                        cursor: 'pointer', // Pointer cursor on hover
                        padding: '4px 8px', // Inner spacing
                        borderRadius: '3px' // Slightly rounded corners
                    }}
                >
                    Remove {/* Button text */}
                </button>
            </div>
        );
    }
    // After loop: colorElements = [<div>yellow</div>, <div>blue</div>, <div>red</div>]

    return (
        <div style={{ marginTop: '30px' }}> 
            {/* Render all the color elements built by the for loop */}
            {colorElements}
        </div>
    );
}

export default ColorsCircles;