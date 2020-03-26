import React from "react";
import { Loader } from "semantic-ui-react";
import classNames from "classnames";
import "./spinner.scss";

const Spinner = ({ isLoading }) => {
  const loadingActiveClassName = classNames({
    active: isLoading
  });

  return (
    <div className="Spinner-loader">
      <Loader inverted size="huge" className={loadingActiveClassName} />
    </div>
  );
};

export default Spinner;
