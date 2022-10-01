import { useState } from 'react';
import { Link } from 'react-router-dom';
import Question from '../Question/Question';
import DSQuestions from '../../Data/DetailedQuestionData';
import LeftBarItem from '../LeftBarItem/LeftBarItem';
import styles from './leftbar.module.css'
import FocQuestions from '../../Data/FocQuestionData';
import PythonQuestions from '../../Data/PythonQuestionData';

function LeftBar(props) {
    const [tag, setTag] = useState(null);
    const [dsquestions, setDSQuestions] = useState(DSQuestions);
    const [focquestions, setFOCQuestions] = useState(FocQuestions);
    const [pythonquestion, setPYTHONQuestions] = useState(PythonQuestions);
    var hasRendered = false;


    const addTag = (newTag) => {
        setTag(newTag);
        if (props.name === "Data Structures") {
            let temp = DSQuestions.filter(item => item.PreReq.includes(newTag.replace(/\s+/g, '')));
            setDSQuestions(temp);
        }
        setTag(newTag);
        if (props.name === "Python Laboratory") {
            let temp = PythonQuestions.filter(item => item.PreReq.includes(newTag.replace(/\s+/g, '')));
            setPYTHONQuestions(temp);
        }
        else {
            let temp = FocQuestions.filter(item => item.PreReq.includes(newTag.replace(/\s+/g, '')));
            setFOCQuestions(temp);
        }
    }

    const removeTag = () => {
        setTag(null);
        if (props.name === "Data Structures")
            setDSQuestions(DSQuestions);
        else if (props.name === "Python Laboratory")
            setPYTHONQuestions(PythonQuestions);
        else
            setFOCQuestions(FocQuestions);
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <strong>{props.name}</strong>
                <div className={styles.filterContainer}>
                    {props.arr.map((title) => (
                        <LeftBarItem key={title} name={title} tag={tag} addTag={addTag} removeTag={removeTag} />
                    ))}
                </div>
            </div>
            {
                (props.name === 'Data Structures') &&
                (hasRendered = true) &&
                <div>
                    <div className={styles.qContainer}>
                        {tag && <div className={styles.dsPage}>
                            <Link to={`/datastructure/${tag.replace(/\s+/g, '')}`} style={{ all: 'unset' }}>
                                <h2>Learn about {tag} &#8921;</h2>
                            </Link>
                        </div>}
                        {(tag === 'Tree' || tag === 'Graph') && <div className={styles.graph}>
                            <a href="https://graph-visualizer-labxrit.herokuapp.com" target="_blank" rel="noreferrer">
                                <h2>&#8920; {tag} Visualizer &#8921;</h2>
                            </a>
                        </div>}
                        {dsquestions.map((question) => (
                            <Link to={`/dslab/question/${question.id}`} style={{ all: 'unset' }} key={question.id}>
                                <Question
                                    id={question.id}
                                    question={question.value}
                                />
                            </Link>
                        ))
                        }
                    </div>
                </div>
            }
            {
                (props.name === 'Python Laboratory') &&
                (hasRendered = true) &&
                <div>
                    <div className={styles.qContainer}>
                        {tag && <div className={styles.dsPage}>
                            <Link to={`/pythonlab/${tag.replace(/\s+/g, '')}`} style={{ all: 'unset' }}>
                                <h2>Learn about {tag} &#8921;</h2>
                            </Link>
                        </div>}
                        {/* {{(tag === 'Tree' || tag === 'Graph') && <div className={styles.graph}>
                    <a href="https://graph-visualizer-labxrit.herokuapp.com" target="_blank" rel="noreferrer">
                        <h2>&#8920; {tag} Visualizer &#8921;</h2>
                    </a>
            </div>}} */}
                        {pythonquestion.map((question) => (
                            <Link to={`/pythonlab/question/${question.id}`} style={{ all: 'unset' }} key={question.id}>
                                <Question
                                    id={question.id}
                                    question={question.value}
                                />
                            </Link>
                        ))
                        }
                    </div>
                </div>
            }
            {
                (hasRendered === false) &&
                <div>
                    <div className={styles.qContainer}>
                        {tag && <div className={styles.dsPage}>
                            <Link to={`/foclab/${tag.replace(/\s+/g, '')}`} style={{ all: 'unset' }}>
                                <h2>Learn about {tag} &#8921;</h2>
                            </Link>
                        </div>}
                        {focquestions.map((question) => (
                            <Link to={`/foclab/question/${question.id}`} style={{ all: 'unset' }} key={question.id}>
                                <Question
                                    id={question.id}
                                    question={question.value}
                                />
                            </Link>
                        ))
                        }
                    </div>
                </div>
            }
        </div>

    );
}

export default LeftBar;