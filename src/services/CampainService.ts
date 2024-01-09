import { listMembers } from 'src/assets/data/listMembers';
import { FormValuesProps } from '../pages/dashboard/vaccination/Campain/FormPropsValues';
import http from '../http-common';

function getListMembers() {
  return listMembers;
}

function getAllVaccineType(page: any, size: any) {
  return http.get(`/types/?page=${page}&size=${size}`);
}
function getAllVaccineOfType(page: any, size: any, idType?: number, search?: string) {
  let url = `/?page=${page}&size=${size}`;
  if (idType) url += `&typeId=${idType}`;
  if (search) url += `&search=${search}`;
  return http.get(url);
}
function createCampaign(data: FormValuesProps) {
  return http.post('/campaigns/', data);
}
function getAll(page: any, size: any, search?: string) {
  let url = `/campaigns/?page=${page}&size=${size}`;
  if (search) url += `&search=${search}`;

  return http.get(url);
}
function getAllActes(page: any, size: any, search?: string) {
  let url = `/acts/?page=${page}&size=${size}`;
  if (search) url += `&search=${search}`;

  return http.get(url);
}
function filterActesByDate(page: any, size: any, to?: any, from?: any) {
  let url = `/acts/?page=${page}&size=${size}`;
  if (from && to) url += `&to=${to}&from=${from}`;

  return http.get(url);
}
function filterActesByVaccine(page: any, size: any, vaccineId: any) {
  let url = `/acts/?page=${page}&size=${size}`;
  if (vaccineId) url += `&vaccineId=${vaccineId}`;

  return http.get(url);
}

const CampainService = {
  getAll,
  getAllVaccineType,
  getAllVaccineOfType,
  createCampaign,
  getAllActes,
  filterActesByDate,
  filterActesByVaccine,
  getListMembers,
};
export default CampainService;
