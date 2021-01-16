import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../allQuestionsComponent/AllQuestionsComponent.css';
import {Link, useHistory} from 'react-router-dom';
import pdf from '../allQuestionsComponent/download.png';
import git from '../../assets/images/Icons/git.png';
import html from '../../assets/images/Icons/html5.png';
import js from '../../assets/images/Icons/js.png';
import mango from '../../assets/images/Icons/mango1.png';
import node from '../../assets/images/Icons/nodejs.png';
import react from '../../assets/images/Icons/react.png';
import sql from '../../assets/images/Icons/sql.png';

import jsPDF from 'jspdf';
import Pagination from '../../components/allQuestionsComponent/Pagination';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import RateComponent from './RateComponent';
import Footer from '../footerComponent/Footer';
import SpinnerPage from './SpinnerPage';
import rateIcon from '../allQuestionsComponent/rate.png';

const AllQuestionsComponent = () => {
  const [loading, setLoading] = useState (true);
  const [currentPage, setCurrentPage] = useState (1);
  const [questionRate, setQuestionRate] = useState (0);
  const [questionsPerPage] = useState (5);
  const [list, setList] = useState ([]);
  const [filter, setFilter] = useState ([]);
  const [modulequestions, setModulequestions] = useState ([]);
  const [input, setInput] = useState ('');
  const [qAnswers, setQAnswers] = useState ([]);
  const history = useHistory ();
  const [count, setCount] = useState (0);

  useEffect (() => {
    const fetchQuestions = async () => {
      setLoading (true);
      const res = await axios.get (
        `https://question-mark-api.herokuapp.com/allquestions`
      );

      setModulequestions (res.data.allquestions);
      setData (res.data.allquestions);
      setList (res.data.allquestions);
      setFilter (res.data.filter);
      setQAnswers (res.data.q_answers);
      setCount (res.data.count.count);
      setLoading (false);
    };
    fetchQuestions ();
  }, []);

  const changeModulequestions = questionModuleId => {
    if (questionModuleId == 'default') {
      setModulequestions (list);
    } else {
      let filtered = [];
      for (let i = 0; i < list.length; i++) {
        if (list[i].module_id == questionModuleId) {
          filtered.push (list[i]);
        }
      }
      setModulequestions (filtered);
      setCount (filtered.length);
    }
  };

  const changeHandler = event => {
    let key = event.target.value;
    switch (key) {
      case '1':
        changeModulequestions (1);
        break;
      case '2':
        changeModulequestions (2);

        break;
      case '3':
        changeModulequestions (3);

        break;
      case '4':
        changeModulequestions (4);
        break;
      case '5':
        changeModulequestions (5);

        break;
      case '6':
        changeModulequestions (6);
        break;
      case '7':
        changeModulequestions (7);
        break;
      case 'default':
        changeModulequestions ('default');
        break;
    }
  };

  const handleSearch = e => {
    e.preventDefault ();
    let key = e.target.value;
    setInput (key);
    let filtered = list.filter (question =>
      question.question.toLowerCase ().includes (key.toLowerCase ())
    );

    setModulequestions (filtered);
    setCount (filtered.length);
  };

  const jsPDFGenerator = e => {
    e.preventDefault ();
    var doc = new jsPDF ('L', 'pt');

    var i = 1;
    var j = 2;
    qAnswers.map (question => {
      doc.text (20, 30, question.question + '\n' + question.answer);
      i += 2;
      doc.addPage ('a3', 'landscape');
    });

    doc.setFont ('courier');
    doc.save ('AllQuestions');
  };

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = modulequestions.slice (
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  //change page
  const paginate = pageNumber => {
    setCurrentPage (pageNumber);
  };

  const renderSwitch = param => {
    switch (param) {
      case 1:
        return <img className="switchImg" src={git} />;
      case 2:
        return <img className="switchImg" src={html} />;
      case 3:
        return <img className="switchImg" src={js} />;
      case 4:
        return <img className="switchImg" src={react} />;
      case 5:
        return <img className="switchImg" src={node} />;
      case 6:
        return <img className="switchImg" src={sql} />;
      case 7:
        return <img className="switchImg" src={mango} />;
    }
  };
  // Sort BY dropdown menu functionality
  const [data, setData] = useState ([]);
  const [sortType, setSortType] = useState ();
  const arrayToSort = modulequestions;

  useEffect (
    () => {
      const sortArray = type => {
        const types = {
          id: 'id',
          question_date: 'question_date',
          views: 'views',
          rate: 'rate',
        };
        const sortProperty = types[type];
        if (sortProperty == 'question_date') {
          const sorted = [...arrayToSort].sort (
            (a, b) => new Date (b[sortProperty]) - new Date (a[sortProperty])
          );
          setModulequestions (sorted);
          console.log ('our array = ', modulequestions);
        } else {
          const sorted = [...arrayToSort].sort (
            (a, b) => b[sortProperty] - a[sortProperty]
          );
          setModulequestions (sorted);
        }
      };

      sortArray (sortType);
    },
    [sortType]
  );

  return (
    <div>
      <div className="search-containerH">

        <input
          className="form-control mr-sm-2 searchbox-onlyH menu-margin"
          name="search"
          type="text"
          onChange={handleSearch}
          placeholder="SEARCH HERE ... "
        />
        <select
          className="custom-select mr-sm-2 sortSelector menu-margin"
          onChange={changeHandler}
        >
          <option value="default">FILTER BY MODULE</option>
          {filter.map ((item, index) => {
            return <option key={index} value={item.id}>{item.module}</option>;
          })}
        </select>

        <select
          className="custom-select mr-sm-2 sortSelector menu-margin"
          id="inlineFormCustomSelect"
          onChange={e => setSortType (e.target.value)}
        >
          <option value="id">SORT BY</option>
          <option value="question_date">QUESTION DATE</option>
          <option value="views">MOST VIEWED</option>
          <option value="rate">MOST LIKED</option>

        </select>

      </div>
      <div className="contain-body-containerH">
        <div className="body-containerH">

          <a href="" onClick={e => jsPDFGenerator (e)}>
            <img id="img-pdf" src={pdf} />
          </a>

          <div className="AllQuestionsresponsiveLinks">
            <button
              className="btn btn-danger"
              style={{width: '14rem', margin: '3rem 0 0 0'}}
              onClick={() => (window.location = '/answered')}
            >
              ANSWERED QUESTIONS
            </button>
            <button
              className="btn btn-danger"
              style={{width: '14rem', margin: '3rem 0 0 0'}}
              onClick={() => (window.location = '/unanswered')}
            >
              UNANSWERED QUESTIONS
            </button>
          </div>

          <div className="to-divide-2divs">
            <div className="col-and-search-containerH">
              <ul className="ulH">
                <li className="liH">
                  {' '}<Link to="/Answered"> ANSWERED QUESTIONS </Link>
                </li>
                |
                <li className="liH">
                  {' '}<Link to="/UnAnswered"> UNANSWERED QUESTIONS </Link>
                </li>
                |
                <li className="liH">
                  {' '}<Link to="/allquestions">ALL QUESTIONS</Link>
                </li>
                |
                <li className="liH">
                  <Link to="/askquestion">ASK QUESTION</Link>
                </li>
              </ul>
            </div>

            <div className="bodyContentH">
              <h1 id="page-headingH">ALL QUESTIONS</h1>
              <h5 id="countHeader">{count} QUESTIONS</h5>
              <div className="link-filterH" />
              <img src="" />

              {!loading
                ? <div className="allquestions-containerH">
                    {currentQuestions.map ((question, index) => (
                      <div key={index} className="question1H">
                        <div key={index + 1} className="switch-q">

                          {renderSwitch (question.module_id)}

                          {/* {setQuestionRate(question.rate)} */}
                          <Link
                            key={index + 3}
                            to={`/selectedquestionpage/${question.id}`}
                          >
                            {question.question_title}
                          </Link>
                        </div>
                        <div className="questionDetails">

                          {/* rate here */}
                          <RateComponent
                            keyId={question.id}
                            rate={question.rate}
                          />
                          {/* <div className="rateAndImg">
                            <img className="rateIcon" src={rateIcon} />
                            <h5>{question.rate}</h5>
                          </div> */}
                          <h5 id="views">Views: {question.views}</h5>
                        </div>
                      </div>
                    ))}

                  </div>
                : <SpinnerPage />}

              <div>
                <Pagination
                  questionsPerPage={questionsPerPage}
                  totalQuestions={modulequestions.length}
                  paginate={paginate}
                />

              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllQuestionsComponent;
