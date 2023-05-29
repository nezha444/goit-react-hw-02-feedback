import React, { Component } from 'react'

export default class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
        <>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
            </ul>
            <p>Total: {total}</p>
            <h3>Positive feedback: {positivePercentage}%</h3>
        </>
    )
  }
}