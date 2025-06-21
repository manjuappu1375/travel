// client/src/services/tourService.ts
import axios from 'axios';

export const fetchTours = async () => {
  const response = await axios.get('/api/tours');
  return response.data; // assumed to be an array of tours
};

export const fetchTourById = async (id: string) => {
  const response = await axios.get(`/api/tours/${id}`);
  return response.data; // single tour object
};
