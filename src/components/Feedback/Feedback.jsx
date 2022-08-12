import React, { Component } from "react";

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onClickBtn = () => {
    // console.log('clicked', this.state)
    this.setState({})
  };

  onClickGood = () => {
    this.setState((prevState) => {
      console.log({ prevState });
      return { good: prevState.good + 1}
    })
  }

  render() {
    console.log(this.state);
    return (
      <>
        <h2> Please leave feedback </h2>
        <button onClick={this.onClickGood}>good</button>
        <button onClick={this.onClickBtn}>neutral</button>
        <button onClick={this.onClickBtn}>bad</button>
      </>
    )
  }
}