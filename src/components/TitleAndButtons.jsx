import { useState } from "react";

function Title () {
    let [count, setCount] = useState(0);

    const reduceTemperature = () => {
        setCount(count - 1);
    };

    const increaseTemperature = () => {
        setCount(count  + 1);
    };

    return (
        <div className="contentSection">
<h1 className={`title ${count < 0 ? 'blue' : 'red'} ${count === 0 ? 'wow' : ''}`}>{count} C</h1>
            <div className="buttonSection">
                <button className="btn blue" id="reduceValue" onClick={reduceTemperature}>-</button>
                <button className="btn red" id="increaseValue" onClick={increaseTemperature}>+</button>
            </div>
        </div>
    )
};

export default Title