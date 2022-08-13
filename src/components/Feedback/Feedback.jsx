import React, { Component } from "react";

import { Statistics } from "../Statistics/Statistics";
import { ButtonFeedback } from "../ButtonFeedback/ButtonFeedback";

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onClickButton = event => {
    const state = event.target.innerText;
    console.log(state);
    this.setState(prevState => {
      return { [state]: prevState[state] + 1 };
    });
  };

  render() {
    console.log(this.state);
    const buttons = Object.keys(this.state)
    // console.log(buttons);

    return (
      <>
        <h2> Please leave feedback </h2>
        <ButtonFeedback
          buttons={buttons}
          onClickButton={this.onClickButton} />
        <h2> Statistics </h2>
          <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          />
      </>
    )
  }
}