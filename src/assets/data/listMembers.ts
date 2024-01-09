export const listMembers = [
  {
    id: 1,
    nni: '0234556770',
    fullName: 'Ahmed Oumar',
    pointFocal: 'Sidi ba',
    bureau: 'El mina 2',
    dateCreation: '12/12/2023',
    statut: 0,
  },
  {
    id: 2,
    nni: '67733456770',
    fullName: 'Sidi Ahmed Oumar',
    pointFocal: 'MEdSidi ba',
    bureau: 'El mina 3',
    dateCreation: '12/12/2023',
    statut: 0,
  },
  {
    id: 3,
    nni: '1234556770',
    fullName: 'Cheikh ba',
    pointFocal: 'Ndinde sow',
    bureau: 'Poto 11',
    dateCreation: '12/12/2023',
    statut: 0,
  },
  {
    id: 4,
    nni: '93234556770',
    fullName: 'Ahmed amar',
    pointFocal: 'Maguett',
    bureau: 'Sebkha 2',
    dateCreation: '12/12/2023',
    statut: 2,
  },
];

export const listPointFocaux = [
  { id: 1, nomResponsable: 'Kane Ousmane', phone: '45678900', wilaya: 'Nouakchott', email: '' },
  { id: 2, nomResponsable: 'Ba Oumar', phone: '1234675', wilaya: 'Nouadhibou', email: '' },
  { id: 3, nomResponsable: 'Ahmed ould bah', phone: '33445566', wilaya: 'Rosso', email: '' },
  { id: 4, nomResponsable: 'Souadou Sow', phone: '23156788', wilaya: 'Gorgol', email: '' },
];

export const listBureaux = [
  { id: 1, wilaya: 'Nouakchott', moughataa: 'El mina', nomBureau: 'Ecole 10' },
  { id: 2, wilaya: 'Nouadhibou', moughataa: 'Jadida', nomBureau: 'Ecole nijoum' },
  { id: 3, wilaya: 'Rosso', moughataa: 'Keur macen', nomBureau: 'marche 4' },
  { id: 4, wilaya: 'Gorgol', moughataa: 'Kaedi', nomBureau: 'Ecole moderne' },
];

export const listAgents = [
  { id: 1, wilaya: 'Nouakchott', moughataa: 'El mina', nomBureau: 'Ecole 10' },
  { id: 2, wilaya: 'Nouadhibou', moughataa: 'Jadida', nomBureau: 'Ecole nijoum' },
  { id: 3, wilaya: 'Rosso', moughataa: 'Keur macen', nomBureau: 'marche 4' },
  { id: 4, wilaya: 'Gorgol', moughataa: 'Kaedi', nomBureau: 'Ecole moderne' },
];

export interface Member {
  id: number;
  nni: string;
  fullName: string;
  pointFocal: string;
  bureau: string;
  dateCreation: string | Date | null;
  statut: number;
}

export interface Bureau {
  id: number;
  wilaya: string;
  moughataa: string;
  nomBureau: string;
}

export interface Zone {}

export interface pointFocal {
  id: string;
  nom: string;
  username: string;
  telephone: string;
  date: Date;
}
