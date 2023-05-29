import React from "react";
// import Statistics from "./Feedback/Statistics";
import FeedbackOptions from './Feedback/FeedbackOptions'
// import Section from "./Feedback/Section";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    
      {/* <Section title='Please leave feedback'></Section>
      <Section titla='Statistics'></Section> */}
    <FeedbackOptions></FeedbackOptions>
    </div>
  );
};
