/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const GoBack = ({ state }) => {
  return (
    <button type="button">
      <Link to={state}>&larr;&nbsp;Go Back</Link>
    </button>
  );
};

export default GoBack;
//<Link to={ } state={ }>&larr;&nbsp;Go Back</Link>
