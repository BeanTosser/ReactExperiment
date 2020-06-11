import React from "react";
import "./styles.css";

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [],
      numbers: []
    };
    this.timer = setInterval(this.changeState(), 3000);
    this.createChildren();
  }

  changeState() {
    numbers = this.state.numbers.slice();
    for (let i = 0; i < 10; i++) {
      numbers[i] = Math.random();
    }
    this.setState({ numbers: numbers });
  }

  createChildren() {
    children = this.state.children.slice();
    numbers = this.state.numbers.slice();
    for (let i = 0; i < 10; i++) {
      numbers.push(5.1);
      children.push(<ChildComponent id={i} number={this.state.numbers[i]} />);
    }
  }

  render() {
    return this.state.numbers;
  }
}

function ChildComponent(props) {
  return (
    <>
      <h2>This is a child component. The grandchild componenent: </h2>
      <GrandChildComponent number={props.number} />
    </>
  );
}

function GrandChildComponent(props) {}
export default function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}
