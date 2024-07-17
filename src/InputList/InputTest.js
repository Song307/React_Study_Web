import { useRef, useState } from "react";
import InputEditor from "./InputEdiotr";
import InputList from "./InputList";
import "./InputTest.css";

const gap = [
    {id:1, name:"Song", age:23, gender : "Male"}, 
    {id:2, name:"Kim", age:21, gender : "FeMale"}, 
    {id:3, name:"Kang", age:22, gender : "Male"}
];

function InputTest(){
    const idRef = useRef(4);
    const [user, setUser] = useState(gap);
    const onCreate = (name, age, gender) => {
        const newItem ={
            id:idRef.current, name, age, gender,
        }
        setUser([newItem, ...user]);
        idRef.current += 1;
    }

    const onDelete = (targetId) => {
        setUser(user.filter((u)=> u.id !== targetId));
    }

    return(
        <div className="InputTest">
            <h1>InputTest.js</h1>
            <InputEditor onCreate={onCreate} />
            <InputList user={user} onDelete={onDelete}/>
            <center></center>
        </div>
    )
}

export default InputTest;
