import "./InputTest.css";
import InputItem from "./InputItem";
function InputList({user, onDelete}){

    return(
        <div className="InputList">
            <h1>InputList.js</h1>
                <div className="Col">
                <div className="id">ID</div>
                <div className="name">Name</div>
                <div className="age">Age</div>
                <div className="gender">Gender</div>
            </div>
            {user.map((g)=> (<InputItem {...g} onDelete={onDelete} />)   )}
        </div>
    )
}

export default InputList;