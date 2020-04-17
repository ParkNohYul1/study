import React, { Component } from "react";

const MyComponent = (props) => {
  const { name, children } = props;
  return (
    <div>
      안녕하세요. 제이름은 {name}입니다. <br />
      children 값은 {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
};

export default MyComponent;
