const ReducerCountComp = (props) => {
  // useReducer의 state와 dispatch를 props로 들고와서
  // 자식 컴포넌트에서도 부모의 state 값을 바꿀수 있다.
  const { state, dispatch } = props;
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
    </div>
  );
};

export default ReducerCountComp;
