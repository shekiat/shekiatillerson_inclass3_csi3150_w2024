import React, { useState } from 'react';
import './Counter.css';

// function that returns a counter component
function Counter() {
    // sets the initial value of the count variable to 0
    const [count, setCount] = useState(0);

    return (
        <div>
            {/* displays the updated value in the counter */}
            <div className="counter-display">{count}</div>
            
            {/* buttons that increase and decrease the counter number when clicked */}
            <div className="button-container">
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>
        </div>
    );
}

export default Counter;