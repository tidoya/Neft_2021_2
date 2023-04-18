import { createSlice } from '@reduxjs/toolkit';
import { ChartState } from '../../interfaces/reducers/ChartReducer.inteface';
import {
  GetChart,
  GetChartDesc,
  GetpieChart,
  ProdChart,
  ProdChartDesc,
  ProdpieChart,
} from '../ThunkCreator/ChartThunkCreators';

const initialState: ChartState = {
  BarChart: [],
  description: { left: '', right: '' },
  PieChart: [],
  isLoading: false,
  error: '',
};

export const ChartSlice = createSlice({
  name: 'ChartSlice',
  initialState,
  reducers: {
    resetChart: (state) => {
      return {
        ...state,
        BarChart: [],
        description: { left: '', right: '' },
        PieChart: [],
        isLoading: false,
        error: '',
      };
    },
  },
  extraReducers: (builder) => {
    // Дискрипшн для "всего"
    builder.addCase(GetChart.pending, (state) => {
      state.isLoading = true;
      state.BarChart = [];
    });
    builder.addCase(GetChart.fulfilled, (state, action) => {
      state.BarChart = action.payload;
      state.isLoading = false;
    });
    builder.addCase(GetChart.rejected, (state) => {
      state.error = 'error';
      state.BarChart = [];
      state.isLoading = false;
    });
    // Данные для "всего"
    builder.addCase(GetChartDesc.pending, (state) => {
      state.isLoading = true;
      state.description = { left: '', right: '' };
    });
    builder.addCase(GetChartDesc.fulfilled, (state, action) => {
      state.description = action.payload;
      state.isLoading = false;
    });
    builder.addCase(GetChartDesc.rejected, (state) => {
      state.error = 'error';
      state.description = { left: '', right: '' };
      state.isLoading = false;
    });
    // Pie данные для "всего"
    builder.addCase(GetpieChart.pending, (state) => {
      state.isLoading = true;
      state.PieChart = [];
    });
    builder.addCase(GetpieChart.fulfilled, (state, action) => {
      state.PieChart = action.payload;
      state.isLoading = false;
    });
    builder.addCase(GetpieChart.rejected, (state) => {
      state.error = 'error';
      state.PieChart = [];
      state.isLoading = false;
    });

    // Дискрипшн для "Фонда эксплуатационных скважин"
    builder.addCase(ProdChart.pending, (state) => {
      state.isLoading = true;
      state.BarChart = [];
    });
    builder.addCase(ProdChart.fulfilled, (state, action) => {
      state.BarChart = action.payload;
      state.isLoading = false;
    });
    builder.addCase(ProdChart.rejected, (state) => {
      state.error = 'error';
      state.BarChart = [];
      state.isLoading = false;
    });
    // Данные для "Фонда эксплуатационных скважин"
    builder.addCase(ProdChartDesc.pending, (state) => {
      state.isLoading = true;
      state.description = { left: '', right: '' };
    });
    builder.addCase(ProdChartDesc.fulfilled, (state, action) => {
      state.description = action.payload;
      state.isLoading = false;
    });
    builder.addCase(ProdChartDesc.rejected, (state) => {
      state.error = 'error';
      state.description = { left: '', right: '' };
      state.isLoading = false;
    });
    // Pie данные для "Фонда эксплуатационных скважин"
    builder.addCase(ProdpieChart.pending, (state) => {
      state.isLoading = true;
      state.PieChart = [];
    });
    builder.addCase(ProdpieChart.fulfilled, (state, action) => {
      state.PieChart = action.payload;
      state.isLoading = false;
    });
    builder.addCase(ProdpieChart.rejected, (state) => {
      state.error = 'error';
      state.PieChart = [];
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { resetChart } = ChartSlice.actions;

export default ChartSlice.reducer;
