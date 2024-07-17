import './Exam.css';

function QuizItem(){
    return(
        <div className='QuizItem'>
            <div className=''>
                <fieldset>
                <div>문제</div> <hr/>
                <div>보기1</div>
                <div>보기2</div>
                <div>보기3</div>
                <div>보기4</div> <hr/>
                <div>정답</div>
                </fieldset>
            </div>
        </div>
    )
}

export default QuizItem;