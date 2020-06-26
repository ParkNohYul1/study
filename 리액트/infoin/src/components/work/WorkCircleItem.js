import React from 'react';

const WorkCircleItem = ({ siData }) => {
  const List = siData.map((data, index) => (
    <div
      className={
        data.number === 2 || data.number === 5
          ? 'siProcess__part-circleCenter'
          : 'siProcess__part-circle'
      }
      key={index}
    >
      <div className="number">{data.number}</div>
      <div className="content">{data.content}</div>
      <div className="en">{data.en}</div>
    </div>
  ));

  return <>{List}</>;
};

export default WorkCircleItem;
