import Question from "../components/Question/Question";
import questions from "../Data/PythonQuestionData";
import { Link } from 'react-router-dom';
import Header from "../components/Header/Header";

function PythonLab(){
return(
    <div>
    <Header />
        {questions.map((question) => (
            <Link to={`/pythonlab/question/${question.id}`} style={{ all: 'unset' }} key={question.id}>
               <Question
                   id={question.id}
                   question={question.value} />
                </Link>))
       }
    </div>
);
}

export default PythonLab;