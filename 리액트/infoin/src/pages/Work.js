import React, { useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import './Work.scss';
import WorkCircleItem from '../components/work/WorkCircleItem';
import RightNavBar from '../components/common/RightNavBar';
import WorkRectangleItem from '../components/work/WorkRectangleItem';
import WorkMiddleBox from '../components/work/WorkMiddleBox';

const Work = ({ location, match }) => {
  const [siMiddleTopData] = useState([
    { number: 1, content: '사용자 요구사항', en: 'Requirement' },
    { number: 2, content: '계획 및 분석', en: 'Planning & Analysis' },
    { number: 3, content: '설계', en: 'Architech' },
  ]);

  const [siMiddleBottomData] = useState([
    { number: 4, content: '개발 및 구축', en: 'Development & Customizing' },
    { number: 5, content: '시험 및 운영', en: 'Test & Implement' },
    {
      number: 6,
      content: '유지보수',
      en: 'Maintenance',
    },
  ]);

  const [serviceData] = useState([
    {
      one: '시스템 / DB설계, 구축',
      two: 'IT 인프라 및 네트워크',
      three: '모바일 어플리케이션',
      four: '기획, 설계 및 수행, 운영관리',
    },
    {
      one: 'IoT 클라우드 인프라 구축',
      two: 'IoT 서비스 기획',
      three: 'IoT 플랫폼 구축',
      four: '융복합 솔루션 구축 ',
    },
    {
      one: '3D 실내외 촬영',
      two: '빅데이터 플랫폼 개발 및 개선',
      three: '분석 알고리즘 설계',
      four: '빅데이터 융합 서비스 ',
    },
  ]);

  const ToggleNavActive = [
    { active: true, scrollTop: 'systemIntegration' },
    { active: false, scrollTop: 'navDataDiv' },
  ];

  const changeBarTop = [{ scrollPosition: 1627 }, { scrollPosition: 0 }];

  return (
    <>
      <Header menu="notHeaderColor" location={location} match={match} />
      <section className="systemIntegration">
        <h2 className="a11yHidden">
          SI에 관련된 일을 하고 어떠한 일을 하는지 설명함
        </h2>

        <article className="siInfo">
          <h3 className="a11yHidden">SI는 무엇인가</h3>

          <dl>
            <dt className="siInfo__fullName">System Integration</dt>
            <dd className="siInfo__info resetMargin">
              고객의 욕구를 충족과 사업 성공을 위하여 컴퓨터와 주변기기, 각종
              소프트웨어, 통신망 시스템을 개발·유지하는데 필요한 인력을 시스템
              통합 사업자의 책임하에 조달, 확보하여 제공하는 서비스입니다.
            </dd>
          </dl>
        </article>
        <article className="siProcess">
          <h3 className="siProcess__heading">SI 서비스 과정</h3>
          <div className="siProcess__part">
            <div className="siProcess__barLeft"></div>
            <div className="siProcess__barRight"></div>
            <WorkCircleItem siData={siMiddleTopData} />
          </div>
          <div className="siProcess__part">
            <div className="siProcess__barLeft"></div>
            <div className="siProcess__barRight"></div>
            <WorkCircleItem siData={siMiddleBottomData} />
          </div>
        </article>

        <article className="siService">
          <h3 className="a11yHidden">어떤 SI 서비스를 제공하는 지</h3>
          <div className="siServiceTitle">
            <FaQuoteLeft />
            &emsp; IT 전문 기업으로서 <b>최고의 기술과 서비스</b>를
            제공하겠습니다. &emsp;
            <FaQuoteRight />
          </div>
          <div className="rectangleGroup">
            <WorkRectangleItem siData={serviceData} />
          </div>
          <div className="footerTitle">
            고객 만족과 기업 경쟁력 향상을 목표로 최상의 IT 서비스를 제공합니다.
            <br />
            다양한 분야의 전문가를 바탕으로 수준 높은 기술력과 풍부한 경험으로
            최고의 시스템 구축서비스를 제공합니다.
            <br />
            성공적인 프로젝트를 위해 고객만족, IT 시스템 안정, 고품질 운영
            시스템 개발을 추구합니다.
            <br />
          </div>
        </article>
      </section>
      <WorkMiddleBox />
      <RightNavBar
        ToggleNavActiveData={ToggleNavActive}
        changeBarTop={changeBarTop}
      />
      <Footer />
    </>
  );
};

export default Work;
