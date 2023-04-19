import { barChart } from '../BarChartGraph.interface';
import { pieChart } from '../PieChartGraph.interface';

export type desc = {
  left: string;
  right: string;
};
export interface ChartState {
  BarChart: barChart[];
  description: desc;
  PieChart: pieChart[];
  isLoading: boolean;
  error: string | null;
}
