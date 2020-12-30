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
      console.log (res);
    } catch (err) {
      console.error (err.message);
    }
  };
  const [qAnswer, SetQAnswer] = useState (answerDetails.answer);

  return (
    <Fragment>

      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${answerDetails.id}`}
      >
        Edit
      </button>
      {/* id= id21 */}
      <div class="modal" id={`id${answerDetails.id}`}>
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-header">
              <h4 class="modal-title">Edit Answer</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
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

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={() => editText (answerDetails.id)}
              >
                Edit
              </button>

              <button type="button" class="btn btn-danger" data-dismiss="modal">
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
