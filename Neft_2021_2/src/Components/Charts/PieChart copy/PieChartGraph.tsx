// import { FC, useState } from 'react';
// import ReactECharts from 'echarts-for-react';
// import { propsForPieChart } from '../../../interfaces/PieChartGraph.interface';
// import styles from './PieChartGraph.module.scss';
// import ButtonForPieChart from '../../Buttons/ButtonForPieChart';
// import Comment from '../../Comment/Comment';

// const PieChartGraph: FC<propsForPieChart> = ({ styleForPieChart, PieChart, name }) => {
//   const [isActive, setActive] = useState<number>(0);
//   const option = {
//     color: ['#951B81', '#F3AE4D', '#EA3742'],
//     series: [
//       {
//         name: name,
//         type: 'pie',
//         radius: ['40%', '50%'],
//         avoidLabelOverlap: false,
//         selectedMode: true,
//         selectedOffset: 0,
//         label: {
//           show: false,
//           position: 'center',
//         },
//         emphasis: {
//           label: {
//             show: true,
//             fontSize: 10,
//             fontWeight: 'bold',
//           },
//         },
//         labelLine: {
//           show: false,
//         },
//         data: PieChart,
//       },
//     ],
//   };
//   return (
//     <div className={styles.PieChart}>
//       <h3>{name}</h3>
//       <div className={styles.PieChart__containter}>
//         <div className={styles.buttons}>
//           {PieChart.map((item, index) => {
//             return (
//               <ButtonForPieChart
//                 key={index}
//                 isActive={isActive}
//                 setActive={setActive}
//                 index={index}
//                 name={item.name}
//               />
//             );
//           })}
//         </div>
//         <div>
//           <ReactECharts
//             className="echarts-for-echarts"
//             opts={{ renderer: 'svg' }}
//             style={styleForPieChart}
//             option={option}
//           />
//         </div>
//         <Comment valueLastYear={'-23'} desc={'п.п.'} />
//       </div>
//     </div>
//   );
// };

// export default PieChartGraph;
