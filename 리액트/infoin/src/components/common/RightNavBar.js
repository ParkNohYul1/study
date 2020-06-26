import React, { useState, useCallback, useEffect } from 'react';
import cn from 'class-names';
import './RightNavBar.scss';

const RightNavBar = ({ ToggleNavActiveData, changeBarTop }) => {
  const [ToggleNavActive, setToggleNavActive] = useState(ToggleNavActiveData);
  const topArrayLength = changeBarTop.length;

  // 버튼 눌렀을떄 이벤트 처리
  const ToggleNav = useCallback(
    (e) => {
      const idValue = e.target.getAttribute('data-id');
      const dataActive = [...ToggleNavActive];

      let Height = document.querySelector('.' + dataActive[idValue].scrollTop)
        .offsetTop;
      window.scrollTo({ top: Height, behavior: 'smooth' });
    },
    [ToggleNavActive],
  );

  const rowLen = ToggleNavActive.length;

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => {
      window.removeEventListener('scroll', listenToScroll);
    };
  });

  const listenToScroll = () => {
    const dataActive = [...ToggleNavActive];

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    scrollEventFn(dataActive, winScroll);
  };

  const arrayChange = (valueData, dataActiveParam) => {
    ToggleNavActive.map((activeData) => (activeData.active = false));
    dataActiveParam[valueData].active = true;
    setToggleNavActive(dataActiveParam);
  };

  const scrollEventFn = (dataActiveParm, winScrollParm) => {
    const navbar = document.querySelector('.navMove');

    if (topArrayLength === 4) {
      if (winScrollParm > changeBarTop[0].scrollPosition) {
        arrayChange(3, dataActiveParm);
      } else if (
        winScrollParm > changeBarTop[1].scrollPosition &&
        winScrollParm < changeBarTop[0].scrollPosition
      ) {
        arrayChange(2, dataActiveParm);
      } else if (
        winScrollParm > changeBarTop[2].scrollPosition &&
        winScrollParm < changeBarTop[1].scrollPosition
      ) {
        arrayChange(1, dataActiveParm);
        navbar.classList.add('black');
      } else {
        arrayChange(0, dataActiveParm);
        navbar.classList.remove('black');
      }

      if (winScrollParm > changeBarTop[2].scrollPosition) {
        arrayChange(1, dataActiveParm);
        navbar.classList.add('black');
      } else {
        arrayChange(0, dataActiveParm);
        navbar.classList.remove('black');
      }
    } else if (topArrayLength === 2) {
      if (winScrollParm > changeBarTop[0].scrollPosition) {
        arrayChange(1, dataActiveParm);
        navbar.classList.add('black');
      } else {
        arrayChange(0, dataActiveParm);
        navbar.classList.remove('black');
      }
    }
  };

  const navListItem = ToggleNavActive.map((activeData, index) => {
    if (rowLen === index + 1) {
      return (
        <div
          key={index}
          className={cn('navMove__Move1 navMoveDiv', {
            active: activeData.active,
          })}
        >
          <div className="navMove__Move1-moveText">0{index + 1}</div>
          <div className="navMove__Move1-point">
            <div className="rectanglePoint"></div>
            <div
              className="circlePotin"
              data-id={index}
              onClick={ToggleNav}
            ></div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          key={index}
          className={cn('navMove__Move1 navMoveDiv', {
            active: activeData.active,
          })}
        >
          <div className="navMove__Move1-moveText">0{index + 1}</div>
          <div className="navMove__Move1-point">
            <div
              className="circlePotin"
              data-id={index}
              onClick={ToggleNav}
            ></div>
            <div className="rectanglePoint"></div>
          </div>
        </div>
      );
    }
  });

  return <div className="navMove">{navListItem}</div>;
};

export default RightNavBar;
