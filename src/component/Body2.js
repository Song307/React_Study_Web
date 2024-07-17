import { useState } from 'react';
import './Body.css';

function Viewer({ number }){
    return <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>} </div>;
}
function Body2(){
    const [number, setNumber] = useState(0);
    const onIncrease =()=>{
        setNumber(number + 1);
    }
    const onDecrease =()=>{
        setNumber(number - 1);
    }
    
    return(
        <div className='bodyCss'>
            <h1>Body2.js</h1>
            <p>자식 컴포넌트로 값 전달하기</p>
            <h2>{number}</h2>
            <Viewer number={number}/>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

export default Body2;