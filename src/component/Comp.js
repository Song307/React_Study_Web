import { useRef, useState } from 'react';
import '../App.css';

function Comp(){
    const [text, setText] = useState("");
    const textRef = useRef();

    const handleChange=(e)=>{
        setText(e.target.value);
    }
    const handleOnClick=()=>{
        if (text.length<5){
            textRef.current.focus();
        }else {
            alert(text);
            setText("");
        }
    }

    return(
        <div className='bodyCss'>
            <h1>Comp.js</h1>
            <input ref={textRef} value={text} onChange={handleChange}/>
            <button onClick={handleOnClick}>작성 완료</button>
        </div>
    )
}

export default Comp;