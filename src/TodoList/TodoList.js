import { useState } from 'react';
import './App1.css';
import TodoItem from './TodoItem';

function TodoList({todo, onUpdate, onDelete}){
    /////////검색 입력내용 처리 기능//////////
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    //////////검색후 필터링//////////////
    const getSearchResult =() => {
        return search === "" ? todo : todo.filter((it)=>it.content.toLowerCase().includes(search));
    }

    return(
        <div className='TodoList'>
            <hr/>
            <h4>Todo List 📱</h4>
            <input className='searchbar' value={search} onChange={onChangeSearch} placeholder="검색어 입력"/>
            <div className='list_wrapper'>
                {getSearchResult().map((it)=> <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete}/>)}
            </div>
        </div>
    )
}

export default TodoList;