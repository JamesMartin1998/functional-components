import React, {useState} from 'react'
import UseEffectHCounter from './UseEffectHCounter';

function UseEffectCounterContainer() {

    const [display, setDisplay] = useState(true);

    return (
        <div>
            <button onClick={() => {
                setDisplay(!display)
            }}>
                Toggle Display
            </button>
            {display && <UseEffectHCounter />}
        </div>
    )
}

export default UseEffectCounterContainer