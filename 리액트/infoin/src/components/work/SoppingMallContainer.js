import React from 'react';
import './ShoppingMallContainer.scss';
import {
  FaAndroid,
  FaUserCheck,
  FaBox,
  FaPencilAlt,
  FaMoneyBillWave,
  FaGithubAlt,
  FaCarSide,
  FaWrench,
  FaSearch,
  FaAssistiveListeningSystems,
} from 'react-icons/fa';

const SoppingMallContainer = () => {
  return (
    <>
      <section className="shoppingMall">
        <h2 className="a11yHidden">쇼핑몰 기능 설명</h2>
        <dl>
          <dt className="shoppingMall__title">SHOPPING MALL</dt>
          <dd className="shoppingMall__content resetMargin">
            회원 / 매출 / 통계관리부터 상품별, 고객별 관리까지 다양한 기능을
            제공하는 솔루션 입니다. 관리가 미숙해도 고객 맞춤형으로 제공되며,
            전문적인 쇼핑몰 운영이 가능합니다.
          </dd>
        </dl>
        <div className="articleContainer">
          <article className="articleContainer__item">
            <div className="articleContainer__item-icon">
              <FaAndroid size="80px" />
            </div>
            <h3 className="articleContainer__item-title resetMargin">
              디바이스
            </h3>
            <div className="articleContainer__item-content">미정</div>
          </article>
          <article className="articleContainer__item">
            <div className="articleContainer__item-icon">
              <FaUserCheck size="80px" />
            </div>
            <h3 className="articleContainer__item-title resetMargin">
              회원 관리
            </h3>
            <div className="articleContainer__item-content">미정</div>
          </article>
          <article className="articleContainer__item">
            <div className="articleContainer__item-icon">
              <FaCarSide size="80px" />
            </div>
            <h3 className="articleContainer__item-title resetMargin">
              상품 관리
            </h3>
            <div className="articleContainer__item-content">미정</div>
          </article>
          <article className="articleContainer__item">
            <div className="articleContainer__item-icon">
              <FaPencilAlt size="80px" />
            </div>
            <h3 className="articleContainer__item-title resetMargin">
              리뷰 관리
            </h3>
            <div className="articleContainer__item-content">미정</div>
          </article>
          <article className="articleContainer__last">
            <div className="articleContainer__item-icon">
              <FaMoneyBillWave size="80px" />
            </div>
            <h3 className="articleContainer__item-title resetMargin">
              배송관리 및 결제시스템 지원
            </h3>
            <div className="articleContainer__item-content">
              각종 배송관리, 결제사(PG, api) 연동이 가능합니다.
            </div>
          </article>
        </div>
        <div className="articleContainer">
          <article className="articleContainer__item">
            <div className="articleContainer__item-icon">
              <FaGithubAlt size="80px" />
            </div>
            <h3 className="articleContainer__item-title resetMargin">
              분석 및 보고
            </h3>
            <div className="articleContainer__item-content">미정</div>
          </article>
          <article className="articleContainer__item">
            <div className="articleContainer__item-icon">
              <FaBox size="80px" />
            </div>
            <h3 className="articleContainer__item-title resetMargin">
              주문 관리
            </h3>
            <div className="articleContainer__item-content">미정</div>
          </article>
          <article className="articleContainer__item">
            <div className="articleContainer__item-icon">
              <FaWrench size="80px" />
            </div>
            <h3 className="articleContainer__item-title resetMargin">
              시스템 관리
            </h3>
            <div className="articleContainer__item-content">미정</div>
          </article>
          <article className="articleContainer__item">
            <div className="articleContainer__item-icon">
              <FaSearch size="80px" />
            </div>
            <h3 className="articleContainer__item-title resetMargin">
              검색관리
            </h3>
            <div className="articleContainer__item-content">
              인기, 교차, 관련 등 조건에 맞는 최적의 상품검색이 가능합니다.
            </div>
          </article>
          <article className="articleContainer__last">
            <div className="articleContainer__item-icon">
              <FaAssistiveListeningSystems size="80px" />
            </div>
            <h3 className="articleContainer__item-title resetMargin">
              프로모션 & 마케팅
            </h3>
            <div className="articleContainer__item-content">미정</div>
          </article>
        </div>
      </section>
    </>
  );
};

export default SoppingMallContainer;
