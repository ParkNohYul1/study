import React, { useState } from 'react';
import './WorkMiddleBox.scss';
import ThreeDrContainer from './ThreeDrContainer';
import IotContatiner from './IotContatiner';
import BookContainer from './BookContainer';
import SoppingMallContainer from './SoppingMallContainer';
import InfoplatFormContainer from './InfoplatFormContainer';

const WorkMiddleBox = () => {
  const [selectData, setSelectData] = useState('0');
  const [navDataBody, setNavDataBody] = useState(<ThreeDrContainer />);
  const [workDataList] = useState([
    { id: '0', heading: '3DR 소개', text: '3D.R' },
    { id: '1', heading: 'IOT 서비스 소개', text: 'IOT SERVICE' },
    { id: '2', heading: 'BOOKING 소개', text: 'BOOKING' },
    {
      id: '3',
      heading: 'SHOPPING MALL 소개',
      text: 'SHOPPING MALL',
    },
    {
      id: '4',
      heading: 'INFOPLATFORM 소개',
      text: 'INFOPLATFORM',
    },
  ]);

  const navClick = (e) => {
    let indexValue = e.target.getAttribute('data-id');
    setSelectData(indexValue);

    switch (indexValue) {
      case '0':
        setNavDataBody(<ThreeDrContainer />);
        break;
      case '1':
        setNavDataBody(<IotContatiner />);
        break;
      case '2':
        setNavDataBody(<BookContainer />);
        break;
      case '3':
        setNavDataBody(<SoppingMallContainer />);
        break;
      case '4':
        setNavDataBody(<InfoplatFormContainer />);
        break;
      default:
    }
  };

  return (
    <>
      <section className="navDataDiv">
        <h2 className="a11yHidden">
          회사에서 제공하는 여러가지 사업 목록 네비게이터
        </h2>
        <div className="navListBox">
          <div className="navList">
            {workDataList.map((item, index) => {
              if (selectData === item.id) {
                return (
                  <div className="navList__navBlock active" key={index}>
                    {item.text}
                  </div>
                );
              } else {
                return (
                  <div
                    className="navList__navBlock"
                    data-id={item.id}
                    key={index}
                    onClick={navClick}
                  >
                    {item.text}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
      {navDataBody}
    </>
  );
};

export default WorkMiddleBox;
