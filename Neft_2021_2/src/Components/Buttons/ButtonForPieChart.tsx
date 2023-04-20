import { FC } from 'react';
import styles from './Buttons.module.scss';
import { PropsButtonPie } from '../../interfaces/ButtonForPieChart.interface';

const ButtonForPieChart: FC<PropsButtonPie> = ({ name, index, setActive, isActive }) => {
  return (
    <button
      onClick={() => setActive(index)}
      className={index === isActive ? styles.active__button : styles.button}>
      {name[0].toUpperCase() + name.toLowerCase().slice(1)}
    </button>
  );
};

export default ButtonForPieChart;
