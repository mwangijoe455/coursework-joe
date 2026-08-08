/*
how to pass state to other components; update state if they:
props and state
*/

import { useState } from "react";
// PARENT COMPONENT
// This component OWNS the state and passes it down to children via PROPS
function ColorsCircles() {

    const [color, setColor] = useState([]);
    const [radius, setRadius] = useState('');
    
    // colors: array that stores all saved color
    const [colors, setColors] = useState([]);
    
    // EVENT HANDLER - Updates state
    // This function is passed DOWN to children via props
    // Children can CALL this function to update the parent's state
    const onSubmit = () => {
        // Create a copy of the colors array (immutability is important)
        const clonedColors = structuredClone(colors); // Could use: [...colors]
        
        // Add the new color to the copy
        clonedColors.push(color);
        
        // Update the state with the new array
        // This triggers a re-render of this component and all children
        setColors(clonedColors);
    };

    // RENDER - Pass state DOWN to children via PROPS

    return (
        <div>
            {/* 
                CHILD 1: ColorForm
                PASSING STATE DOWN via PROPS:
                - color (state value) → child reads this
                - setColor (setter function) → child calls this to update parent state
                - onSubmit (event handler) → child calls this to trigger save
                
                This is the "props down" part of the pattern
            */}
            <ColorForm 
                color={color}           // ← passing state value
                setColor={setColor}     // ← passing state setter
                onSubmit={onSubmit}     // ← passing event handler
            />
            
            {/* 
                CHILD 2: ColorList
                PASSING STATE DOWN via PROPS:
                - colors (state value) → child reads this
                - setColors (setter function) → child can call this to update parent state
                
                Note: setColors is passed but not used in this component
            */}
            <ColorList 
                colors={colors}         // ← passing state value
                setColors={setColors}   // ← passing state setter
            />
        </div>
    );

}

// ============================================
// CHILD COMPONENT 1: ColorForm
// ============================================
// This component RECEIVES state and setters via PROPS
// It can READ state and CALL setters to update parent state
function ColorForm(props) {
    // DESTRUCTURE PROPS - extract what we need from the props object
    // These came from the parent component
    const { color, setColor, onSubmit } = props;
    // color: the current input value (read-only for this component)
    // setColor: function to update the color state in the parent
    // onSubmit: function to save the color to the list

    return(
        <div>
            <label>Enter Color</label>
            
            {/* 
                CONTROLLED INPUT
                - value={color}: controlled by parent state (reads state)
                - onChange: calls setColor to UPDATE parent state
                
                This is how child components update parent state:
                1. User types in input
                2. onChange fires
                3. setColor(e.target.value) is called
                4. This updates the parent's 'color' state
                5. Parent re-renders with new value
            */}
            <input 
                value={color}  // ← READING parent state
                onChange={(e) => setColor(e.target.value)}  // ← UPDATING parent state
            />
            
            {/* 
                SAVE BUTTON
                - onClick calls onSubmit from parent
                - This triggers the parent's save logic
                
                This is another way child updates parent state:
                1. User clicks button
                2. onSubmit() is called
                3. Parent's onSubmit function runs
                4. Parent updates 'colors' state
            */}
            <button onClick={onSubmit}>Save</button>
        </div>
    );
}

// ============================================
// CHILD COMPONENT 2: ColorList
// ============================================
// This component RECEIVES and DISPLAYS state
// It can also update state if given the setter function
function ColorList(props) {
    // DESTRUCTURE PROPS
    const { colors, setColors } = props;
    // colors: array of saved colors (read-only for this component)
    // setColors: function to update the colors array (unused here)

    return(
        <div>
            {/* 
                RENDERING A LIST
                - colors.map() loops through each color in the array
                - Creates a div for each color
                
                The key prop is missing - React needs this for efficient updates
                Always add a unique key when rendering lists
            */}
            {colors.map((color) => (
                <div 
                    style={{
                        // PROBLEM: 'marging' is a typo - should be 'margin'
                        marging: '10px', 
                        width: '100%',    // Takes full width
                        height: '30px',   // Fixed height
                        background: color // Background color = the color value
                    }}
                    // Should have: key={index} or key={color}
                ></div>
            ))}
        </div>
    );
}

export default ColorsCircles;