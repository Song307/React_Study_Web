import { useRef, useState } from "react";
import "./InputTest.css";

function InputEditor({onCreate}){
    const [name, setName] = useState("");
    const onChangeName =(e)=> { setName(e.target.value); }
    const [age, setAge] = useState("");
    const onChangeAge =(e)=> { setAge(e.target.value); }
    const [gender, setGender] = useState("");
    const onChangeGender =(e)=> { setGender(e.target.value); }

    const inputRef = useRef();
    const onSubmit =() => {
        if(!name || !age || !gender) {
            inputRef.current.focus();
            return;
        }
        onCreate(name, age, gender);
        setName("");
        setAge("");
        setGender("");
    }
    // const onKeyDown =(e)=>{
    //     if(e.keyCode === 13) { onSubmit();}
    // }

    return(
        <div className="InputEditor">
            <h1>InputEditor.js</h1>
            <h4>Membership registration<hr/></h4> 
            <div className="InputEditor_input">
                
                
                
                NAME <input ref={inputRef} value={name} onChange={onChangeName} placeholder="Enter Your Name!"/><br/>
                AGE <input value={age} onChange={onChangeAge} placeholder="Enter Your Age!"/><br/>
                <select name="gender" value={gender} onChange={onChangeGender}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="FeMale">FeMale</option>
                </select>
                <button onClick={onSubmit}>+</button>
            </div>
        </div>
    )
}

export default InputEditor;