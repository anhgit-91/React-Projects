import React, {useState} from 'react';

const ColorPicker = () => {
    // Logic start here
    const [color, setColor] = useState("red")
    return (
        <div style={{marginTop: '30px'}}>
            <select value = {color} onChange={(e) => setColor(e.target.value)}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
            <div style={{ marginTop: '30px' ,width: '200px', height: '200px', color: color }}>Selected color box</div>
        </div>
    );
};

export default ColorPicker