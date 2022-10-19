import React from 'react';
import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';
import styles from './Statistics.module.scss';

function Statistics({ options }) {
  const stats = Object.entries(options);
  const values = Object.values(options);

  const totalCount = values.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  const positivePercentage = Math.round((options.good / totalCount) * 100);

  const { statistics, statistics__item, statistics__key, statistics__value } =
    styles;

  return (
    <div>
      {totalCount > 0 ? (
        <ul className={statistics}>
          {stats.map(option => {
            return (
              <li className={statistics__item} key={option[0]}>
                <span className={statistics__value}>{option[1]}</span>
                <span className={statistics__key}>{option[0]}</span>
              </li>
            );
          })}
          <li className={statistics__item} key="total">
            <span className={statistics__value}>{totalCount}</span>
            <span className={statistics__key}>Total</span>
          </li>
          <li className={statistics__item} key="percentage">
            <span className={statistics__value}>
              {isNaN(positivePercentage) ? 0 : positivePercentage}%
            </span>
            <span className={statistics__key}>Positive feedback</span>
          </li>
        </ul>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}

Statistics.propTypes = { options: PropTypes.object.isRequired };

export default Statistics;
