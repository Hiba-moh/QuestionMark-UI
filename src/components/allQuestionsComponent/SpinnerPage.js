import React from 'react';

const SpinnerPage = () => {
  return (
    <>

      <div class="d-flex justify-content-center text-danger">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

    </>
  );
};

export default SpinnerPage;
