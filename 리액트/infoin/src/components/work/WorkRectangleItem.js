import React from 'react';

const WorkRectangleItem = ({ siData }) => {
  const List = siData.map((data, index) => (
    <div className="rectangleItem" key={index}>
      <div className="rectangleItem__number">{'0' + (index + 1)}</div>
      <div className="rectangleItem__text">
        <div>{data.one}</div>
        <div>{data.two}</div>
        <div>{data.three}</div>
        <div>{data.four}</div>
      </div>
    </div>
  ));

  return <>{List}</>;
};

export default WorkRectangleItem;
