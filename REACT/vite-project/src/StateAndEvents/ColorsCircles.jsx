/*
1. move the color and set color state inside the colorForm
*/
import { useState } from "react";

function ColorsCircles() {
    const [colors, setColors] = useState(['yellow', 'blue', 'red']);
    const [radius, setRadius] = useState('');
    console.log('colors circle render', new Date());
    return (
        <div>
            <ColorForm setColors={setColors} colors={colors} />
            <ColorList colors={colors} setColors={setColors} />
        </div>
    );
}

function ColorForm(props) {
    const { setColors, colors } = props;
    const [color, setColor] = useState(''); // FIXED: [] → ()
    console.log('colorForm render', new Date()); // FIXED: added comma

    const onSubmit = () => {
        const clonedColors = [...colors]; // FIXED: was missing array
        clonedColors.push(color);
        setColors(clonedColors);
        setColor(''); // Added: clear input
    };

    return (
        <div>
            <label>Enter color</label>
            <input value={color} onChange={(e) => setColor(e.target.value)} /> {/* FIXED: (e).target → (e) => */}
            <button onClick={onSubmit}>Save</button>
        </div>
    );
}

function ColorList(props) {
    const { colors, setColors } = props;
    console.log('ColorList render ', new Date());

    const removeColor = (index) => { // FIXED: added parameter
        console.log('remove color', colors[index]);
        const updatedColors = colors.filter((_, i) => i !== index);
        setColors(updatedColors);
    };

    return (
        <div style={{ marginTop: '30px' }}> {/* FIXED: MarginTop → marginTop */}
            {colors.map((color, index) => ( // FIXED: added {} wrapper
                <div
                    key={index}
                    style={{ // FIXED: style{ → style{{
                        margin: '10px', // FIXED: marging → margin
                        width: '100px',
                        height: '30px',
                        backgroundColor: color, // FIXED: 'color' → color
                        color: 'white',
                        padding: '10px',
                    }}
                >
                    <span>{color}</span>
                    <button onClick={() => removeColor(index)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default ColorsCircles;