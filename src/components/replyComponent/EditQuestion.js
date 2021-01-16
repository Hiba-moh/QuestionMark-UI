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
      window.location = '/userasked';
    } catch (err) {
      console.error (err.message);
    }
  };
  const [userQuestion, SetUserQuestion] = useState (questionDetails.question);

  return (
    <Fragment>

      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${questionDetails.id}`}
      >
        Edit
      </button>
      {/* id= id21 */}
      <div className="modal" id={`id${questionDetails.id}`}>
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h4 className="modal-title">Edit Question</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
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

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={() => editText (questionDetails.id)}
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
export default EditQuestion;
