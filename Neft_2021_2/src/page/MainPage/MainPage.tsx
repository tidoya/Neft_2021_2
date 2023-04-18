import { FC, useEffect } from 'react';
import styles from './MainPage.module.scss';
import { useDispatch } from 'react-redux';
import { GetChart, GetChartDesc, GetpieChart } from '../../redux/ThunkCreator/ChartThunkCreators';
import { AppDispatch } from '../../redux/store';
const MainPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(GetChart());
    dispatch(GetChartDesc());
    dispatch(GetpieChart());
  }, []);
  return (
    <div>
      <h2 className={styles.main__text}>Ввод новых скважин</h2>
    </div>
  );
};

export default MainPage;
