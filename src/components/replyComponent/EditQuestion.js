import react, {Fragment, useState} from 'react';

const EditQuestion = ({questionDetails}) => {
  //Edit text function

  const editText = async id => {
    console.log ('Question is:' + userQuestion);
    try {
      const data = {question: userQuestion};
      const res = await fetch (
        `https://question-mark-api.herokuapp.com/userAsked/${id}`,
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
  const [userQuestion, SetUserQuestion] = useState (questionDetails.question);

  return (
    <Fragment>

      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${questionDetails.id}`}
      >
        Edit
      </button>
      {/* id= id21 */}
      <div class="modal" id={`id${questionDetails.id}`}>
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-header">
              <h4 class="modal-title">Edit Question</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <textarea
                className="secondary"
                rows="10"
                cols="60"
                value={userQuestion}
                onChange={e => {
                  SetUserQuestion (e.target.value);
                }}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={() => editText (questionDetails.id)}
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
export default EditQuestion;
