import React, { Component } from "react";

import { Statistics } from "../Statistics/Statistics";
import { ButtonFeedback } from "../ButtonFeedback/ButtonFeedback";
import { Section } from "../Section/Section";
import { Notification } from "../Notification/Notification";

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onClickButton = event => {
    const state = event.target.innerText;
    // console.log(state);
    this.setState(prevState => {
      return { [state]: prevState[state] + 1 };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage() {
    return Math.round(this.state.good / this.countTotalFeedback() * 100)
  };

  render() {
    console.log(this.state);
    const buttons = Object.keys(this.state)
    // console.log(buttons);

    return (
      <>
        <Section title="Please leave feedback">
        <ButtonFeedback
          buttons={buttons}
          onClickButton={this.onClickButton} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? <Notification message="There is no feedback"/> : <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          />}
        </Section>
      </>
    )
  }
}