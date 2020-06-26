import React from 'react';
import Header from '../components/common/Header';
import './MainPage.scss';
import { Link } from 'react-router-dom';

const MainPage = ({ location, match }) => {
  return (
    <>
      <Header menu="notHeaderColor" location={location} match={match} />
      <main role="main" className="mainBlack">
        <h2 className="a11yHidden">인포인 첫 화면 메인 페이지입니다.</h2>
        <iframe
          className="infoinBox__video"
          title="인포인 소개 동영상"
          src="https://www.youtube.com/embed/QO4-zOY_yMk?mute=1&loop=1&autoplay=1&rel=0&controls=0&showinfo=0&&loop=1;playlist=QO4-zOY_yMk&rel=0"
          allow="autoplay; encrypted-media"
          frameBorder="0"
          framespacing="0"
          scrolling="no"
          vspace="0"
        ></iframe>
        <div className="infoinBox">
          <dl className="infoinBox__text">
            <dt className="infoinBox__text-title">
              국내 최고의 기술 솔루션 개발
            </dt>
            <dd className="infoinBox__text-detail resetMargin">
              기업형 프로그래밍 개발을 넘어 개인과 기업, 정부는 물론
              <b>글로벌 사업화</b>를 목표로 새로운 전기를 마련하고자 합니다.
            </dd>
          </dl>
          <Link to="/aboutUs?category=AboutUs" className="infoinBox__button">
            VIEW MORE
          </Link>
          <a
            href="https://www.youtube.com/embed/QO4-zOY_yMk?rel=0"
            target="_blank"
            rel="noopener noreferrer"
            className="infoinBox__button-fullScreen"
          >
            VIDEO FULL SCREEN
          </a>
        </div>
      </main>
    </>
  );
};

export default MainPage;
