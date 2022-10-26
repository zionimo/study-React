import "./css/ClassNameComp.css";
import { Component } from "react";

class ClassNameComp extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    active: false,
    classList: "on",
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ active: !this.state.active });
            if (this.state.classList === "on") {
              this.setState({ classList: "off" });
            } else {
              this.setState({ classList: "on" });
            }
          }}
        >
          activeToggle
        </button>
        <ul>
          <li className="on">활성화된 리스트입니다</li>
          <li className={this.state.active ? "on" : "off"}>비활성화된 리스트입니다</li>
          <li className={this.state.classList}>활성화된 리스트입니다</li>
        </ul>
      </div>
    );
  }
}

export default ClassNameComp;
