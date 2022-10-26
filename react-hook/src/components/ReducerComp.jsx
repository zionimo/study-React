// 함수형 컴포넌트

import { useReducer } from "react";

import ReducerCountComp from "./ReducerCountComp";
import MemoComp from "./MemoComp";

function reducer(state, action) {
  // state안에 여러개의 값이 있을때, 이전 값을 유지해주어야한다.
  // 이전 값을 유지하기 위한 ...state를 추가
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "zero":
      return { ...state, count: 0 };
    case "changeInput":
      return { ...state, input: action.payload };
  }
}

const ReducerComp = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, input: "" });
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -1
      </button>
      {/** 아래버튼에 들아갈 action.type에 관한 내용을 reducer에 추가 */}
      <button
        onClick={() => {
          dispatch({ type: "zero" });
        }}
      >
        0
      </button>

      {/** 자식 컴포넌트에 props 값으로 state와 dispatch를 전달할수 있다 */}
      <ReducerCountComp state={state} dispatch={dispatch} />
      {/** 자식 컴포넌트 MemoComp를 하나 만들고,
       * ReducerComp의 state에 input="" 추가하고, reducer를 작성하여
       * MemoComp에서 작성한 글이 ReducerComp에서 수정되어 나올수있게 하세요
       */}
      <h1>{state.input}</h1>
      {/** 먼저 ReducerComp에서 실행해보기, e객체의 값을 어떻게 가져갈지 생각하기 */}
      <input
        type="text"
        onChange={(e) => {
          // setState(e.target.value) >> dispatch에서 쓸수있도록
          dispatch({ type: "changeInput", payload: e.target.value });
        }}
      />
      <MemoComp dispatch={dispatch} />
    </div>
  );
};

export default ReducerComp;
