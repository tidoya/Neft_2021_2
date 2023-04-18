import { FC } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Burger.module.scss';
import { PropsBuger } from '../../interfaces/Burger.inteface';

const Burger: FC<PropsBuger> = ({ open, setOpen }) => {
  const first = useSpring({
    transform: open ? 'translate(6px, 32px) rotate(-45deg)' : 'translate(2px, 7px) rotate(0deg)',
  });
  const second = useSpring({
    transform: open ? 'translate(10px, 4px) rotate(45deg)' : 'translate(2px, 19px) rotate(0deg)',
  });
  const third = useSpring({
    transform: open ? 'translate(6px, 32px) rotate(-45deg)' : 'translate(2px, 31px) rotate(0deg)',
  });

  return (
    <div className={styles.burger}>
      <svg
        onClick={() => setOpen(!open)}
        width="14"
        height="14"
        viewBox="0 0 44 44"
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg">
        {!open ? <animated.rect width="40" height="4" rx="2" style={first} /> : ''}
        <animated.rect width="40" height="4" rx="2" style={second} />
        <animated.rect width="40" height="4" rx="2" style={third} />
      </svg>
    </div>
  );
};

export default Burger;
