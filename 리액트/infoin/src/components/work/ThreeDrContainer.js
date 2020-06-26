import React from 'react';
import Slider from 'react-slick';
import './ThreeDrContainer.scss';
import { Link } from 'react-router-dom';

const ThreeDrContainer = ({ ...settings }) => {
  var settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Slider className="threeDrSlider" {...settings1}>
        <article className="threeDrSliderBox1">
          <h3 className="a11yHidden">3DR 이미지 슬라이드</h3>
          <div className="threeDrSliderBox1__contents">
            <img
              className="threeDrSliderBox1__contents-title"
              src="/images/4164.png"
              alt="3dr 슬라이드 첫번째 이미지 핸드폰으로 조작하는 사진"
            />
            <div className="threeDrSliderBox1__contents-contnet">
              3D.R은 지형, 공간, 사물 등 보이는 모든 것을 사진기반 실사 3D로
              제작하여 가벼운 용량으로 최적화 합니다. 인터넷이 가능한 스마트폰,
              노트북 등 전자기기를 통해 직접 방문하지 않아도 체험이 가능한 리얼
              3D 콘텐츠 제작 기술입니다.
            </div>
            <Link
              className="threeDrSliderBox1__contents-Link"
              to="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </Link>
          </div>
        </article>
        <article className="threeDrSliderBox2">
          <h3 className="a11yHidden">아직 정해지지 않은 이미지입니다.</h3>
        </article>
        <article className="threeDrSliderBox3">
          <h3 className="a11yHidden">아직 정해지지 않은 이미지입니다.</h3>
        </article>
      </Slider>

      <div className="threeDrMain">
        <div className="threeDrContainer">
          <section className="threeDrFunctionList">
            <div className="threeDrFunctionList__centerBorder" />
            <article className="threeDrFunctionList__item">
              <h2 className="a11yHidden">3DR 부서에서 하는 일</h2>
              <h3 className="threeDrFunctionList__item-title resetMargin">
                3D 데이터 최적화
              </h3>
              <div className="threeDrFunctionList__item-content">
                Web 서비스를 위한
                <br />
                용량 최적화
              </div>
            </article>
            <article className="threeDrFunctionList__item">
              <h3 className="threeDrFunctionList__item-title resetMargin">
                드론 찰영 후 Preview
              </h3>
              <div className="threeDrFunctionList__item-content">
                찰영 후 1:1 스케일에
                <br />
                맞는 3D 맵 구현
              </div>
            </article>
            <article className="threeDrFunctionList__item">
              <h3 className="threeDrFunctionList__item-title resetMargin">
                3D, IoT 융복합
              </h3>
              <div className="threeDrFunctionList__item-content">
                저용량 3D로 더 빠른 제어와
                <br />
                방문체험 가능
              </div>
            </article>
            <article className="threeDrFunctionList__item last">
              <h3 className="threeDrFunctionList__item-title resetMargin">
                VR / AR 콘텐츠
              </h3>
              <div className="threeDrFunctionList__item-content">
                Open API 접목을 통한
                <br />
                기능 다양화
              </div>
            </article>
          </section>
          <article className="threeDrSkill">
            <h2 className="a11yHidden">3DR 기술 설명</h2>
            <div className="threeDrSkill__bar" />
            <div className="threeDrSkill__text">
              특허 기술인 실사 3D 데이터 용량 최적화를 넓은 대지 단위로
              업그레이드 기술 개발 실내·외 사진기반의 실사 3D 콘텐츠 제작을 통한
              정확한 정보전달 가능 스마트 홈 IoT와 가상 공간의 실시간 Data 를
              통한 실사 3D 제어 시스템 개발 인터넷이 가능한 곳에서 방문하지
              않더라도 실제로 방문한 체험 가능
            </div>
          </article>
          <section className="DronAiData">
            <h2 className="a11yHidden">드론찰영과 AI데이터 수집 설명</h2>
            <article className="DronAiData__dronImage">
              <div className="DronAiData__background" />
              <h3 className="resetMargin DronAiData__mainText">드론 찰영</h3>
              <div className="DronAiData__info">
                3D.R은 지형, 공간, 사물 등 보이는 모든 것을 사진기반 실사 3D로
                제작하여 가벼운 용량으로 최적화 합니다. 인터넷이 가능한
                스마트폰, 노트북 등 직접 방문하지 않아도 체험이 가능한 리얼 3D
                콘텐츠 제작 기술입니다.
                <Link to="/">Learn More</Link>
              </div>
            </article>
            <article className="DronAiData__aiImage">
              <div className="DronAiData__background" />
              <h3 className="resetMargin DronAiData__mainText">
                AI데이터 수집
              </h3>
              <div className="DronAiData__info">
                테스트입니다.
                <Link to="/">Learn More</Link>
              </div>
            </article>
          </section>
        </div>
      </div>
    </>
  );
};

export default ThreeDrContainer;
