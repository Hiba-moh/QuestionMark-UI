import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../allQuestionsComponent/AllQuestionsComponent.css';
import {Link, useHistory} from 'react-router-dom';
import SelectedQuestionPage
  from '../../pages/selectedQuestionPage/SelectedQuestionPage';
import pdf from '../allQuestionsComponent/download.png';
import jsPDF from 'jspdf';
import icon from '../allQuestionsComponent/click.jpg';
import Pagination from '../../components/allQuestionsComponent/Pagination';

const AllQuestionsComponent = () => {
  const [loading, setLoading] = useState (false);
  const [currentPage, setCurrentPage] = useState (1);
  const [questionsPerPage] = useState (5);
  const [list, setList] = useState ([]);
  const [filter, setFilter] = useState ([]);
  const [modulequestions, setModulequestions] = useState ([]);
  const [input, setInput] = useState ('');
  const [qAnswers, setQAnswers] = useState ([]);
  const history = useHistory ();
  useEffect (() => {
    const fetchQuestions = async () => {
      setLoading (true);
      const res = await axios.get (
        `https://question-mark-api.herokuapp.com/allquestions`
      );

      setModulequestions (res.data.allquestions);
      setList (res.data.allquestions);
      setFilter (res.data.filter);
      setQAnswers (res.data.q_answers);
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
      // console.log (modulequestions);
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
  };

  const jsPDFGenerator = () => {
    var doc = new jsPDF ('p', 'pt');

    var i = 1;
    var j = 2;
    qAnswers.map (question => {
      doc.text (20, 30 * i, question.question + '\n' + question.answer);
      i += 2;
    });

    doc.setFont ('courier');
    doc.save ('AllQuestions');
  };

  // if (loading) {
  //   return <h2>loading ...</h2>;
  // }

  // get current questions
  // index of last question
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

  return (
    <div>
      <div className="search-containerH">
        <a href="" onClick={jsPDFGenerator}>
          <img id="img-pdf" src={pdf} />
        </a>
        <div className="form1H">
          <form>
            <input
              className="searchbox-onlyH"
              name="search"
              type="text"
              onChange={handleSearch}
              placeholder="SEARCH HERE ... "
            />
            {/* <button class="searchbtn">SEARCH</button> */}
          </form>
        </div>

        <div className="form2H">
          <form>

            <select id="moduleSelectorH" onChange={changeHandler}>
              <option value="default">FILTER BY MODULE</option>
              {filter.map (item => {
                return (
                  <option key={item.id} value={item.id}>{item.module}</option>
                );
              })}
            </select>

          </form>
        </div>
      </div>

      <div className="body-containerH">

        <div className="col-linksH" />
        <div className="to-divide-2divs">
          <div className="col-and-search-containerH">
            {' '}<h5 id="pdf-download">DOWNLOAD</h5>
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
            <div className="link-filterH" />
            <img src="" />
            <div class="allquestions-containerH">
              <div class="allquestions1H">
                {currentQuestions.map (question => (
                  <div key={question.id} class="question1H">
                    <Link to={`/selectedquestionpage/${question.id}`}>
                      {question.question_title}
                    </Link>
                  </div>
                ))}

              </div>
            </div>

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
  );
};

export default AllQuestionsComponent;
