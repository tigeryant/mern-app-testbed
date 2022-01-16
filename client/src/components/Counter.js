import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(4)

    function decrementCount() {
        setCount((prevCount) => prevCount - 1)
    }

    function incrementCount() {
        setCount((prevCount) => prevCount + 1)
    }

    return (
        <div className="counter-container">
            <h3>This is the counter component</h3>
                <div>
                    <button className="count-button" onClick={decrementCount}>-</button>
                    <p className="count">{count}</p>
                    <button className="count-button" onClick={incrementCount}>+</button>
                </div>
        </div>
    )
}

export default Counter