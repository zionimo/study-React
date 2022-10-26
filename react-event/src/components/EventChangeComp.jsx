// 클래스형 컴포넌트

import { Component } from "react";

class EventChangeComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hi",
      name: "홍길동",
    };
    this.onchange = this.onchange.bind(this);
  }
  // onchange 메소드를 만들어서 확인해보기.
  onchange(e) {
    console.log(e.target.name);
    // 객체의 속성이름을 변수로 가져오고 싶을때 [변수]로 사용
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        {/** h1태그에 input으로 작성한 내용 출력하기 */}
        <h1>글을 입력하세요</h1>
        <input type="text" name="message" onChange={this.onchange} />
        <p>{this.state.message}</p>
        <input type="text" name="name" onChange={this.onchange} />
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default EventChangeComp;
