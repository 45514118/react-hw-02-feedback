import { Component } from 'react'
import { Feedback } from './feedback/Feedback'
import { Statistics } from './statistics/Statistics'
import { Section } from './section/Section'
import { Notification } from './notification/Notification'

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  onLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1
    }))
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }
  countTotalFeedback = () => {
    this.setState((prevState) => ({
      total: prevState.good + prevState.neutral + prevState.bad
    }))
  }
  countPositiveFeedbackPercentage = () => {
    this.setState((prevState) => ({
      positivePercentage: Math.trunc(prevState.good / prevState.total *100)
    }))
  }
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state
    const keys = Object.keys(this.state)
    return (
      <>
        <Section title='Please leave a feedback'>
          <Feedback options={keys.filter(k => k !== 'total' && k !== 'positivePercentage')} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title='Statistics'>
          {total ?
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
            :
            <Notification message="There is no feedback"/>
          }
        </Section>
        </>
    )
  }
}
