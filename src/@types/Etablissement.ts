import { Region } from "./Campain";


export type Etablissement = {
    id:number;
    nom:string;
    imgUrl:string;
    responsable:Responsable;
    location:Region;

}
export type Responsable= {
    id: number;
    nom:string;
    post:string;
    email:string;
    telephone:string;
    password:string;
}