import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.scss';

function Section({ title, children }) {
  const { header } = styles;
  return (
    <section>
      <h2 className={header}>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Section;
