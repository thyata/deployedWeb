import { CampagneVaccinationMadelAPI, Vaccine } from 'src/@types/Campain';
type IFormValuesProps = Omit<CampagneVaccinationMadelAPI,'vaccine'|'startDate'|'endDate'>;

export interface FormValuesProps extends IFormValuesProps {
  vaccine:Vaccine | null;
  startDate:Date | null;
  endDate:Date | null;
}
