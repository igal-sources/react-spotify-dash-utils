import React, { Children } from "react";
import "./long-text-tooltip.scss";

const LongTextTooltip = (props) => {
  const { children } = props;

  const title = Children.map(children, (c) => {
    if (typeof c === "string") {
      return c.toString();
    } else {
      return c.props.children.toString();
    }
  }).join(" ");

  return (
    <div className="Text-tooltip" title={title}>
      {children}
    </div>
  );
};

export default LongTextTooltip;
