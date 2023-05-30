import React, { Component } from 'react';
import Notification from './Notification'

export default class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        {this.props.countTotalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <>
            <ul>
              <li>Good: {good}</li>
              <li>Neutral: {neutral}</li>
              <li>Bad: {bad}</li>
            </ul>
            <p>Total: {total}</p>
            <h3>Positive feedback: {positivePercentage}%</h3>
          </>
        )}
      </>
    );
  }
}