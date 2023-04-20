import { FC } from 'react';
import { pieChart } from '../../../interfaces/PieChartGraph.interface';
import styles from './SeparateRegion.module.scss';

function check_last_zero(num: string): string {
  if (Number(num.split('').at(-1)) === 0) {
    return num.slice(0, -2);
  }
  return num;
}
const SeparateRegion: FC<pieChart> = ({ name, yName, value, prev }) => {
  const left_num = check_last_zero(Math.floor(value * 100).toFixed(1));
  let right_num = check_last_zero(((1 - value / prev) * 100).toFixed(1));
  return (
    <div className={styles.block}>
      <div className={styles.title__block}>
        <p>{name[0].toUpperCase() + name.toLowerCase().slice(1)}</p>
      </div>

      <div className={styles.line}> </div>
      <div className={styles.desc__block}>
        <div>
          <p className={styles.left__desc}>{left_num}</p>
          <p className={styles.name}>{yName}</p>
        </div>

        <p className={Number(right_num) > 0 ? styles.right__desc__plus : styles.right__desc__minus}>
          {Number(right_num) > 0 ? `+${right_num}%` : `${right_num}%`}
        </p>
      </div>
    </div>
  );
};

export default SeparateRegion;
