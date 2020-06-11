import React from "react";
import "./styles.css";

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [],
      numbers: [],
      isMounted: false
    };
    this.timer = setInterval(this.changeState, 3000);
  }

  componentDidMount() {
    this.setState({ isMounted: true });
    this.createChildren();
  }

  changeState() {
    if (this.state.isMounted) {
      let numbers = this.state.numbers.slice();
      for (let i = 0; i < 10; i++) {
        numbers[i] = Math.random();
      }
      this.setState({ numbers: numbers });
    }
  }

  createChildren() {
    let children = [];
    let numbers = [];
    for (let i = 0; i < 10; i++) {
      numbers.push(5.1);
      children.push(<ChildComponent id={i} number={this.state.numbers[i]} />);
    }
    this.setState({
      numbers: numbers,
      children: children
    });
  }

  render() {
    return (
      <>
        <h1>test</h1>
        this.state.children;
      </>
    );
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
