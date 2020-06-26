import React from 'react';
import Header from '../components/common/Header';
import './Profile.scss';
import Footer from '../components/common/Footer';

const Protfolio = ({ location, match }) => {
  return (
    <>
      <Header menu="notHeaderColor" location={location} match={match} />
      <main role="main" className="profileContainer">
        <h2 className="a11yHidden">
          인포인에서 포토폴리오 내용과 이미지를 보여주는 페이지
        </h2>
        <article className="profileContainer__Article1 profileContainer__article">
          <h3 className="a11yHidden">인포인에서 개발한 트니트니 웹 정보</h3>
          <div className="tntnText">
            <div>
              Teuni Teuni
              <br />
              Web & Application
              <br />
              Renewal
              <br />
            </div>
          </div>
          <div className="tntnImage__imgGroup">
            <img
              className="tntnImage__imgGroup-background"
              src="/images/layer-2-copy-3.png"
              alt=""
              aria-hidden
            />
            <img
              className="tntnImage__imgGroup-character"
              src="/images/vector-smart-object.png"
              alt="트니트니 대표 캐릭터"
            />
            <img
              className="tntnImage__imgGroup-phone"
              src="/images/i-phone-xs-white-clay.png"
              alt=""
              aria-hidden
            />
            <img
              className="tntnImage__imgGroup-phoneContent"
              src="/images/change-this.png"
              alt="개발한 트니트니 모바일"
            />
            <img
              className="tntnImage__imgGroup-desktop"
              src="images/group-2.png"
              alt=""
              aria-hidden
            />
            <img
              className="tntnImage__imgGroup-desktopContent"
              src="/images/paste-image-here.png"
              alt="개발한 트니트니 데스크톱"
            />
          </div>
        </article>
        <article className="profileContainer__Article2 profileContainer__article">
          <h3 className="a11yHidden">트니트니에 대한 설명</h3>
          <img
            className="profileContainer__Article2-tnImage"
            src="/images/layer-3.png"
            alt="트니트니 아이들"
          />
          <dl className="profileContainer__Article2-info">
            <dt>Overview</dt>
            <dd className="resetMargin">
              ‘튼튼한 아이’의 순우리말 표현인 ‘트니트니’는 만 1~7세 가량의
              영·유아를 둔 부모님 및 가르치는 선생님들에게 올바른 지식을
              전달함과 동시에 아이들이 건강하고 바르게 성장 할 수 있도록 교육과
              문화를 선도하는 국내 1위 콘텐츠 기업입니다. 기존 트니트니의 콘텐츠
              큐레이션을 통해 개선된 ‘사용의 편의성’을 목표로 하였고, 새로운
              모바일 App 개편을 위해 기획, 디자인, 개발, 운영 등을 함께
              고민하였습니다.
            </dd>
          </dl>
        </article>
        <article className="profileContainer__article profileContainer__Article3">
          <h3 className="a11yHidden">UX UI 디자인 기획에 대한 설명</h3>
          <b className="profileContainer__Article3-planHeading">
            Application <br />
            UX Wireframe
          </b>
          <p className="profileContainer__Article3-planText">
            저희는 트니트니와 원활한 소통으로 어플의 시각적, 사용의 편의성,
            개발의 효율성 등을 같이 고민하고 연구하며, 기존 틀에 벗어나지 않은
            디자인 메뉴얼을 철저히 준수하면서 UX/UI 기획을 진행하였습니다.
          </p>
          <div className="profileContainer__Article3-block"></div>
          <img
            src="/images/layer-14.png"
            className="profileContainer__Article3-planImage1"
            alt="기획 이미지"
          />
          <img
            src="/images/layer-15.png"
            className="profileContainer__Article3-planImage2"
            alt="기획 이미지"
          />
          <img
            src="/images/layer-9.png"
            className="profileContainer__Article3-planImage3"
            alt="기획 이미지"
          />
          <img
            src="/images/layer-10.png"
            className="profileContainer__Article3-planImage4"
            alt="기획 이미지"
          />
          <img
            src="/images/layer-11.png"
            className="profileContainer__Article3-planImage5"
            alt="기획 이미지"
          />
        </article>
        <article className="profileContainer__article profileContainer__Article4">
          <h3>회사가 어떤식으로 개발하는 지에 대한 설명</h3>
          <b className="profileContainer__Article4-devHeading">
            Application
            <br />
            SI & SM
          </b>
          <div className="profileContainer__Article4-block"></div>
          <p className="profileContainer__Article4-devText">
            앞서 UX/UI 기획을 통해 좀 더 효율적으로사용함에 있어 포커스를 맞추어
            개발환경 구축하고, Front 개발부터 운영까지 트니트니에 최적화 된
            어플케이션 개발을 진행하였습니다.
          </p>
          <img
            className="profileContainer__Article4-img"
            src="/images/effects-copy.png"
            alt="개발한 어플들의 모습"
          />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Protfolio;
