import React, { FC } from 'react';
import styles from './Description.module.scss';
import { IIDescriptionProps } from '../../interfaces/Description.interface';

const Description: FC<IIDescriptionProps> = (props) => {
  return (
    <div className={styles.description}>
      <div className={styles.description__left}>{props.left}</div>
      <div className={styles.line}></div>
      <p className={styles.description__right}>{props.rigth}</p>
    </div>
  );
};

export default Description;
