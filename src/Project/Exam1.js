import './Exam.css';
import { useState } from 'react';
import QuizList from './QuizList';


function Exam1(){
    // const mockQuiz = [
    //     {
    //         id : "1",
    //         question : " 1 + 2 는 ?",
    //         sol1 : "2",
    //         sol2 : "6",
    //         sol3 : "3",
    //         sol4 : "4",
    //         anws : "3",
    //     }
    // ];
    const [quiz, setQuiz] = useState({
        id : "",
        question : "",
        sol1 : "",
        sol2 : "",
        sol3 : "",
        sol4 : "",
        anws : ""
    });

    // const idRef = useRef(1)

    // const onCreate =({question, sol1, sol2, sol3, sol4, anws}) => {
    //     const newQuiz = {
    //         id : idRef.current,
    //         question,
    //         sol1,
    //         sol2,
    //         sol3,
    //         sol4,
    //         anws,
    //     };
    //     setQuiz([newQuiz, ...quiz]);
    //     idRef.current += 1; 
    // }

    const onChangeQuiz =(e)=> {
        setQuiz(e.target.value);
    }

    // const onInputQuiz = (e) => {
    //     console.log("현재 수정 대상:", e.target.name);
    //     console.log("수정값 : ", e.target.value);
    //     setQuiz({
    //         ...quiz,
    //         [e.target.name] : e.target.value,
    //     })
    // }

    return(
        <div className="Exam1">
            <h1>Exam1</h1><hr/>
            <h3>문제 만들기</h3> 
            문제  : <input name='question' value={quiz.question} onChange={onChangeQuiz}/><br/>
            보기1 : <input name='sol1' value={quiz.sol1} onChange={onChangeQuiz}/><br/>
            보기2 : <input name='sol2' value={quiz.sol2} onChange={onChangeQuiz}/><br/>
            보기3 : <input name='sol3' value={quiz.sol3} onChange={onChangeQuiz}/><br/>
            보기4 : <input name='sol4' value={quiz.sol4} onChange={onChangeQuiz}/><br/>
            답안 : <input name='anws' value={quiz.anws} onChange={onChangeQuiz}/> <br/>
            <button>입력</button> <hr/>
            <QuizList/>

            <br/>
        </div>
    )
}

export default Exam1;