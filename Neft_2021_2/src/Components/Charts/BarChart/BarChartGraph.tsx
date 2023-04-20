import { FC, useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { IInterface, propsForBarChart } from '../../../interfaces/BarChartGraph.interface';
import Comment from '../../Comment/Comment';

const BarChartGraph: FC<propsForBarChart> = ({ styleForBarChart, BarChart, title, yName }) => {
  const [isHover, setIsHover] = useState<boolean>(true);
  const procent: Array<Number | any> = [];
  let dataSeries: Array<number | IInterface> = BarChart.map((item, index) => {
    if (index === BarChart.length - 1) {
      procent.push(item.value);

      return {
        label: {
          show: true,
          position: 'top',
        },
        value: item.value,
        itemStyle: {
          color: '#EA3742',
        },
      };
    }
    if (index === BarChart.length - 2) {
      procent.push(item.value);
      return {
        label: {
          show: true,
          position: 'top',
        },
        value: item.value,
      };
    }
    return {
      label: {
        show: false,
        position: 'top',
      },
      value: item.value,
    };
  });
  let option = {
    title: {
      text: title,
      left: 30,
      textStyle: {
        color: '#000',
      },
    },
    xAxis: {
      type: 'category',
      data: BarChart.map((item) => {
        return item.year;
      }),
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
        data: dataSeries,
        label: {
          fontSize: 22,
          fontFamily: 'Montserrat',
          color: '#000',
        },
        type: 'bar',
      },
    ],
  };

  useEffect(() => {
    option = {
      title: {
        text: title,
        left: 30,
        textStyle: {
          color: '#000',
        },
      },
      xAxis: {
        type: 'category',
        data: BarChart.map((item) => {
          return item.year;
        }),
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
          data: BarChart.map((item, index) => {
            if (index === BarChart.length - 1 || index === BarChart.length - 3) {
              return {
                label: {
                  show: true,
                  position: 'top',
                },
                value: item.value,
              };
            }
            return {
              label: {
                show: false,
                position: 'top',
              },
              value: item.value,
            };
          }),
          label: {
            fontSize: 22,
            fontFamily: 'Montserrat',
            color: '#000',
          },
          type: 'bar',
        },
      ],
    };
  }, [isHover]);

  return (
    <>
      <div
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}>
        <ReactECharts
          className="echarts-for-echarts"
          opts={{ renderer: 'canvas' }}
          style={styleForBarChart}
          option={option}
        />
      </div>
      <Comment
        name="Изменение к отчетному году"
        valueLastYear={(((procent[1] - procent[0]) / procent[0]) * 100).toFixed(1)}
        valuePreLastYear={procent[1] - procent[0]}
        desc={'млрд куб'}
      />
    </>
  );
};

export default BarChartGraph;
