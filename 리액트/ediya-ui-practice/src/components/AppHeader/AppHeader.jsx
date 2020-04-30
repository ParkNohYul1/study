import "./AppHeader.scss";
import React from "react";
import AppHomeLink from "../AppHomeLink/AppHomeLink";
import AppNavigation from "../AppNavigation/AppNavigation";

const AppHeader = () => {
  return (
    <header className="appHeader">
      <AppHomeLink href="/" title="이디야 커피 홈" external>
        <span className="a11yHidden" lang="ko">
          EDIYA COFFEE
        </span>
      </AppHomeLink>
      <AppNavigation />
    </header>
  );
};

export default AppHeader;
