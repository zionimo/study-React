// 클래스형 컴포넌트

import { Component } from "react";

class StoryTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  render() {
    const { children } = this.props;
    const { time } = this.state;
    return (
      <div>
        <h1>{children}</h1>
        <p>
          {time.getMonth() + 1}/{time.getDate()}
        </p>
      </div>
    );
  }
}

export default StoryTitle;
