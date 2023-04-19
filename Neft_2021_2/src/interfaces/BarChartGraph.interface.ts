export type barChart = {
  year: number;
  value: number;
};
export type label = {
  show: boolean;
  position: string;
};

export interface ItemStyle {
  color?: string;
  borderColor?: string;
  borderWidth?: string;
  borderType?: string;
  borderRadius?: string;
  shadowBlur?: string;
  shadowColor?: string;
  shadowOffsetX?: string;
  shadowOffsetY?: string;
  opacity?: string;
  decal?: string;
}

export interface IInterface {
  value: number;
  itemStyle?: ItemStyle;
  label?: label;
}
export interface propsForBarChart {
  styleForBarChart: React.CSSProperties;
  BarChart: barChart[];
  title: string;
  yName?: string;
}
