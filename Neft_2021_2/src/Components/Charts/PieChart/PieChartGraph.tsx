import { FC, useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { pieChart, propsForPieChart } from '../../../interfaces/PieChartGraph.interface';
import styles from './PieChartGraph.module.scss';
import ButtonForPieChart from '../../Buttons/ButtonForPieChart';
import Comment from '../../Comment/Comment';

const PieChartGraph: FC<propsForPieChart> = ({ styleForPieChart, PieChart, name }) => {
  const [isActive, setActive] = useState<number>(0);
  const procent_Structure = PieChart.map((item, index) => {
    if (index === isActive) {
      return {
        ...item,
        name: (((item.value - item.prev) / item.prev) * 100).toFixed(1) + '%',
        selected: true,
        label: {
          fontSize: 45,
          fontFamily: 'Montserrat',
          show: true,
        },
      };
    }
    return {
      ...item,
      name: (((item.value - item.prev) / item.prev) * 100).toFixed(1) + '%',
      selected: false,
      select: {
        disabled: true,
      },
    };
  });
  const option = {
    color: ['#951B81', '#F3AE4D', '#EA3742'],
    series: [
      {
        name: 'Access From',
        type: 'pie',
        animationType: 'scale',
        radius: ['40%', '50%'],
        selectedMode: 'single',
        label: {
          show: false,
          position: 'center',
        },
        data: procent_Structure,
      },
    ],
  };
  return (
    <div className={styles.PieChart}>
      <h3>{name}</h3>
      <div className={styles.PieChart__containter}>
        <div className={styles.buttons}>
          {PieChart.map((item, index) => {
            return (
              <ButtonForPieChart
                key={index}
                isActive={isActive}
                setActive={setActive}
                index={index}
                name={item.name}
              />
            );
          })}
        </div>
        <div>
          <ReactECharts
            className="echarts-for-echarts"
            opts={{ renderer: 'svg' }}
            style={styleForPieChart}
            option={option}
          />
        </div>
        <Comment valueLastYear={procent_Structure[isActive]?.name.slice(0, -1)} desc={'п.п.'} />
      </div>
    </div>
  );
};

export default PieChartGraph;
