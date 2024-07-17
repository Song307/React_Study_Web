import "./InputTest.css";

function InputItem({id, gender, age, name, onDelete}){
    const onClickDelete =() =>{onDelete(id)}

    return(
        <div className="InputItem">
            <div className="id">{id}</div>
            <div className="name">{name}</div>
            <div className="age">{age}</div>
            <div className="gender">{gender}</div>
            <button onClick={onClickDelete}>x</button>
        </div>
    )
}

export default InputItem;