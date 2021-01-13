import React from 'react';

const commentsForm = () => {
  return (
    <div class="container">
      <h2 class="text-center">Bootstrap 4 User Rating Form / Comment Form</h2>

      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-2">
              <img
                src="https://image.ibb.co/jw55Ex/def_face.jpg"
                class="img img-rounded img-fluid"
              />
              <p class="text-secondary text-center">15 Minutes Ago</p>
            </div>
            <div class="col-md-10">
              <p>
                <a
                  class="float-left"
                  href="https://maniruzzaman-akash.blogspot.com/p/contact.html"
                >
                  <strong>Maniruzzaman Akash</strong>
                </a>
                <span class="float-right">
                  <i class="text-warning fa fa-star" />
                </span>
                <span class="float-right">
                  <i class="text-warning fa fa-star" />
                </span>
                <span class="float-right">
                  <i class="text-warning fa fa-star" />
                </span>
                <span class="float-right">
                  <i class="text-warning fa fa-star" />
                </span>

              </p>
              <div class="clearfix" />
              <p>
                Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
                <a class="float-right btn btn-outline-primary ml-2">
                  {' '}<i class="fa fa-reply" /> Reply
                </a>
                <a class="float-right btn text-white btn-danger">
                  {' '}<i class="fa fa-heart" /> Like
                </a>
              </p>
            </div>
          </div>
          //************************************************************* */

          <div class="col-md-6 comments-section">
            <div class="row">
              <div class="col-12">
                <h2>Comment</h2>
                <form class="comment-form" method="post" action="">
                  <textarea
                    class="comment-area"
                    name="user_comment"
                    placeholder="Write your comment here"
                    cols="100"
                    rows="8"
                  />
                  <button type="submit" class="btn  comment-btn btn-danger">
                    Post
                  </button>
                </form>
              </div>
            </div>
          </div>

          //***************************************************************** */
          <div class="card card-inner">
            <div class="card-body">
              <div class="row">
                <div class="col-md-2">
                  <img
                    src="https://image.ibb.co/jw55Ex/def_face.jpg"
                    class="img img-rounded img-fluid"
                  />
                  <p class="text-secondary text-center">15 Minutes Ago</p>
                </div>
                <div class="col-md-10">
                  <p>
                    <a href="https://maniruzzaman-akash.blogspot.com/p/contact.html">
                      <strong>Maniruzzaman Akash</strong>
                    </a>
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p>
                    <a class="float-right btn btn-outline-primary ml-2">
                      {' '} <i class="fa fa-reply" /> Reply
                    </a>
                    <a class="float-right btn text-white btn-danger">
                      {' '}<i class="fa fa-heart" /> Like
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default commentsForm;
