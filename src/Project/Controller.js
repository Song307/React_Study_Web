import './Counter.css';

function Controller({handleSetCount}){
    return(
        <div>
            <button onClick={()=>handleSetCount(-1)}>-1</button>
            <button onClick={() => handleSetCount(-10)}>-10</button>
            <button onClick={()=> handleSetCount(-100)}>-100</button>
            <button>+100</button>
            <button>+10</button>
            <button>+1</button>
        </div>
    )
}

export default Controller;