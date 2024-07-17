import './App1.css';
import Header from './Header';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';
import { useRef, useState } from 'react';

const mockTodo =[
    {
        id : 0,
        isDone: false,
        content : "React 공부하기",
        createDate: new Date().getTime(),
    },
    {
        id : 1,
        isDone: false,
        content : "Database 공부하기",
        createDate: new Date().getTime(),
    },
    {
        id : 2,
        isDone: false,
        content : "Java 공부하기",
        createDate: new Date().getTime(),
    }
]

function App1(){
    const [todo, setTodo] = useState(mockTodo);
    const idRef = useRef(3);
    const onCreate = (content) => {
        const newItem ={
            id : idRef.current,
            content,
            isDone : false,
        }
        setTodo([newItem, ...todo]);
        idRef.current += 1;
    }

    /////////update/////////////////
    const onUpdate = (targetId) => {
        setTodo(todo.map((it)=> it.id === targetId ? {...it, isDone : !it.isDone } : it ))
    }

    ////////delete////////////
    const onDelete = (targetId) => {
        setTodo(todo.filter((it)=> it.id !== targetId));
    }
    return(
        <div className='App1'>
            <Header/>
            <TodoEditor onCreate={onCreate}/>
            <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
        </div>
    )

}

export default App1;