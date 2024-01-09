import { Locations } from 'src/@types/Campain';
import { Etablissement,Responsable } from 'src/@types/Etablissement';
type IFormValuesProps = Omit<Etablissement,'responsable' | 'location'>;

export interface FormValuesProps extends IFormValuesProps {
    responsable:Responsable | null;
    location:Locations | null;
 
}
