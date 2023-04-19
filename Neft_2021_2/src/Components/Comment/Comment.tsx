import { FC } from 'react';
import styles from './Comment.module.scss';
import { IIComment } from '../../interfaces/Comment.interface';
const Comment: FC<IIComment> = ({ name, valueLastYear, valuePreLastYear, desc }) => {
  return (
    <div className={styles.comment}>
      <p>{name}</p>
      <h1>{valueLastYear}%</h1>
      <h2>{valuePreLastYear}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Comment;
