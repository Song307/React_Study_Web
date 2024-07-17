import './App1.css';

function TodoItem({id, content, isDone, createDate, onUpdate, onDelete}){
    const onChangeCheckbox = () => { //338
        onUpdate(id);
    }

    const onClickDelete =() =>{
        onDelete(id);
    }

    return(
        <div className='TodoItem'>
            <div className='checkbox_col' onChange={onChangeCheckbox}> <input type='checkbox' checked={isDone}/> </div>
            <div className='title_col'>{content}</div>
            <div className='data_col'>{new Date().toLocaleDateString()}</div>
            <button onClick={onClickDelete}k className='btn_col'>삭제</button>
        </div>
    )
}

export default TodoItem;