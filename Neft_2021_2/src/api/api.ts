import { Endpoints, baseURL } from './Endpoints';

export const getAllbarChart = async () => {
  try {
    const response = await fetch(baseURL + Endpoints.CHARTALL.BARCHART);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка запроса');
  }
};
export const getAllbarChartDesc = async () => {
  try {
    const response = await fetch(baseURL + Endpoints.CHARTALL.BARCHARTDESC);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка запроса');
  }
};
export const getAllpieChart = async () => {
  try {
    const response = await fetch(baseURL + Endpoints.CHARTALL.PIECHART);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка запроса');
  }
};
export const getProd = async () => {
  try {
    const response = await fetch(baseURL + Endpoints.CHARTPROD.BARCHART);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка запроса');
  }
};
export const getProdChartDesc = async () => {
  try {
    const response = await fetch(baseURL + Endpoints.CHARTPROD.BARCHARTDESC);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка запроса');
  }
};
export const getProdpieChart = async () => {
  try {
    const response = await fetch(baseURL + Endpoints.CHARTPROD.PIECHART);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка запроса');
  }
};
