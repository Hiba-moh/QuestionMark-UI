const Pagination = ({questionsPerPage, totalQuestions, paginate}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil (totalQuestions / questionsPerPage); i++) {
    pageNumbers.push (i);
  }

  return (
    <div>
      <ul className="paginationUl">
        {pageNumbers.map ((number, index) => (
          <li key={index} className="paginationLi">
            <a
              onClick={() => {
                paginate (number);
              }}
              href="#!"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
