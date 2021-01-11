import react, {Fragment, useState} from 'react';

const EditAnswer = ({answerDetails}) => {
  //Edit text function

  const editText = async id => {
    console.log ('answer is:' + qAnswer);
    try {
      const data = {answer: qAnswer};
      const res = await fetch (
        `https://question-mark-api.herokuapp.com/userAnswers/${id}`,
        {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify (data),
        }
      );
      window.location = '/useranswered';
    } catch (err) {
      console.error (err.message);
    }
  };
  const [qAnswer, SetQAnswer] = useState (answerDetails.answer);

  return (
    <Fragment>

      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${answerDetails.id}`}
      >
        Edit
      </button>
      {/* id= id21 */}
      <div className="modal" id={`id${answerDetails.id}`}>
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h4 className="modal-title">Edit Answer</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <textarea
                className="secondary"
                rows="10"
                cols="60"
                value={qAnswer}
                onChange={e => {
                  SetQAnswer (e.target.value);
                }}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={() => editText (answerDetails.id)}
              >
                Edit
              </button>

              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default EditAnswer;
