import './Exam.css';
import QuizItem from './QuizItem';

function QuizList(){
    return(
        <div className='QuizList'>
            <h4>QuizList 🎢</h4>
            <div className='list_wrapper'>
                <QuizItem/>
            </div>
        </div>
    )
}

export default QuizList;