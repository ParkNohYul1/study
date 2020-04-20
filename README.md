# 개인 공부용 레파지토리

## 공부 순서

리액트 + 학원 => 안드로이드 + 스위프트 => 자료구조 + 알고리즘 => 스프링 부트 => 포렌식 => 네트워크  
 목표: 사이버 수사대 특채

### 초기 스터디 생성 - (후배 조서희, 대학원생 권찬민) 1기

```
0328 // (조서희) 개강으로 인해 놀 수 있도록 스터디를 이번주 스터디를 안한다고 스터디원에게 전달   
0329 // 어떤식으로 스터디를 할까 스터디원들과 회의  
0330 // 스터디에 대한 내용 각 스터디원에게 전달  
0330 // 학원 숙제 깃 제출 예시를 보고 포폴로 쓸수있을 것 같아서 취업때 낸다고 pptx로 말고 깃으로 정리하라고 지시함
0330 // 회사 지원 자격 확인 후에 공부를 시키기위해 가고 싶은 회사 적어오라고 시킴
0330 // 스터디 맴버에게 공부 했는 지 개인적으로 한명씩 물어봄
0330 // ~~주말에 깜짝 테스트를 보기로 함. 금요일날 자료 준비~~ - 진도 안맞아서 생략
0331 // 스터디원 공부 지시  
0401 // 토요일 스터디 시간 회의(12시에 모이기로 함.) 첫 스터디다 보니 어색함을 없애기 위해 밥을 사주기로 했음.  
0402 // 스터디원에게 어디까지 공부했는지 확인    
0403 // 공부안한 스터디원 체크 후 공부하라고 지시   
0404 // 아침에 일어나 스터디 준비중   
0404 // 첫스터디이여서 밥을 사줌(5)   
0404 // 스터디 어떻게 진행 할건지 회의. 진도 안맞아서 다음주까지 마쳐오라고함 - 모여서   정리하고 돌아가면서 설명하기로 했음  
0408 // 스터디가 끝난 후에 영어 스터디를 하면 어떨까 라는 대화를 했음  
0409 // 스터디 토요일 시간 회의, 식사 여부 확인  
0411 // 서희 아파서 미참석, 찬민 스터디 참석   
0413 // 서희 수요일날 스터디 일정 잡음  
0414 // 서희 연락해서 스터디 시간 확인  
0415 // 서희 열이나서 미참  
0417 // 서희 스터디 19시 잡음  
0417 // 스터디 완료 후 지하철 끈켜서 식사(2.5) 후에 카드 빌려줌 (버스타고감)  
0418 // 스터디 13시30분에 시작  
0419 // 서희 스터디 탈퇴, 식사(2.1)
- 프론트엔드 스터디
- 리액트 스터디
```

<details>
  <summary>회사</summary>

```
0329 // 회사 변경된 프론트 엔드에 대해 자바 적용 (백엔드) 월요일 까지 적용
0330 // 회사 파일에 대한 백업 진행
0330 // 회사 주간 보고 회의
0330 // 지도 태그 관련 SQL문 수정
0331 // 헤더 메뉴에 달력 관련 기능 추가 (마크업 + 백엔드)
0401 // 헤더 메뉴 클릭시 달력 드롭다운을 만든 후에 예약된 날짜가 있는 곳에 하이라이트 처리, 클릭시 예약된 정보 출력
0402 // 개발한 페이지에 대해서 모든 테스트 진행
0402 // 최초 진입 화면 프론트(완성) 기능연동해야됨
0402 // 헤더 메뉴에 달력 UI 수정 + 디자이너랑 같이 진행
0403 // 로그인 시 예약이 없으면 최초 진입 화면 프론트한 페이지가 열리도록 로직 처리
0404 // 달력 자바스크립트 에러나서 수정 해야됨
0408 // 달력 프론트 + 서버 완성 내일 프로필 드롭다운 개발
0408 // 달력 프론트 완성(검토전)함 프로필 드롭다운 오늘안에 개발, 선생님 찾기 태그 수정
0409 // 헤더 메뉴 눌렀을 때 드롭다운 기능 구현 완료, 프로필 달력 드롭다운 완성
0410 // 닫을때마다 터질려고 하는 버그 해결, 가끔 안나오는 버그 분석중, SQL 취소 내역까지 나오는 버그 처리해야됨
0412 // 달력 수업취소내역 안나오게 처리, 수업없을때 나오는 페이지 수업 장소 없을때 나오게 SQL문
0413 // 수업 목록 팝업창 프론트 수정
0414 // 메뉴 관리페이지 메뉴가 바껴서 해당 메뉴에 맞게 자바스크립트 분석 후에 수정
0415 // 공부 후에 다시 분석
0417 // 메뉴 관리 페이지 강사와 어드민쪽 완성
0419 // 리액트 공부 시작 
```

</details>

<details>
  <summary>운동</summary>

0328 // 코로나로 인해 문이 닫힘
0408 // 20일부터 헬스장 PT

</details>

---

# 리액트 공부

<details>
  <summary>1일차 학습</summary>

#### [리액트란?]

```
리액트는 페이스북에서 제공해주는 프론트엔드 라이브러리입니다.
```

- 리액트는 컴포넌트 기반으로 되어있어서 컴포넌트에 데이터를 내려주면 개발자가 설계한대로 UI가 만들어져 사용자에게 보여집니다.
- 작은 컴포넌트들은 다른 화면에서도 사용될 수 있는 재사용성을 가지고 있기 때문에 똑같은 코드를 반복적으로 입력할 필요가 없어서
  효율적입니다.

```
리액트는 컴포넌트 기반으로 되어 있다.
```

```
리액트는 단방향 데이터 흐름이다.
```

- 리액트는 단방향으로 가기 때문에 밑에서 데이터를 올려줄 수는 없다. 그렇기 때문에 state를 이용하여 부모의 데이터를 바까줘야 합니다.

#### [PROPS와 STATE]

- props

```
- props는 부모 컴포넌트에게 자식 컴포넌트를 전달해 주는 데이터를 말합니다.
- read only 무조건 읽기 전용 데이터 입니다.
- 자식 컴포넌트에서 전달 받은 props는 변경이 불가는 하고 props를 전달해준 최상위 부모 컴포넌트만 props를 변경할
수 있습니다.
```

- state

```
- state는 동적인 데이터를 다룰 때 사용합니다.
- 사용자와의 상호작용을 통해 데이터를 동적으로 변경을 해야할때 사용합니다.
- state는 클래스형 컴포넌트에서만 접근이 가능하다. 하지만 각각의 state는 독립적이라 다른 컴포넌트에서 접근이
불가능합니다.
- 자신보다 상위에 있는 state는 변경이 가능 하지만 변경해주는 함수를 props로 받는다면 state의 변경이 가능합니다.
- props로 넘겨줄 때에 this의 binding을 신경써야 합니다.
```

#### [VIRTUAL DOM]

```
Virtual DOM은 가상의 Document Object Model을 말한다.
```

- HTML코드를 짜고 웹 브라우저에서 HTML 파일을 열게되면 HTML들이 DOM을 만들게 됩니다. 그리고 코드를 특정 한 부분이 변경되면 전체 DOM을 새롭게 만들게 되어 비 효율적입니다. 하지만 리액트에서는 이러한 단점이 해결됩니다.

```
리액트는 가상의 DOM을 만들어서 진짜 DOM과 비교하여 변경 사항이 있을 경우 전체를 새롭게 만드는게 아니라
변경된 부분만 진짜 DOM의 반영하는 방식으로 작업을 수행한다. 앱의 효율성과 속도가 높아진다.
```

#### [JSX]

-JSX는 무엇인가.

    JSX는 공식적인 자바스크립트 문법이 아니고 바벨에서는 여러 문법을 지원 할 수 있도록 preset 및 plugin을 설정합니다.
    바벨을 통해 개발자들이 임의로 만든 문법, 혹은 자기 자바스크립트의 문법을 사용할 수 있습니다.

- 장점

  - 보기 익숙하다.
  - 더욱 높은 활용도

- 문법

  - 컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야합니다.
  - 부모를 반드시 필요로 하다면 fragment를 사용하면 됩니다.
  - Fragment 태그 생략이 가능합니다.

  ```
  import React, { Fragment } from 'react';            import React, { Fragment } from 'react';

  function App() {                                    function App() {
    return (                                            return (
      <Fragment>                                          <>
        <h1>리액트 안녕!</h1>                                <h1>리액트 안녕!</h1>
        <h2>잘 작동하니?</h2>                                <h2>잘 작동하니?</h2>
      </Fragment>                                         </>
    );                                                  );
  }                                                   }
  ```

#### [삼항연산자]

- 리액트에서는 JSX 내부에서 IF문을 사용 할 수 없습니다. 하지만 내용을 랜더링해야 할 때는 JSX 밖에서 IF문을 사용하여 사전에 값을 설정하거나
  {} 안에 조건부 연산자(삼항 연산자)를 사용 하면 됩니다.

```jsx
import React from "react";

function App() {
  const name = "리액트";
  return (
    <div>
      {name === "리액트" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
    </div>
  );
}
```

#### [조건문 true 일때 처리]

&& 를 사용하면 조건이 true 처리할 수 있습니다.

```jsx
import React from "react";

function App() {
  const name = "뤼왝트";
  return <div>{name === "리액트" ? <h1>리액트입니다.</h1> : null} </div>;
}

export default App;
```

```jsx
import React from "react";

function App() {
  const name = "뤼왝트";
  return <div>{name === "리액트" && <h1>리액트입니다.</h1>} </div>;
}

export default App;
```

#### [조건문 null 이거나 undefined 일때 처리]

|| 를 사용하면 조건이 null이거나 undefined일때 처리할 수 있습니다.

```jsx
import React from 'react';
import './App.css';

function App() {
  const name = undefined;
  return <div>{name || 리액트'} </div>;
}

export default App;
```

#### [리액트 인라인 스타일 적용]

리액트 요소 인라인 스타일 적용시 객체 형태로 적용 시켜야 합니다.

- 스타일 이름 중에 - 를 포함 한 것이 있다면 -를 없애고 카멜 표기법으로 작성해야 합니다.

  변수로 작성

  ```jsx
  import React from "react";
  import "./App.css";

  function App() {
    const name = "리액트";
    const style = {
      // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
      backgroundColor: "black",
      color: "aqua",
      fontSize: "48px", // font-size -> fontSize
      fontWeight: "blod", // font-weight -> fontWeight
      padding: 16, // 단위를 생략하면 px로 지정됩니다.
    };
    return <div style={style}>{name}</div>;
  }

  export default App;
  ```

  style 안에 지정해서 작성

  ```jsx
  import React from "react";
  import "./App.css";

  function App() {
    const name = "리액트";
    const style = {
      // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
      backgroundColor: "black",
      color: "aqua",
      fontSize: "48px", // font-size -> fontSize
      fontWeight: "blod", // font-weight -> fontWeight
      padding: 16, // 단위를 생략하면 px로 지정됩니다.
    };
    return <div style={style}>{name}</div>;
  }

  export default App;
  ```

  </details>

  <details open>
    <summary>14일차 학습</summary>

#### [JSX에서는 닫는 태그 필수]

br 태그와 input 태그 같이 닫는 태그가 없어도 상관없는 태그는 JSX에서도 에러가 납니다.

[잘못된 코드]

```
  <form>
    <input type="text">
    <br>
  </form>
```

```
import React from 'react';
import './App.css';

function App() {
  const name = '리액트';
  return {
    <>
      <div className="react">[name]</div>
      <input>
    </>
  }
}

export default App;
```

[예시]

```
import React from 'react';
import './App.css';

function App() {
  const name = '리액트';
  return {
    <>
      <div className="react">[name]</div>
      <input />
    </>
  }
}

export default App;
```

#### [주석처리]

```
function App() {
  ~~~

  {/* 주석은 이렇게 작성합니다.}

  <div
    className="react" // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있습니다.
    > {name}
    </div>
  >

  ~~~
}
```

#### [ESLint와 Prettier]

- ESLint

  ```
  ESLint는 문법검사 도구이고, prettier는 코드 스타일 자동 정리 도구입니다.
  ESLint는 코드를 작성할 때 에러를 내면 경고 또는 에러를 바로 확인 할 수 있도록 해줍니다.
  ```

- Prettier

  ```
  Prettier는 JSX을 작성할때 가독성을 위해 들여쓰기를 해줍니다. (다른 포맷 도구 [Beautify]와 충돌 주의)
  prettier를 사용하면 자동으로 세이콜론을 넣어주고 작은 따음표를 전부 큰따음표로 바까주며, 코드가 자동으로 정렬이 됩니다.
  코딩 스타일을 쉽게 커스터 마이징이 가능하고 .prettierrc 파일을 만들어서 설정이 가능하니다.

  ```

#### [함수형 컨포넌트와 클래스형 컨포넌트]

<h3>함수형 컴포넌트</h3>

```jsx
App.js;
import React from "react";
import "./App.css";

function App() {
  const name = "리액트";
  return <div className="react">{name}</div>;
}

export default App;
```

<h3>클래스형 컴포넌트</h3>

```jsx
App.js;
import React, { Component } from "react";

class App extends Component {
  render() {
    const name = "react";
    return <div className="react">{name}</div>;
  }
}

export default App;
```

클래스형 컴포넌트로 바끼었지만 역활은 함수형 컴포넌트와 동일합니다.  
차이점은 클래스형 컴포넌트일 경우 이후 배울 state 기능 및 라이프사이클 기능을 사용할 수 있다는 것과 임의 메서드를 정의할 수 있다는 것입니다.

클래스형 컴포넌트에서는 render 함수가 꼭 있어야 하고, 그 안에서 보여 주어야 할 JSX를 반환해야 합니다.

- 함수형 컴포넌트 장점

  ```
  1. 클래스형 컴포넌트보다 선언하기 편하고 메모리를 덜 사용합니다.
  2. 프로젝트 완성 후에 빌드를 해서 배포할때 함수형 컨포넌트를 사용하는 것이 결과물의 파일 크기가 더 작습니다.
  3. 성능면에서는 별 차이 안나기 떄문에 너무 중요하게 여기지 않아도 됩니다.
  ```

- 함수형 컴포넌트 단점

  ```
  1. state와 라이프사이클 API가 불가능합니다. 하지만 v16.8 Hooks라는 기능이 도입되면서 사라졌습니다.
  ```

  공식 홈페이지에서는 함수형 컨포넌트와 Hooks를 사용하도록 권장하고 있습니다.

#### [실습]

```jsx
vscode node 설치

프로젝트 생성 밑 실행
cmd => create-react-start hello-react
    => yarn start

함수를 작성할 때 function 키워드 대신에 사용하는 () => {} 를 사용하여 함수를 작성
ES6에 도입된 화살표 함수 문법입니다.

  import React, { Component } from "react";

  const MyComponent = () => {
    return <div>나의 새롭고 멋진 컴포넌트</div>;
  };

  export default MyComponent;

따로 {}를 선언하지 않고 사용하면 그대로 값을 반환한다는 것입니다.
```

#### [모듈 내보내기 및 불러오기]

모듈 내보내기

```jsx
export default MyComponent;
```

모듈 불러오기

```jsx
import React from "react";
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent />;
};

export default App;
```

#### [PROPS]

<h3>props 란 properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소입니다.</h3>

props 값 지정하기.

```jsx
import React from "react";
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent name="React" />;
};

export default App;
```

태그 사이의 내용을 보여주는 children

```jsx
App.js;
import React from "react";
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent>리액트</Mycomponent>;
};

export default App;
```

```jsx
MyComponent.js;
import React from "react";
import MyComponent from "./MyComponent";

const App = () => {
  return (
    <div>
      안녕하세요. 제이름은 {props.name}입니다. <br />
      children 값은 {props.children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
};

export default App;
```

위에 내용을 보게 되면 조회를 할때마다 props를 사용해서 props. 라는 키워드를 앞에 붙여주고 있습니다. 하지만 이러한 반복 작업을 없애고 편하게 작업하기 위해 ES6의 비구조화 할당 문법을 사용하여 내부 값을 바로 추출할 수 있습니다.

(1) example

```jsx
MyComponent.js;
import React from "react";
import MyComponent from "./MyComponent";

const App = () => {
  const { name, children } = props;
  return (
    <div>
      안녕하세요. 제이름은 {name}입니다. <br />
      children 값은 {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
};

export default App;
```

(2) example

```jsx
MyComponent.js;
import React from "react";
import MyComponent from "./MyComponent";

const App = ({ name, children }) => {
  return (
    <div>
      안녕하세요. 제이름은 {name}입니다. <br />
      children 값은 {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
};

export default App;
```

props에서 값을 추출하는 문법을 비구조화 할당이라고 합니다. 함수의 파라미터 부분에서도 사용이 가능합니다.

props 값의 타입을 지정할 수 있습니다.

```
MyComponent.proTypes = {
  name : PropTypes.string
}

name에 문자가 아닌 숫자가 넘어오면 에러가 납니다.
```

  </details>
