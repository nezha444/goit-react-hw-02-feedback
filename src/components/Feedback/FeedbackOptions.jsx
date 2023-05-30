import React, { Component } from 'react';
import Statistics from './Statistics';
import Notification from 'components/Feedback/Notification';

export default class Feedback extends Component {
  // handleFeedback = event => {
  //   const { name } = event.target;
  //   this.setState(
  //     prevState => ({
  //       [name]: prevState[name] + 1,
  //     })
  //   );
  // };

  render() {
    return (
      <>
        <ul>
          {this.props.options.map(
            (option => (
              <li>
                <button
                  type="button"
                  name={option}
                  onClick={this.props.onLeaveFeedback}
                >
                  {option}
                </button>
              </li>
            ))
          )}
          {/* <li><button onClick={this.handleFeedback} name='good' type='button'>Good</button></li> */}
          {/* <li><button onClick={this.handleFeedback} name='neutral' type='button'>Neutal</button></li> */}
          {/* <li><button onClick={this.handleFeedback} name='bad' type='button'>Bad</button></li> */}
        </ul>
      </>
    );
  }
}
