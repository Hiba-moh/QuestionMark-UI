import React, {Fragment} from 'react';
import {useState, useEffect} from 'react';
import Header from '../../components/allQuestionsComponent/Header';
import Footer from '../../components/footerComponent/Footer';
import userAnswered from '../replyComponent/userAnswered.css';
import EditQuestion from './EditQuestion';

const UserAsked = () => {
  // const id = match.params.id;
  const [userQuestions, SetUserQuestions] = useState ([]);

  //delete answer function

  const deleteQuestion = async id => {
    try {
      const res = await fetch (
        `https://question-mark-api.herokuapp.com/userAsked/${id}`,
        {
          method: 'DELETE',
        }
      );
      SetUserQuestions (
        filter.userQuestions (question => {
          question.id !== id;
        })
      );
      console.log (res);
    } catch (err) {
      console.error (err.message);
    }
  };

  const questionsList = async () => {
    const res = await fetch`https://question-mark-api.herokuapp.com/userAsked/5`;

    const resArray = await res.json ();
    SetUserQuestions (resArray);
  };

  useEffect (() => {
    questionsList ();
  }, []);

  console.log (userQuestions);

  return (
    <Fragment>
      <div className="userAnswersContainer">
        <Header />
        <div className="userAnswersBodyContainer">
          <h1>Questions You Asked</h1>
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
              {/* <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
                <td>john@example.com</td> */}

              {userQuestions.map (item => (
                <tr>
                  <td>{item.question}</td>
                  <td>{item.answers}</td>
                  <td><EditQuestion questionDetails={item} /></td>
                  {/* {item.answers == 0? */}
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => {
                        deleteQuestion (item.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  {/* : <h6>Undeletable</h6>} */}
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
