import { Component } from 'react'
import { Feedback } from './feedback/Feedback'
import { Statistics } from './statistics/Statistics'

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  onLeaveFeedback = (option) => {
    this.setState((prevState)=> ({
      [option]: prevState[option] + 1
    }))
  }
  render() {
    const { good, neutral, bad } = this.state
    console.log(this.state);
    return (
      <>
        <Feedback options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </>
    )
  }
}
