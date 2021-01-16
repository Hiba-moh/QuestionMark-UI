import React, {Fragment} from 'react';
import {useState, useEffect, useContext} from 'react';
import Header from '../../components/allQuestionsComponent/Header';
import Footer from '../../components/footerComponent/Footer';
import userAnswered from '../replyComponent/userAnswered.css';
import EditQuestion from './EditQuestion';
import {AuthContext} from '../../AuthContext';

const UserAsked = () => {
  // const id = match.params.id;
  const {isAuth, greet, idNumber} = useContext (AuthContext);
  const [isAuthValue, setIsAuthValue] = isAuth;
  const [greetValue, setGreetValue] = greet;
  const [idNumberValue, setIdNumberValue] = idNumber;

  const [userQuestions, SetUserQuestions] = useState ([]);

  if (idNumber[0] || greet[0]) {
    localStorage.setItem ('userAskedVal', idNumber[0]);
    localStorage.setItem ('userAskedName', greet[0]);
  }

  //delete answer function

  const deleteQuestion = async id => {
    try {
      const res = await fetch (
        `https://question-mark-api.herokuapp.com/userAsked/${id}`,
        {
          method: 'DELETE',
        }
      );
      SetUserQuestions (userQuestions.filter (question => question.id !== id));
      console.log (res);
    } catch (err) {
      console.error (err.message);
    }
  };

  // get all the questions been asked by specific user by user id
  const questionsList = async () => {
    const res = await fetch (
      'https://question-mark-api.herokuapp.com/userAsked/3'
    );

    const resArray = await res.json ();
    SetUserQuestions (resArray);
  };

  useEffect (() => {
    questionsList ();
  }, []);

  return (
    <Fragment>
      <div className="userAnswersContainer">
        <Header />
        <div className="userAnswersBodyContainer">
          <h1>Questions You Asked {localStorage.getItem ('userAskedName')}</h1>
          <table className="table table-responsive table-striped table-striped mt-5">
            <thead>
              <tr>
                <th>Your Question</th>
                <th>Answers</th>
                <th>Edit Your Question</th>
                <th>Delete Your Question</th>
              </tr>
            </thead>
            <tbody>

              {userQuestions.map ((item, index) => (
                <tr key={index}>
                  <td>{item.question}</td>
                  <td>{item.answers}</td>
                  <td><EditQuestion questionDetails={item} /></td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={e => {
                        deleteQuestion (item.id);
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
export default UserAsked;
