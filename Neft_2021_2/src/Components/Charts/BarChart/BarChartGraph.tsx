import { FC } from 'react';
import ReactECharts from 'echarts-for-react';
import { IInterface, propsForBarChart } from '../../../interfaces/BarChartGraph.interface';

const BarChartGraph: FC<propsForBarChart> = ({ styleForBarChart, BarChart, title, yName }) => {
  const xAxisData: number[] = [];
  const seriesData: Array<number | IInterface> = [];
  BarChart.forEach((item, index) => {
    if (item.year) {
      xAxisData.push(item.year);
    }
    if (BarChart.length - 1 === index) {
      seriesData.push({
        value: item.value,
        label: {
          show: true,
          position: 'top',
        },
        itemStyle: {
          color: '#EA3742',
        },
      });
    }
    if (BarChart.length - 2 === index) {
      seriesData.push({
        label: {
          show: true,
          position: 'top',
        },
        value: item.value,
      });
    }
    if (item.value && BarChart.length - 1 !== index && BarChart.length - 2 !== index) {
      seriesData.push(item.value);
    }
  });
  const option = {
    title: {
      text: title,
      right: 560,
      textStyle: {
        color: '#000',
      },
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
    },
    yAxis: [
      {
        type: 'value',
        name: yName,
        nameLocation: 'end',
        alignTicks: true,
        fontFamily: 'Montserrat',
        nameTextStyle: {
          fontSize: 15,
          color: '#000',
        },
        nameRotate: -0.1,
      },
    ],
    series: [
      {
        barWidth: 31,
        itemStyle: {
          color: '#F3AE4D',
        },
        data: seriesData,
        label: {
          fontSize: 22,
          fontFamily: 'Montserrat',
          color: '#000',
        },
        type: 'bar',
      },
    ],
  };
  return (
    <ReactECharts
      className="echarts-for-echarts"
      opts={{ renderer: 'svg' }}
      style={styleForBarChart}
      option={option}
    />
  );
};

export default BarChartGraph;
