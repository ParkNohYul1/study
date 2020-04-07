# 개인 공부용 레파지토리

## 공부 순서
  리액트 + 학원 => 안드로이드 + 스위프트 => 자료구조 + 알고리즘 => 스프링 부트 => 포렌식 => 네트워크    
  목표: 사이버 수사대 특채  
    
### 초기 스터디 맴버웹개발 유튜버를 위해 초기 스터디 맴버 생성  생성 - (후배 조서희, 대학원생 권찬민) 1기
   
  0328 // (조서희) 개강으로 인해 놀 수 있도록 스터디를 이번주 스터디를 안한다고 스터디원에게 전달  
  0329 // 어떤식으로 스터디를 할까 스터디원들과  
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
  0404 // 스터디 어떻게 진행 할건지 회의. 진도 안맞아서 다음주까지 마쳐오라고함. - 모여서 정리하고 돌아가면서 설명하기로 했음.  
  0408 // 스터디가 끝난 후에 영어 스터디를 하면 어떨까 라는 대화를 했음. 
  
  - 프론트엔드 스터디 
  - 리액트 스터디 
  
  
<details>
  <summary>회사</summary>

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
</details>

<details>
  <summary>운동</summary>

  0328 // 코로나로 인해 문이 닫힘
  0408 // 20일부터 헬스장 PT 
</details>

---------------------------------------

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
  - 리액트에서는 JSX 내부에서  IF문을 사용 할 수 없습니다. 하지만 내용을 랜더링해야 할 때는 JSX 밖에서 IF문을 사용하여 사전에 값을 설정하거나
  {} 안에 조건부 연산자(삼항 연산자)를 사용 하면 됩니다.

  ```jsx
  import React from 'react';
  
  function App() {
    const name = '리액트';
    return (
      <div>
        {name === '리액트' ? (
          <h1>리액트입니다.</h1>
        ) : (
          <h2>리액트가 아닙니다.</h2>
        )}
      </div>
    );
  }
  ```

#### [조건문 true 일때 처리]
  && 를 사용하면 조건이 true 처리할 수 있습니다.

  ```jsx
  import React from 'react';
  
  function App() {
    const name = '뤼왝트';
    return <div>{name === '리액트' ? <h1>리액트입니다.</h1> : null} </div>
  }
  
  export default App;
  ```
  
  ```jsx
  import React from 'react';
  
  function App() {
    const name = '뤼왝트';
    return <div>{name === '리액트' && <h1>리액트입니다.</h1>} </div>;
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
  import React from 'react';
  import './App.css';
  
  function App() {
    const name = '리액트';
    const style = {
      // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
      backgroundColor: 'black',
      color: 'aqua',
      fontSize: '48px',   // font-size -> fontSize
      fontWeight: 'blod', // font-weight -> fontWeight
      padding: 16         // 단위를 생략하면 px로 지정됩니다.
    };
    return <div style={style}>{name}</div>;
  }
  
  export default App;
  ```

  style 안에 지정해서 작성
  ```jsx
  import React from 'react';
  import './App.css';
  
  function App() {
    const name = '리액트';
    const style = {
      // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
      backgroundColor: 'black',
      color: 'aqua',
      fontSize: '48px',   // font-size -> fontSize
      fontWeight: 'blod', // font-weight -> fontWeight
      padding: 16         // 단위를 생략하면 px로 지정됩니다.
    };
    return <div style={style}>{name}</div>;
  }
  
  export default App;
  ```

  
  </details>

  <details>
    <summary>5일차 학습</summary>
#### [JSX에서는 닫는 태그 필수]
br 태그와 input 태그 같이 닫는 태그가 없어도 상관없는 태그는 JSX에서도 에러가 납니다.


[예시]
```
  <form>
    <input type="text">
    <br>
  </form>
```

[잘못된 코드]





  </details>
