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
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round(good / this.countTotalFeedback() * 100)
  };

  render() {
    console.log(this.state);
    const buttons = Object.keys(this.state)
    // console.log(buttons);
    const {good, neutral, bad} = this.state;

    return (
      <>
        <Section title="Please leave feedback">
        <ButtonFeedback
          buttons={buttons}
          onClickButton={this.onClickButton} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? <Notification message="There is no feedback"/> : <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          />}
        </Section>
      </>
    )
  }
}