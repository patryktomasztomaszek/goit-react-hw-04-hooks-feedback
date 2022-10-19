import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.scss';

function Notification({ message }) {
  const { header } = styles;
  return <h2 className={header}>{message}</h2>;
}

Notification.propTypes = { message: PropTypes.string.isRequired };

export default Notification;
