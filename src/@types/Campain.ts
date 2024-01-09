// -------------------------------------------------------CampagneVaccinationMadel----------------------------
export type CampagneVaccinationMadelAPI = {
  id: number;
  title: string;
  description: string;
  vaccine: Vaccine;
  createdAt: Date;
  startDate: Date;
  endDate: Date;
  status: boolean;
  locations: Locations[];
};

export type Role = {
  id: string;
  roleName: string;
};

export type Vaccine = {
  id: number;
  name: string;
  type: Type;
};
export type Type = {
  id: number;
  name: string;
};

export type Locations = {
  id: number;
  region: Region;
  quantity: number;
  audience: number;
};

export type Region = {
  id: number;
  name: string;
  state: States;
};
export type States = {
  id: number;
  name: string;
  country: string;
};

export type Acte = {
  NNI: number;
  patient: string;
  date: Date;
  professionel: string;
  Etablissement: string;
  vaccin: string;
  dose: string;
};
// -------------------------------------------Acte-----------------------
export type ActeFromAPI = {
  id: number;
  patient: Patient;
  pathologies: Pathologies[];
  vaccine: Vaccine;
  lotNumber: string;
  injectionSite: string;
  dose: Dose;
  createdAt: Date;
};
export type Patient = {
  id: number;
  phoneNumber: string;
  identification: string;
  fullName: string;
  birthDate: Date;
  gender: string;
  lastUpdate: Date;
  age: string;
};
export type Pathologies = {
  id: number;
  name: string;
};

export type Dose = {
  id: number;
  title: string;
  after: number;
};

// --------------------------------------------End Acte --------------------
export type Effet = {
  NNI: number;
  patient: string;
  type: string;
  vaccin: string;
  lieu: string;
  date: Date;

  // id: string;
  // nom: string;
  // username: string;
  // telephone: string;
  // date: Date;
};

export type Supervisor = {
  id: string;
  nom: string;
  username: string;
  telephone: string;
  date: Date;
};

export type Voter = {
  id: string;
  nni: string;
  fullName: string;
  phone: string;
  bureau: string;
  statut: string;
};
// --------------------------------------------Certifacte --------------------
export type CartificateHistorique = {
  id: number;
  nom: string;
  type: string;
};

export type Certificate = {
  id: number;
  NNI: string;
  types: Type[];
};
