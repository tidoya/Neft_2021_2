export type barChart = {
  year: number;
  value: number;
};
export type pieChart = {
  name: string;
  value: number;
  prev: number;
};
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
