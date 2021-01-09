import {react, Fragment} from 'react-dom';
const PopUp = () => {
  return (
    <Fragment>

      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`hi there`}
      >
        Edit
      </button>
      {/* id= id21 */}
      <div className="modal">
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
                onChange={e => {}}
              />
            </div>

            <div className="modal-footer">

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
export default PopUp;
