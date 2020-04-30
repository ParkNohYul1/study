import "./AppHomeLink.scss";
import React from "react";
import { string } from "prop-types";
import classNames from "classnames";

const AppHomeLink = ({ external, children, ...domProps }) => {
  const combineClassNames = classNames("appHeader__link", external);
  return (
    <h1 className="appHeader__brand">
      <a
        {...domProps}
        className="appHeader__homeLink"
        target={external ? "_blank" : null}
        rel={external ? "noopener noreferrer" : null}
      >
        {children || <span className="allyHidden">홈 링크</span>}
      </a>
    </h1>
  );
};

AppHomeLink.prototype = {
  href: string.isRequired,
};

export default AppHomeLink;
