import React from "react"
import Feedback from "./feedback/Feedback"
import Statistics from "./statistics/Statistics"

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  onLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };
  countTotalFeedback = () => {
     return Object.values(this.state).reduce((a, b) => (a += b));
  };
  countPositiveFeedbackPercentage = () => { };
  render() {
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Feedback
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage} />
      </>
    )
  }
};
export default App