import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss';

// Function takes object with statistics data, and onClick increment function for adding customer feedback
function FeedbackOptions({ options, onLeaveFeedback }) {
  // Getting keys from options object
  const keys = Object.keys(options);

  // Declaration of style classes variables
  const { feedback__buttons, feedback__button } = styles;
  return (
    <section>
      <div className={feedback__buttons}>
        {/* Mapping array, outputting unique button for each index (feedback option) */}
        {keys.map(key => {
          return (
            <button
              className={feedback__button}
              key={key}
              name={key}
              onClick={onLeaveFeedback}
            >
              {key}
            </button>
          );
        })}
      </div>
    </section>
  );
}

// Proptypes check for all functions and variables
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

// exporting function for further use
export default FeedbackOptions;
