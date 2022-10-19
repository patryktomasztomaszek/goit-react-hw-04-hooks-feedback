import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const keys = Object.keys(options);

  const { feedback__buttons, feedback__button } = styles;
  return (
    <section>
      <div className={feedback__buttons}>
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

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
