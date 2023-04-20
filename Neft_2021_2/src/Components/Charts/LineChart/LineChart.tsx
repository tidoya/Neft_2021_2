import { FC } from 'react';
import ReactECharts from 'echarts-for-react';
import { propsForPieChart } from '../../../interfaces/PieChartGraph.interface';
import styles from './LineChart.module.scss';
import Comment from '../../Comment/Comment';

const LineChart: FC<propsForPieChart> = ({ styleForPieChart, name }) => {
  const option = {
    color: 'red',
    title: {
      text: name,
      left: 30,
      textStyle: {
        color: '#000',
      },
    },
    grid: {
      width: 700,
    },
    xAxis: {
      type: 'category',
      data: ['янв', 'фев', 'мар', 'апр', 'май', 'июнь', 'июль', 'авг', 'сен', 'окт', 'ноя', 'дек'],
    },
    yAxis: {
      type: 'value',
      name: 'м',
      nameRotate: -0.1,
      min: 1500,
    },
    series: [
      {
        data: [
          2150,
          2070,
          1850,
          1800,
          1700,
          1600,
          1600,
          1700,
          1800,
          1900,
          2000,
          {
            label: {
              show: true,
              position: 'top',
              color: '#000',
              fontSize: 20,
              fontFamily: 'Montserrat',
            },
            value: 2100,
          },
        ],
        type: 'line',
        symbolSize: 0,
      },
    ],
  };
  return (
    <div className={styles.LineChart}>
      <div className={styles.LineChart__containter}>
        <div>
          <ReactECharts
            className="echarts-for-echarts"
            opts={{ renderer: 'svg' }}
            style={styleForPieChart}
            option={option}
          />
        </div>
        <Comment
          name="Изменение к отчетному году"
          valueLastYear={'-23.4'}
          valuePreLastYear={'2114'}
          desc={'млрд куб м/сут.'}
        />
      </div>
    </div>
  );
};

export default LineChart;
