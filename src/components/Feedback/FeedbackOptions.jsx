import React, { Component } from 'react'
import Statistics from "./Statistics";
import Section from './Section';
import Notification from 'components/Notification';


export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    totalFeedback: 0,
    positiveFeedback: 0
  }

  handleFeedback = (event) => {
    const { name } = event.target;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1
    }), () => {
      const { good, neutral, bad } = this.state;
      const totalFeedback = good + neutral + bad;
      const positiveFeedback = Math.round((good / totalFeedback) * 100) || 0;
      
      this.setState({
        totalFeedback,
        positiveFeedback
      });
    });
  }

  render() {
    const { good, neutral, bad, totalFeedback, positiveFeedback } = this.state
    return (
      <>
        <ul>
          <li><button onClick={this.handleFeedback} name='good' type='button'>Good</button></li>
          <li><button onClick={this.handleFeedback} name='neutral' type='button'>Neutal</button></li>
          <li><button onClick={this.handleFeedback} name='bad' type='button'>Bad</button></li>
        </ul>

        {
          totalFeedback === 0 ? (<Notification message="There is no feedback"></Notification>) : (
            <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positiveFeedback}/>    
          )
        }
      </>
    )
  }
}
