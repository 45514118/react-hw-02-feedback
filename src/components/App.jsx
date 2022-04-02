import { Component } from 'react'
import { Feedback } from './feedback/Feedback'
import { Statistics } from './statistics/Statistics'

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  render() {
    const { good, neutral, bad } = this.state
    return (
      <>
        <Feedback options={Object.keys(this.state)} />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </>
    )
  }
}
