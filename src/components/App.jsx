import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import styles from './App.module.scss';

export function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Method for incrementing feedback value for each option (set dynamically)
  const onLeaveFeedback = event => {
    event.preventDefault();
    const name = event.target.name;
    const incrementedValue = feedback[name] + 1;
    setFeedback(oldState => ({ ...oldState, [name]: incrementedValue }));
  };

  // CSS styling variable
  const { container } = styles;

  return (
    <div className={container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedback} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Feedback">
        <Statistics options={feedback} />
      </Section>
    </div>
  );
}
