import "./App.css";
import { useState } from "react";
function App() {
  let post = "강남 우동 맛집";
  let [글제목, b] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬독학"]); // array 시킴
  let [따봉, 따봉변경] = useState(0);
  // let [내용, 내용변경] = useState("여자코트 추천");

  // Destructuring 문법
  // array안에 있던 변수를 각각 빼주는 방법
  // let num = [1, 2];
  // let [a, c] = [1, 2];
  // console.log(`a:${a}, c:${c}`);  a: 1, c: 2  출력

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <button onClick={() => {}}>내용 바꾸기</button>
    </div>
  );
}

export default App;

// 리액트 관련 메모장
// JSX 문법
// -변수를 넣을 땐 {중괄호}
// -간단하게 style 넣고 싶을 땐 style={{이름: '값', 이름:'값'}}

// useState()
// 자료 잠깐 저장할 땐 state 써도 됨
// let [a, b] = useState("남자 코트 추천"); a에 state에 보관했던 자료가 나옴, b는 state 변경을 도와주는 함수
// state 변수를 써야되는 이유? state는 html을 자동 랜더링 해줌
// state는 언제 사용해야 될까? 변경 시 자동으로 html에 반영되게 만들고 싶으면 state 쓰셈

// onClick
// onClick={} 안엔 함수 이름을 넣어야 함

// state 변경하는 법
// 등호로 변경 금지(html에 반영이 안 됨)
// state 변경 함수를 써야됨 => 재랜더링이 이뤄짐 ex. state변경함수(새로운 state)
