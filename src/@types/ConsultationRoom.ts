import { Patient } from "./Campain";

export type Historique ={
    id:number;
    patient:Patient;
    end_consult_date:Date;
    description:String;
    action:string; 
}
