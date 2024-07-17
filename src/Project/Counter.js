import './Counter.css';
import Viewer from './Viewer';
import Controller from './Controller';
import { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    const handleSetCount =(value)=>{
        setCount(count + value);
    }
    return(
        <div className='Counter'>
            <h1>Simple Counter</h1>
            <section>
                <Viewer count={count}/>
            </section>
            <section>
                <Controller handleSetCount={handleSetCount}/>
            </section>
        </div>
    )
}

export default Counter;