
import React, {useContext} from 'react';
import Axios from 'axios';
import './ReplyPage.css';
import SidebarComponent
  from '../../components/sidebarComponent/SidebarComponent';
import TextareaComponent
  from '../../components/textareaComponent/TextareaComponent';
import ButtonComponent from '../../components/buttonComponent/ButtonComponent';
import Header from '../../components/headerComponent/Header';
import {AuthContext} from '../../AuthContext';
require ('dotenv').config ();
console.log (process.env);
function ReplyPage () {
  const [isAuth, setIsAuth] = useContext (AuthContext);
  //CONTAINS BODY OF SLACK MESSAGE
  const data = {
    channel: '#questionmark_forum',
    attachments: [
      {
        color: 'danger',
        fields: [
          {
            title: 'Question No.5006 username: @Sadat Topic: TESTING123',
            value: 'Your question has a reply. Please sign in to the question forum to check your answer.',
            short: false,
          },
        ],
      },
    ],
  };
  async function handleSlackMessage () {
    let res = await Axios.post (
      process.env.REACT_APP_API_KEY,
      JSON.stringify (data),
      {
        withCredentials: false,
        transformRequest: [
          (data, headers) => {
            delete headers.post['Content-Type'];
            return data;
          },
        ],
      }
    );
    res.status === 200
      ? alert ('Sent Slack notification...')
      : alert ('Error sending message');
  }
  return (
    <div className="reply_outer_container">
      <div className="reply_header">
        <Header />
      </div>
      <div className="reply_container">
        <div className="reply_sidebar">
          <SidebarComponent />
        </div>
        <div className="reply_body">
          <div className="reply_titleandbtn_container">
            <div className="reply_title">
              <h2>Reply to the question</h2>
            </div>
            <div className="reply_btn">
              {/* <ButtonComponent label="Logout"/> */}
              <button onClick={() => setIsAuth (false)}>Logout</button>
            </div>
          </div>
          <div className="reply_textarea_container">
            <TextareaComponent
              subtitle="Title of the question"
              description="Enter your reply here..."
            />
            {/* <ButtonComponent label="reply"/> */}
            <button onClick={handleSlackMessage}>Reply</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReplyPage;