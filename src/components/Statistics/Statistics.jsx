import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ options, title }) => {
  return (
   <section className={styles.statistics}>
     <div className={styles.container}>
     {title && <h2 className={styles.title}>{title}</h2>}
       
        <ul className={styles.statList}>
          {options.map(option => (
            <li
              key={option.id}
              className={styles.item}
              style={{ backgroundColor: option.color }}
            >
              <span className={styles.label}>{option.label}</span>
              <span className={styles.percentage}>{option.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
