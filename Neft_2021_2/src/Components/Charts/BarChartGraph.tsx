import { FC } from 'react';
import ReactECharts from 'echarts-for-react';
import styles from './BarChartGraph.module.scss';
import { RootState, useAppSelector } from '../../redux/store';
const BarChartGraph: FC = () => {
  const BarChart = useAppSelector((state: RootState) => state.ChartReducer.BarChart);
  const xAxisData: number[] = [];
  const seriesData = [];
  BarChart.forEach((item, index) => {
    if (item.year) {
      xAxisData.push(item.year);
    }
    if (BarChart.length - 1 === index) {
      seriesData.push({
        value: item.value,
        itemStyle: {
          color: '#EA3742',
        },
      });
    }
    if (item.value && BarChart.length - 1 !== index) {
      seriesData.push(item.value);
    }
  });
  const option = {
    xAxis: {
      type: 'category',
      data: xAxisData,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        barWidth: 31,
        itemStyle: {
          color: '#F3AE4D',
        },
        data: seriesData,
        type: 'bar',
      },
    ],
  };
  return (
    <ReactECharts
      style={{ height: 400, width: 800, position: 'relative', left: -50 }}
      option={option}
    />
  );
};

export default BarChartGraph;
