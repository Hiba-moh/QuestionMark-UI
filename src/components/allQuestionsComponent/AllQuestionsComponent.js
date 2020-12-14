import React from 'react';
import '../allQuestionsComponent/AllQuestionsComponent.css';
import {Link} from 'react-router-dom';

const allQuestionsComponent = () => {
  return (
    <div>
      <div class="search-container">
        <div class="form1">
          <form>
            <input
              class="searchbox"
              name="search"
              type="text"
              placeholder="Search Here ..."
            />
            <button class="searchbtn">search</button>
          </form>
        </div>
        <div class="form2">
          <form>
            <button class="ask-btn">Ask Question</button>
          </form>
        </div>
      </div>
      <h1>All Questions</h1>

      <ul>
        <li> <Link to="/Answered"> Answered </Link></li>|
        <li> <Link to="/UnAnswered"> UnAnswered </Link></li>|
        <li><Link to="/allquestions">All</Link></li>
      </ul>

      <div class="allquestions-container">
        <div class="allquestions" />

      </div>
    </div>
  );
};

export default allQuestionsComponent;
