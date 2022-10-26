// 클래스형 컴포넌트에서 state
import { Component } from "react";

class StateComp extends Component {
  // props값을 this를 통해서 사용 (state를 사용 하지 않을때)
  // state, 컴포넌트에서 사용하는 값을 작성
  // => props값은 Component에서 상속받아온 값
  // => 명시적으로 값을 가져올 필요있다

  // 자바스크립트 클래스의 constructor() {}
  constructor(props) {
    // constructor 를 통해서 클래스의 속성관리
    super(props);
    // state는 개게의 형식으로 작성
    this.state = {
      number: 4,
      count: 0,
    };
  }
  render() {
    const { name } = this.props;
    const { number, count } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>

        <button
          // 버튼을 누르면 값이 0으로 초기화 되는 버튼
          onClick={() => {
            this.setState({ number: 0 });
          }}
        >
          0
        </button>

        <button
          // 버튼을 누르면 값이 -1 되는 버튼
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          -1
        </button>

        <h1>{count}</h1>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          count+1
        </button>
      </div>
    );
  }
}

export default StateComp;
