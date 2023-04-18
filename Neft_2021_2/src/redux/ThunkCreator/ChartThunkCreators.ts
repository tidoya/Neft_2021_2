import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllbarChart,
  getAllbarChartDesc,
  getAllpieChart,
  getProd,
  getProdChartDesc,
  getProdpieChart,
} from '../../api/api';

export const GetChart = createAsyncThunk('ChartSlice/GetChart', async () => {
  const data = await getAllbarChart();
  return data;
});
export const GetChartDesc = createAsyncThunk('ChartSlice/GetChartDesc', async () => {
  const { description } = await getAllbarChartDesc();
  return description;
});
export const GetpieChart = createAsyncThunk('ChartSlice/GetpieChart', async () => {
  const data = await getAllpieChart();
  return data;
});
export const ProdChart = createAsyncThunk('ChartSlice/ProdChart', async () => {
  const data = await getProd();
  return data;
});
export const ProdChartDesc = createAsyncThunk('ChartSlice/ProdChartDesc', async () => {
  const description = await getProdChartDesc();
  return description;
});
export const ProdpieChart = createAsyncThunk('ChartSlice/ProdpieChart', async () => {
  const data = await getProdpieChart();
  return data;
});
