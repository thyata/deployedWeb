import axios from 'axios';
// config

// ----------------------------------------------------------------------
const HOST_API_KEY = "http://190.92.134.163:5010"


export const TOKEN =
  'YATA eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTExMzMzMyIsImV4cCI6MTcyMjQ0NjE0OCwicm9sZXMiOlsiTUVERUNJTiIsIlVTRVIiXSwiaWQiOjYzMiwic2Vzc2lvbiI6MTE4MTA5LCJmaXJlYmFzZV9hdXRoX3Rva2VuIjoiZXlKaGJHY2lPaUpTVXpJMU5pSjkuZXlKaGRXUWlPaUpvZEhSd2N6b3ZMMmxrWlc1MGFYUjVkRzl2Ykd0cGRDNW5iMjluYkdWaGNHbHpMbU52YlM5bmIyOW5iR1V1YVdSbGJuUnBkSGt1YVdSbGJuUnBkSGwwYjI5c2EybDBMbll4TGtsa1pXNTBhWFI1Vkc5dmJHdHBkQ0lzSW1WNGNDSTZNVFk1TVRNME5UYzBPQ3dpYVdGMElqb3hOamt4TXpReU1UUTRMQ0pwYzNNaU9pSm1hWEpsWW1GelpTMWhaRzFwYm5Oa2F5MXRNbU4xWjBCNVlYUmhiV1ZrYVdOaGJDMDJPVFk0T0M1cFlXMHVaM05sY25acFkyVmhZMk52ZFc1MExtTnZiU0lzSW5OMVlpSTZJbVpwY21WaVlYTmxMV0ZrYldsdWMyUnJMVzB5WTNWblFIbGhkR0Z0WldScFkyRnNMVFk1TmpnNExtbGhiUzVuYzJWeWRtbGpaV0ZqWTI5MWJuUXVZMjl0SWl3aWRXbGtJam9pT1NKOS5KVTNZRkY0aVJRTTlVenBQVjN4Si1BZW4xdWpGYVJOR0poM3NxR0RUQ2taTWlwTEhlSTBlcGxNUmFjdTBZRlJWR2tNa1EtMFVEZUIydHkwcmpTZVpDcnZ1RGdJdVJfeDhJWmpwSURkWFIyeXU2cjR3OXFkR05tc0FEV3htOEVoSlFQWlQ3REZBTWZnU2JXVmFTa0pHdjEyS1hEaUVZdkExWlFZeVpBYlNod3c5TTRQSGpTUGZiUVZ6T3RZTl9aU0RaM2Q4SXB0dnNEYjlaSnZ6MTVqbC1aTmJmTEdnelRfeDRGY20wYnltR0I0ZnI3XzF3QWFDd0YzRi16bURmaUtzS1d6VVd4Yy02V3EtZ1B5QWNqTGkyWlJ2VmJnR284VDJsakJIWk9GdTgySnltR0I3M2xHejNyeEhfR3gzYU1hZnhfYWNZMVVqN0FtT3c5ajFfSGZFVXcifQ.wgNoYHAawvganZRLKX19ajep2Z2mkc2dWtrUM8RuPqc';

const axiosInstance = axios.create({
  baseURL: HOST_API_KEY, headers: {
    // 'Content-Type': 'application/json',
    Authorization: `${TOKEN}`,
  },
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

// localStorage.getItem('accessToken');

