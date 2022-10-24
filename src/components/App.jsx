import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import styles from './App.module.scss';

// Declaring app initial state
const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class App extends Component {
  constructor() {
    super();
    // Initializing state in app
    this.state = { ...INITIAL_STATE };
  }

  // Method for incrementing feedback value for each option (set dynamically)
  onLeaveFeedback = event => {
    event.preventDefault();
    const name = event.target.name;
    this.setState(state => ({ [name]: state[name] + 1 }));
  };

  render() {
    // CSS styling variable
    const { container } = styles;

    return (
      <div className={container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Feedback">
          <Statistics options={this.state} />
        </Section>
      </div>
    );
  }
}
