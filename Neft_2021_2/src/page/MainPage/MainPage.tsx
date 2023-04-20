import { FC, useEffect, useState } from 'react';
import styles from './MainPage.module.scss';
import { useDispatch } from 'react-redux';
import { GetChart, GetChartDesc, GetpieChart } from '../../redux/ThunkCreator/ChartThunkCreators';
import { AppDispatch, useAppSelector } from '../../redux/store';
import BarChartGraph from '../../Components/Charts/BarChart/BarChartGraph';
import Description from '../../Components/Description/Description';
import PieChartGraph from '../../Components/Charts/PieChart/PieChartGraph';
import SinkingRegions from '../../Components/SinkingRegions/SinkingRegions';
import { ProdChart } from '../../redux/ThunkCreator/ChartThunkCreators';
import { ProdChartDesc } from '../../redux/ThunkCreator/ChartThunkCreators';
import { ProdpieChart } from '../../redux/ThunkCreator/ChartThunkCreators';
import LineChart from '../../Components/Charts/LineChart/LineChart';
import { styleForBarChart, styleForLineChart, styleForPieChart } from './styleForCharts';

const title = ['Ввод новых скважин', 'Динамика фонда скважин'];
const yName = ['СКВ.', 'тыс. скв.'];
const namePieChart = 'Региональная структура';
const nameLineChart = [
  'Доля скважин, дающих продукцию',
  'Средняя глубина 1 новой эксплуатационной скважины',
];
const nameSinkingRegions = [
  'Динамика фонда скважин по добывающим регионам',
  'Средняя глубина 1 новой эксплуатационной скважины',
];
const MainPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { BarChart, description, PieChart } = useAppSelector((state) => state.ChartReducer);

  const [isShow, setShow] = useState<boolean>(true);

  useEffect(() => {
    if (isShow) {
      dispatch(GetChart());
      dispatch(GetChartDesc());
      dispatch(GetpieChart());
    } else {
      dispatch(ProdChart());
      dispatch(ProdChartDesc());
      dispatch(ProdpieChart());
    }
  }, [isShow]);
  return (
    <div>
      <h2 className={styles.main__text}>Ввод новых скважин</h2>
      <button
        className={isShow === true ? styles.active__button : styles.button}
        onClick={() => setShow(true)}>
        Всего
      </button>
      <button
        className={isShow === false ? styles.active__button : styles.button}
        onClick={() => setShow(false)}>
        Фонд эксплуатационных скважин
      </button>
      <div className={styles.barChart}>
        <BarChartGraph
          styleForBarChart={styleForBarChart}
          BarChart={BarChart}
          title={isShow ? title[0] : title[1]}
          yName={isShow ? yName[0] : yName[1]}
        />
      </div>
      <Description left={description.left} rigth={description.right} />

      <PieChartGraph styleForPieChart={styleForPieChart} PieChart={PieChart} name={namePieChart} />
      <SinkingRegions
        name={isShow ? nameSinkingRegions[0] : nameSinkingRegions[1]}
        yName={isShow ? yName[0] : yName[1]}
        PieChart={PieChart}
      />
      <LineChart
        styleForPieChart={styleForLineChart}
        PieChart={PieChart}
        name={isShow ? nameLineChart[0] : nameLineChart[1]}
      />
    </div>
  );
};

export default MainPage;
