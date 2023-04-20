import { FC } from 'react';
import styles from './Header.module.scss';
import Burger from '../../Burger/Burger';
import icon__download from '../../../assets/download.svg';
import { IIHeader } from '../../../interfaces/Header.interface';

const Header: FC<IIHeader> = ({ open, setOpen }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <h1 className={styles.header__text}>Нефтяная промышленность</h1>
        <div className={styles.burger_btn}>
          <Burger open={open} setOpen={setOpen} />
        </div>
      </div>
      <div className={styles.link__download}>
        <img className={styles.image} width="33" src={icon__download} alt="img" />
        <a>Скачать отчет</a>
      </div>
    </div>
  );
};

export default Header;
