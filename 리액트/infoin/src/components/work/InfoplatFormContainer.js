import React from 'react';
import './InfoplatFormContainer.scss';

const InfoplatFormContainer = () => {
  return (
    <>
      <article className="infoplatForm">
        <h2 className="a11yHidden">인포프레임워크 대한 설명</h2>
        <dl>
          <dt className="infoplatForm__title">INFOPLATFORM</dt>
          <dd className="infoplatForm__content resetMargin">
            분석, 설계, 개발, 테스트 등 완성된 어플리케이션 서비스와 컴포넌트를
            제공하여 개발 및 운영 비용을 절감하고, 최상의 품질을 제공하는
            솔루션입니다.
          </dd>
        </dl>
        <div className="infoplatFormGroup">
          <div className="infoplatFormGroup__centerBorder" />
          <div className="infoplatFormGroup__item">
            <div>방법론 및 Open Source 컨설팅</div>
          </div>
          <div className="infoplatFormGroup__itemBlack">
            <div>
              서버 프레임워크
              <br />
              WEB
              <br />
              UI
              <br />
              서드 파티지원 모듈
              <br />
              배치 스케줄러
              <br />
              배치 관리
            </div>
          </div>
          <div className="infoplatFormGroup__item">
            <div>어플리케이션 및 컴포넌트 제공</div>
          </div>
          <div className="infoplatFormGroup__itemLast">
            <div>브랜드 커스터 마이징</div>
          </div>
        </div>
      </article>
      <article className="infoplatFormSkill">
        <h2 className="a11yHidden">인포프레임워크 기술 설명</h2>
        <div className="infoplatFormSkill__bar" />
        <div className="infoplatFormSkill__text">
          특허 기술인 실사 3D 데이터 용량 최적화를 넓은 대지 단위로 업그레이드
          기술 개발 실내·외 사진기반의 실사 3D 콘텐츠 제작을 통한 정확한
          정보전달 가능 스마트 홈 IoT와 가상 공간의 실시간 Data 를 통한 실사 3D
          제어 시스템 개발 인터넷이 가능한 곳에서 방문하지 않더라도 실제로
          방문한 체험 가능
        </div>
      </article>
    </>
  );
};

export default InfoplatFormContainer;
