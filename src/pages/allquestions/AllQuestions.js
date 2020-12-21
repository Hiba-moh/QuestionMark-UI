import React from 'react';
import AllQuestionsComponent
  from '../../components/allQuestionsComponent/AllQuestionsComponent';
import Footer from '../../components/footerComponent/Footer';
import Header from '../../components/allQuestionsComponent/Header';

function AllQuestions () {
  return (
    <div>
      <Header />
      <AllQuestionsComponent />
      <Footer />
    </div>
  );
}

export default AllQuestions;
