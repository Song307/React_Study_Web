import { useState } from 'react';
import './TestComp.css';
import ChildComp3Item from './ChildComp3Item';

function ChildComp({age}){
    return(
    <div className='childComp'>
        <h2>Child Component</h2>
        <p>age : {age} </p>
        </div>
        )
}

function ChildComp2({tex}){
    return(
        <div className='childComp'>
            <h2>Child Component2</h2>
            <p>tex : {tex}</p>
        </div>
    )
}

function ChildComp3({onCreate}){
    const [state, setState] = useState({
        id : "",
        name : "",
        age : "",
    })
    const onChangeState =(e)=>{
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }
    
    const onSubmit =() =>{
        onCreate({...state});
    }
    return(
        <div className='childComp'>
            <h2>Child Component3</h2>
            <p> 새로운 List 작성 <hr/>
            id: <input name='id' value={state.id} onChange={onChangeState} placeholder='Enter your ID'/><br/>
            name : <input name='name' value={state.name} onChange={onChangeState} placeholder='Enter your Name'/><br/>
            age :  <input name='age' value={state.age} onChange={onChangeState} placeholder='Enter your Age'/><br/>
            <button onClick={onSubmit}>ADD</button><hr/>
            <div className='list_wrapper'>
            {/* {state.map((it)=> (
                <ChildComp3Item {...it}/>
            ))} */}
            </div>  
                
            </p>
        </div>
    )
}

function Testcomp(){
    ///////////childComp//////////////
    const [age, setAge] = useState("");
    const onChangeAge = (e) =>{
        setAge(e.target.value);
    }
    ///////////childComp2///////////////
    const [value, setValue] = useState("");
    const onChangeValue = (e) => {
        setValue(e.target.value);
    }
    //////////childComp3////////////////
    const [state, setState] = useState({
        id : "",
        name : "",
        age : "",
    })


    const onCreate = (id, name, age) =>{
        const newItem = {
            id,
            name,
            age,
        };
        setState([newItem, ...state])
    }
    
    const array1 = [1,2,3,4,5];
    const array2 = [...array1, 4, 5];
    function viewArray(array){
        console.log(array);
    }
    return(
        <div className='Exam1'>
            <h1>Parent Comp</h1>
            age : <input value={age} onChange={onChangeAge} placeholder='age'></input>
            <ChildComp age={age}/>
            <hr/>
            
            tex : <input value={value} onChange={onChangeValue} placeholder='tex'></input>
            <ChildComp2 tex={value}/>
            <button onClick={()=> viewArray(array1)}>Log Array1</button>
            <button onClick={function(){viewArray(array2)}}>Log Array2</button>
            <hr/>

            <ChildComp3 onCreate={onCreate}/>
            
        </div> 
    )
}

export default Testcomp;
