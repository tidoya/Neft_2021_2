export type pieChart = {
  name: string;
  value: number;
  prev: number;
  yName?: string;
};

export interface propsForPieChart {
  styleForPieChart: React.CSSProperties;
  PieChart: pieChart[];
  name?: string;
}
