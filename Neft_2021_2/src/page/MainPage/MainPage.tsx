import { FC, useEffect, useState } from 'react';
import styles from './MainPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { GetChart, GetChartDesc, GetpieChart } from '../../redux/ThunkCreator/ChartThunkCreators';
import { AppDispatch, RootState } from '../../redux/store';
import BarChartGraph from '../../Components/Charts/BarChartGraph';
const MainPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [button, setButton] = useState<boolean>(true);
  const { BarChart, description, PieChart } = useSelector((state: RootState) => state.ChartReducer);

  useEffect(() => {
    dispatch(GetChart());
    dispatch(GetChartDesc());
    dispatch(GetpieChart());
  }, []);
  return (
    <div>
      <h2 className={styles.main__text}>Ввод новых скважин</h2>
      <button
        className={button === true ? styles.active__button : styles.button}
        onClick={() => setButton(true)}>
        Всего
      </button>
      <button
        className={button === false ? styles.active__button : styles.button}
        onClick={() => setButton(false)}>
        Фонд эксплуатационных скважин
      </button>
      <div className={styles.BarChart}>
        <BarChartGraph />
      </div>
    </div>
  );
};

export default MainPage;
