import React, { useState, useCallback } from 'react';
import cn from 'class-names';
import { FaMailBulk, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import './AboutUs.scss';
import './Animation.scss';
import RightNavBar from '../components/common/RightNavBar';

const AboutUs = ({ location, match }) => {
  const [documentBoxOpen, setDocumentBoxOpen] = useState(false);

  const TogleBusiness = useCallback(() => {
    if (documentBoxOpen) {
      setDocumentBoxOpen(false);
    } else {
      setDocumentBoxOpen(true);
    }
  }, [documentBoxOpen]);

  const ToggleNavActive = [
    { active: true, scrollTop: 'aboutUsContainer__Article1' },
    { active: false, scrollTop: 'aboutUsContainer__Article2' },
    { active: false, scrollTop: 'aboutUsContainer__Article3' },
    { active: false, scrollTop: 'aboutUsContainer__Article4' },
  ];

  const changeBarTop = [
    { scrollPosition: 2800 },
    { scrollPosition: 1700 },
    { scrollPosition: 600 },
    { scrollPosition: 0 },
  ];

  return (
    <>
      <Header menu="notHeaderColor" location={location} match={match} />
      <main role="main" className="aboutUsContainer">
        <h2 className="a11yHidden">인포인 회사정보와 인사말 연혁</h2>
        <article className="aboutUsContainer__Article1 aboutUsContainer__article">
          <h3 className="a11yHidden">회사 정보와 문서 다운로드</h3>
          <img
            className="aboutUsContainer__Article1-image"
            src="/images/4202.png"
            alt=""
            aria-hidden
          />
          <dl className="aboutInfoBox">
            <dt className="aboutInfoBox__title">ABOUT INFOIN</dt>
            <dd className="aboutInfoBox__text resetMargin">
              사람 안의 정보 기술 그리고, 사물 인터넷 세대를 살아가는 사람들
              <br />
              사이의 기술인 펄스를 제공하는 국내 최고의 기술 솔루션 개발 기업을
              <br />
              목표로 설립되었습니다.
            </dd>
          </dl>
          <div className="documentBox">
            <div className={cn('documentBox__Group', { on: documentBoxOpen })}>
              <div className="documentBox__Group-div">
                <span
                  className="documentBox__Group-a docButton1 focusEvent"
                  onClick={TogleBusiness}
                >
                  BUSINESS VALUE
                </span>
                <a
                  className="documentBox__Group-a docButton2"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  회사소개서
                </a>
                <a
                  className="documentBox__Group-a docButton3"
                  href="/download/venture.pdf "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  벤처기업확인서
                </a>
                <a
                  className="documentBox__Group-a docButton4"
                  href="/download/laboratory.pdf "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  연구소인증서
                </a>
                <a
                  className="documentBox__Group-a docButton5"
                  href="/download/copyright.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  저작권등록증
                </a>
                <a
                  className="documentBox__Group-a docButton6"
                  href="/download/attestation_total.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  출원사실증명
                </a>
                <a
                  className="documentBox__Group-a docButton7"
                  href="/download/certificate_3d.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  특허
                </a>
              </div>
            </div>
          </div>
        </article>
        <article className="aboutUsContainer__Article2 aboutUsContainer__article">
          <h3 className="aboutUsContainer__Article2-title">
            CEO 인사말과 연혁
          </h3>
          <div className="greetingsDiv">
            <div className="greetingsDiv__title">
              [Information technology For 人, In For 人, 人 For 人]
            </div>
            <blockquote className="resetMargin">
              <p className="greetingsDiv__Content">
                안녕하세요. (주)인포인 대표이사 정재원 입니다.
                <br /> 인포인은 시스템 공학 기술을 바탕으로, 정보기술을 이용하여
                사람을 위한 서비스를 제공하고자 2015년 설립되었습니다. IoT 및
                생산공정 데이터 기반 플랫폼 개발 기술로 기술 역량 우수기업
                인증서를 획득, 최적화 압축 3D 데이터 제공시스템에 대한 특허를
                가지고 있습니다. 4차 산업혁명의 흐름 속에서 시스템 통합을
                시작으로, IoT 솔루션과 3D 모델링 및 제작 솔루션으로 다가오는
                미래를 준비하고 있습니다. 현대 사회는 디지털 기술을 사회에
                적용하여 전통적인 사회 구조를 혁신시키는 디지털 트랜스
                포메이션에 가속도가 붙기 시작했습니다. 이에 발맞추어 올해부터는
                디지털 트윈 기술을 접목한 IoT와 3D 제작 솔루션의 융복합을 통한
                사업 확대를 하고 있으며, 국내를 넘어 해외까지 확장할 것입니다.
                <br /> 공유, 배려, 상생이라는 단어를 가슴속에 새겨서 임직원 간의
                시너지를 만들고, 평생 직업이 아닌 평생직장으로써 임직원이 행복한
                회사가 되기 위해 힘쓰며, 편리함과 편안함, 신뢰를 주는 회사로
                기억되도록 노력할 것입니다.
                <br />
                감사합니다.
              </p>
              <footer className="greetingsDiv__name">
                <span className="greetingsDiv__name-position">대표이사</span>

                <img
                  className="greetingsDiv__name-image"
                  src="/images/invalid-name.png"
                  alt="정재원 대표님 이름"
                />
              </footer>
            </blockquote>
          </div>
          <div className="historyDiv">
            <div className="circleCrossbar"></div>
            <div className="historyDiv__group">
              <span className="historyDiv__group-year">2015</span>
              <div className="historyDiv__content">
                <span className="historyDiv__content-date">11</span>
                <span>회사 설립</span>
              </div>
              <div className="historyDiv__group-blackCircle"></div>
            </div>
            <div className="historyDiv__group">
              <span className="historyDiv__group-year">2016</span>
              <div className="historyDiv__content">
                <span className="historyDiv__content-date">02</span>
                <span>본사 이전(서울특별시 서초구)</span>
              </div>
              <div className="historyDiv__group-blackCircle"></div>
            </div>
            <div className="historyDiv__group">
              <span className="historyDiv__group-year">2017</span>
              <div className="historyDiv__content">
                <span className="historyDiv__content-date">08</span>
                <span>INFOWEB 저작권 등록</span>
                <br />
                <span className="historyDiv__content-date">04</span>
                <span>기업부설연구소 설립</span>
                <br />
                <span className="historyDiv__content-date">01</span>
                <span>(주)코오롱베니트 고객사 지정</span>
                <br />
              </div>
              <div className="historyDiv__group-blackCircle"></div>
            </div>
            <div className="historyDiv__group">
              <span className="historyDiv__group-year">2018</span>
              <div className="historyDiv__content">
                <span className="historyDiv__content-date">08</span>
                <span>벤처기업 등록</span>
                <br />
                <span className="historyDiv__content-date">05</span>
                <span>본사 확장이전(서울특별시 서초구)</span>
                <br />
              </div>
              <div className="historyDiv__group-blackCircle"></div>
            </div>
            <div className="historyDiv__group">
              <span className="historyDiv__group-year">2019</span>
              <div className="historyDiv__content">
                <span className="historyDiv__content-date">08</span>
                <span>맞춤형 무대영상 제공 시스템 특허 등록</span>
                <br />
                <span className="historyDiv__content-date">06</span>
                <span>한국기업데이터(주) 기술역량 우수기업 인증</span>
                <br />
                <span className="historyDiv__content-date">02</span>
                <span>최적화 압축 3D 데이터 제공 시스템 특허 등록</span>
                <br />
              </div>
              <div className="historyDiv__group-blackCircle"></div>
            </div>
            <div className="historyDiv__group">
              <span className="historyDiv__group-year">2020</span>
              <div className="historyDiv__content"></div>
              <div className="historyDiv__group-blackCircle"></div>
            </div>
          </div>
        </article>
        <article className="aboutUsContainer__Article3 aboutUsContainer__article">
          <h3 className="a11yHidden">인포인 회사 협력사</h3>
          <div className="partnership">
            <dl>
              <dt className="partnership__title" leng="en">
                OUR CLIENT
              </dt>
              <dd className="partnership__content resetMargin">
                고객의 브랜드를 함께 고민하고 문제점을 파악하고 더 나은 브랜드가
                될 수 있도록 경험과 열정을 통해 새로운 브랜드 서비스를
                인포인에서 제공합니다.
              </dd>
            </dl>
          </div>
          <div className="partnershipGroup">
            <div className="partnershipDiv">
              <div className="partnershipDiv__imageGroup">
                <img
                  className="partnershipDiv__image"
                  src="/images/3789.png"
                  alt="코오롱 고객사"
                />
              </div>
              <div className="partnershipDiv__imageGroup">
                <img
                  className="partnershipDiv__image"
                  src="/images/3786.png"
                  alt="폭스바겐 고객사"
                />
              </div>
              <div className="partnershipDiv__imageGroup">
                <img
                  className="partnershipDiv__image"
                  src="/images/88.png"
                  alt="트니트니 고객사"
                />
              </div>
            </div>
            <div className="partnershipDiv">
              <div className="partnershipDiv__imageGroup">
                <img
                  className="partnershipDiv__image"
                  src="/images/3787.png"
                  alt="중소벤처기업진흥공단 고객사"
                />
              </div>
              <div className="partnershipDiv__imageGroup">
                <img
                  className="partnershipDiv__image"
                  src="/images/87.png"
                  alt="다음소프트 고객사"
                />
              </div>
              <div className="partnershipDiv__imageGroup">
                <img
                  className="partnershipDiv__image"
                  src="/images/3799.png"
                  alt="엠엔서비스"
                />
              </div>
            </div>
          </div>
        </article>
        <article className="aboutUsContainer__Article4 aboutUsContainer__article">
          <h3 className="a11yHidden">인포인 오시는 길과 전화번호</h3>
          <div className="infoinMap">
            <div className="infoinMap__kakaoMap">
              <img src="/images/3.png" alt="회사 위치 지도표시" />
            </div>
            <div className="infoinMap__info">
              <div className="infoinMap__info-text">오시는 길</div>
              <div className="infoinMap__info-address">
                <FaMapMarkerAlt className="infoinMap__info-icon" size="40px" />
                <b>서울특별시 강남구 테헤란로 4길 32, 우정에쉐르 206호</b>
                <br />
                2호선 강남역에서 500m, 도보 약 9분
              </div>
              <div className="infoinMap__info-tel">
                <FaPhoneAlt className="infoinMap__info-icon" size="40px" />
                <span className="info-pt">02-599-1601</span>
              </div>
              <div className="infoinMap__info-email">
                <FaMailBulk className="infoinMap__info-icon" size="40px" />
                <span className="info-pt">szipz@hanmail.net</span>
              </div>
            </div>
          </div>
        </article>
        <RightNavBar
          ToggleNavActiveData={ToggleNavActive}
          changeBarTop={changeBarTop}
        />
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
