import React from 'react';
import './IotContainer.scss';
import { FaGrinAlt } from 'react-icons/fa';

const IotContatiner = () => {
  return (
    <>
      <article className="IotInfo">
        <h2 className="a11yHidden">IoT 이미지와 요약과 설명</h2>
        <dl className="IotInfo__text">
          <dt>IOT SOLUTION</dt>
          <dd className="resetMargin">
            집 안은 물론 아파트단지 또는 외부의 데이터를 디바이스와 연동하여 집
            상태나 보안 등<br /> 어디서나 실시간으로 다양한 서비스를 제공하는
            서비스입니다.
          </dd>
        </dl>
      </article>

      <section className="IotInfoList">
        <h2 className="a11yHidden">Iot 부서에서 하는 일</h2>
        <div className="IotInfoGroup">
          <article className="IotInfoGroup__Circle">
            <dl className="resetMargin">
              <dt>
                <h3 className="resetMargin" lang="en">
                  Platform
                </h3>
              </dt>
              <dd className="resetMargin">
                IoT 클라우드 인프라 구축
                <br />
                시스템 / DB설계, 구축
                <br />
                IT 인프라 및 네트워크
              </dd>
            </dl>
          </article>
          <article className="IotInfoGroup__Circle">
            <dl className="resetMargin">
              <dt>
                <h3 className="resetMargin" lang="en">
                  Big Data
                </h3>
              </dt>
              <dd className="resetMargin">
                빅데이터 플랫폼
                <br />
                분석 알고리즘
                <br />
                빅데이터 융합 서비스
              </dd>
            </dl>
          </article>
          <article className="IotInfoGroup__Circle">
            <dl className="resetMargin">
              <dt>
                <h3 className="resetMargin" lang="en">
                  Service
                </h3>
              </dt>
              <dd className="resetMargin">
                홈 Iot 서비스 기획
                <br />
                홈 Iot 플랫폼 구축
                <br />
                사후관리
              </dd>
            </dl>
          </article>
          <article className="IotInfoGroup__Circle">
            <dl className="resetMargin">
              <dt>
                <h3 className="resetMargin" lang="en">
                  Device
                </h3>
              </dt>
              <dd className="resetMargin">
                홈 네트워크 협력 파트너 발굴
                <br />홈 iOT 기능형 디바이스 라인업
              </dd>
            </dl>
          </article>
        </div>
      </section>
      <section className="IotFunction">
        <h2 className="a11yHidden">Iot가 생활에 어떤 식으로 사용 되는가</h2>
        <article>
          <h3 className="a11yHidden">아직 정해지지 않은 컨텐츠 입니다.</h3>
          <div className="width50p">
            <img src="/images/27.png" alt="미정" />
          </div>
          <div className="width50p contentPart">
            <div>
              <div className="contentPart__smileIcon">
                <FaGrinAlt size="50" />
              </div>
            </div>
            <div className="contentPart__title">안전하게 이용하세요!</div>
            <div className="contentPart__content">
              집 안은 물론 아파트 단지 또는 외부의 데이터를 디바이스와 연동하여
              집 상태나 보안 등 어디서나 실시간으로 다양한 서비스를 제공하는
              서비스입니다.집 안은 물론 아파트 단지 또는 외부의 데이터를
              디바이스와 연동하여 집 상태나 보안 등 어디서나 실시간으로 다양한
              서비스를 제공하는 서비스입니다.
            </div>
            <div className="contentPart__btnGroup">
              <button className="contentPart__btnGroup-btn">전등</button>
              <button className="contentPart__btnGroup-btn">TV</button>
            </div>
          </div>
        </article>
        <article>
          <h3 className="a11yHidden">아직 정해지지 않은 컨텐츠 입니다.</h3>
          <div className="width50p contentPart">
            <div>
              <div className="contentPart__smileIcon">
                <FaGrinAlt size="50" />
              </div>
            </div>
            <div className="contentPart__title">스마트하게 생활하세요!</div>
            <div className="contentPart__content">
              집 안은 물론 아파트 단지 또는 외부의 데이터를 디바이스와 연동하여
              집 상태나 보안 등 어디서나 실시간으로 다양한 서비스를 제공하는
              서비스입니다.집 안은 물론 아파트 단지 또는 외부의 데이터를
              디바이스와 연동하여 집 상태나 보안 등 어디서나 실시간으로 다양한
              서비스를 제공하는 서비스입니다.
            </div>
            <div className="contentPart__btnGroup">
              <button className="contentPart__btnGroup-btn">전등</button>
              <button className="contentPart__btnGroup-btn">TV</button>
            </div>
          </div>
          <div className="width50p">
            <img src="/images/29.png" alt="미정" />
          </div>
        </article>
        <article>
          <h3 className="a11yHidden">아직 정해지지 않은 컨텐츠 입니다.</h3>
          <div className="width50p">
            <img src="/images/28.png" alt="미정" />
          </div>
          <div className="width50p contentPart">
            <div>
              <div className="contentPart__smileIcon">
                <FaGrinAlt size="50" />
              </div>
            </div>
            <div className="contentPart__title">스마트하게 생활하세요!</div>
            <div className="contentPart__content">
              집 안은 물론 아파트 단지 또는 외부의 데이터를 디바이스와 연동하여
              집 상태나 보안 등 어디서나 실시간으로 다양한 서비스를 제공하는
              서비스입니다.집 안은 물론 아파트 단지 또는 외부의 데이터를
              디바이스와 연동하여 집 상태나 보안 등 어디서나 실시간으로 다양한
              서비스를 제공하는 서비스입니다.
            </div>
            <div className="contentPart__btnGroup">
              <button className="contentPart__btnGroup-btn">전등</button>
              <button className="contentPart__btnGroup-btn">TV</button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default IotContatiner;
