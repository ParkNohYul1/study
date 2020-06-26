import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import cn from 'class-names';
import queryString from 'query-string';
import HeaderItem from './HeaderItem';
import './Header.scss';

const Header = ({ menu, location, match }) => {
  const HeaderStyle = menu || 'headerblack';

  location = location || '';

  const query = queryString.parse(location.search);

  const categories = [
    {
      link: '/aboutUs?category=AboutUs',
      label: 'ABOUT US',
      categoryString: 'AboutUs',
    },
    {
      link: '/work?category=Work',
      label: 'WORK',
      categoryString: 'Work',
    },
    {
      link: '/protfolio?category=Protfolio',
      label: 'PORTFOLIO',
      categoryString: 'Protfolio',
    },
    {
      link: '/qna?category=Qna',
      label: 'Q&A',
      categoryString: 'Qna',
    },
    {
      link: '/content?category=Contact',
      label: 'CONTACT',
      categoryString: 'Contact',
    },
  ];

  // 지역 변수
  let deviceMode = '';
  let isSlideIn = false;
  let breakpoint = 999;

  let appNavigation = null;
  let buttonBurger = null;
  let menuList = null;

  const demoInfoinUI = () => {
    findDomNode();
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
  };

  const findDomNode = () => {
    appNavigation = document.querySelector('.navPart');
    buttonBurger = appNavigation.querySelector('.buttonBurger');
    menuList = appNavigation.querySelector('.headerBlock__box-ui');
  };

  const handleWindowResize = () => {
    switch (getDeviceMode()) {
      case 'mobile':
        settingMobile();
        break;
      case 'desktop':
        settingDesktop();
        break;
      default:
      // console.warn('동일한 장치 모드 상태');
    }
  };

  const getDeviceMode = () => {
    var currentMode = breakpoint < window.innerWidth ? 'desktop' : 'mobile';
    if (deviceMode === currentMode) {
      return 'same';
    } else {
      deviceMode = currentMode;
    }
    return deviceMode;
  };

  const settingMobile = () => {
    addEventButtonBugger();
    addTransitionMenuList();
  };

  const settingDesktop = () => {
    removeEventButtonBugger();
    removeTransitionMenuList();
  };

  const addEventButtonBugger = () => {
    buttonBurger.addEventListener('click', handleSlideToggle);
  };

  var removeEventButtonBugger = () => {
    buttonBurger.removeEventListener('click', handleSlideToggle);
  };

  const addTransitionMenuList = () => {
    menuList.style.transition = 'all 0.3s ease';
  };

  const removeTransitionMenuList = () => {
    menuList.style.transition = null;
  };

  const slideIn = function () {
    // 상태 업데이트
    isSlideIn = true;

    window.setTimeout(function () {
      appNavigation.classList.add('isAct');
    }, 100);

    // buttonBurger 상태 업데이트
    buttonBurger.setAttribute('aria-pressed', true);
    buttonBurger.setAttribute('aria-label', '메뉴 닫기');

    // 열린 상태에서 버거 버튼에 이벤트 연결
    buttonBurger.addEventListener('keydown', handleShiftTabButtonBurger);

    // 슬라이드 토글 이벤트 연결
    document.addEventListener('click', handleSlideToggle);
    window.addEventListener('keydown', handleSlideToggle);
  };

  // 메뉴 리스트 슬라이드 아웃 함수
  var slideOut = () => {
    // 상태 업데이트
    isSlideIn = false;

    // 앱 내비게이션 비 활성화
    appNavigation.classList.remove('isAct');

    // 메뉴 리스트 이벤트 전파 차단 함수 제거
    menuList.removeEventListener('click', handlePreventBrowserAction);

    // buttonBurger 상태 업데이트
    buttonBurger.setAttribute('aria-pressed', false);
    buttonBurger.setAttribute('aria-label', '메뉴 열기');

    // 슬라이드 토글 이벤트 제거
    document.removeEventListener('click', handleSlideToggle);
    window.removeEventListener('keydown', handleSlideToggle);
  };

  // 슬라이드 토글 처리 함수
  const handleSlideToggle = (e) => {
    // 키보드 이벤트
    if (e.type === 'keydown') {
      if (e.keyCode === 27) {
        slideOut();
        buttonBurger.focus();
      }
    } else {
      e.stopPropagation();
      isSlideIn ? slideOut() : slideIn();
    }
  };

  // 브라우저 기본 동작 무시 함수
  const handlePreventBrowserAction = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // 버튼 버그의 shift + tab 키를 제어하는 함수
  const handleShiftTabButtonBurger = (e) => {
    if (isSlideIn && e.shiftKey && e.keyCode === 9) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    demoInfoinUI();
  });

  return (
    <div className={cn('headerBlock', HeaderStyle)}>
      <div className="headerBlock__box">
        <header>
          <h1 className="resetMargin">
            <Link to="/">
              <img src="/images/45.png" alt="인포인 로고" />
            </Link>
          </h1>
        </header>
        <nav className="navPart">
          <h2 className="a11yHidden">메뉴 네비게이션</h2>
          <button className="buttonNone buttonBurger" aria-label="메뉴 열기">
            <span className="burgerBar round positionTop"></span>
            <span className="burgerBar round positionMiddle"></span>
            <span className="burgerBar round positionBottom"></span>
          </button>
          <ul className="headerBlock__box-ui resetList">
            {categories.map((c, index) => (
              <HeaderItem
                categoryItem={c}
                key={index}
                location={location}
                activeUrl={c.categoryString === query.category}
              />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
