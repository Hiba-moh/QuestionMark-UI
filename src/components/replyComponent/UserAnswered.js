import React, {Fragment} from 'react';
import {useState, useEffect, useContext} from 'react';
import Header from '../../components/allQuestionsComponent/Header';
import Footer from '../../components/footerComponent/Footer';
import userAnswered from '../replyComponent/userAnswered.css';
import ReactHtmlParse from 'react-html-parser';
import EditAnswer from './EditAnswer';
import {AuthContext} from '../../AuthContext';

const UserAnswered = () => {
  // const id = match.params.id;

  const {isAuth, greet, idNumber} = useContext (AuthContext);
  const [isAuthValue, setIsAuthValue] = isAuth;
  const [greetValue, setGreetValue] = greet;
  const [idNumberValue, setIdNumberValue] = idNumber;

  const [userAnswers, SetUserAnswers] = useState ([]);

  //delete answer function

  const deleteAnswer = async id => {
    try {
      const res = await fetch (
        `https://question-mark-api.herokuapp.com/userAnswers/${id}`,
        {
          method: 'DELETE',
        }
      );
      SetUserAnswers (
        filter.userAnswers (answer => {
          answer.id !== id;
        })
      );
      console.log (res);
    } catch (err) {
      console.error (err.message);
    }
  };

  //get all the questions been answered by specific user by id

  const answersList = async () => {
    const res = await fetch`https://question-mark-api.herokuapp.com/userAnswers/1`;

    const resArray = await res.json ();
    SetUserAnswers (resArray);
  };

  useEffect (() => {
    answersList ();
  }, []);

  return (
    <Fragment>
      <div className="userAnswersContainer">
        <Header />
        <div className="userAnswersBodyContainer">
          <h1>Questions Answered By You {greet}</h1>
          <table className="table table-responsive table-striped table-striped mt-5">
            <thead>
              <tr>
                <th>Question</th>
                <th>Your Answer</th>
                <th>Edit Your Answer</th>
                <th>Delete Your Answer</th>
              </tr>
            </thead>
            <tbody>

              {userAnswers.map (item => (
                <tr key={item.id}>
                  <td>{item.question}</td>
                  <td>{ReactHtmlParse (item.answer)}</td>
                  <td><EditAnswer answerDetails={item} /></td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => {
                        deleteAnswer (item.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
        {/* <Footer /> */}
      </div>
    </Fragment>
  );
};
export default UserAnswered;
