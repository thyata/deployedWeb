export const supervisorList = [
  { id: '1', nom: 'Ali Mohamed', username: 'ali@1', telephone: '27666242', date: new Date() },
  { id: '2', nom: 'Mbarka', username: 'slkBk', telephone: '27666242', date: new Date() },
  { id: '3', nom: 'Baba Deh', username: 'bdeh23', telephone: '27666242', date: new Date() },
];

export const TABLE_HEAD_SUPERVISOR = [
  { id: 'Id', label: 'Id', align: 'left' },
  { id: 'Nom', label: 'Nom', align: 'left' },
  { id: 'Nom utilisateur', label: 'Nom utilisateur', align: 'left' },
  { id: 'telephone', label: 'Telephone', align: 'left' },
  { id: '' },
];

export const TABLE_HEAD_ROLE = [
  { id: 'Id', label: 'Id', align: 'left' },
  { id: 'Permission', label: 'Permission', align: 'left' },

  { id: '' },
];

export const roleList = [
  {
    id: '1',
    roleName: 'Ajouter superviseur',
  },
  {
    id: '2',
    roleName: 'Ajouter point focal',
  },
  {
    id: '3',
    roleName: 'Ajouter acteur politique',
  },
  {
    id: '4',
    roleName: 'Ajouter bureau',
  },
  {
    id: '5',
    roleName: 'Ajouter zone',
  },
  {
    id: '6',
    roleName: 'Ajouter role',
  },
  {
    id: '7',
    roleName: 'Affecter vers bureau',
  },
  {
    id: '8',
    roleName: 'Attribuer role',
  },
  {
    id: '9',
    roleName: 'Demarer election',
  },
  {
    id: '10',
    roleName: 'Modifier acces',
  },
  {
    id: '11',
    roleName: 'Supprimer utilisateurs',
  },
  {
    id: '12',
    roleName: 'Envoyer sms',
  },
];

export const TABLE_HEAD_ELECTION = [
  { id: 'NNI', label: 'NNI', align: 'left' },
  { id: 'Nom complet', label: 'complet', align: 'left' },
  { id: 'Telephone', label: 'Telephone', align: 'left' },
  { id: 'Bureau de vote', label: 'Bureau de vote', align: 'left' },
  { id: 'Statut', label: 'Statut', align: 'left' },
  { id: '' },
];

export const votants = [
  {
    id: '1',
    nni: '98765432',
    fullName: 'Oumar Mohamed',
    phone: '22334455',
    bureau: 'El Mina 2',
    statut: 'confirme',
  },
  {
    id: '2',
    nni: '2345266789',
    fullName: 'Ahmed ba',
    phone: '123445',
    bureau: 'GHT',
    statut: 'confirme',
  },
  {
    id: '3',
    nni: '9908632',
    fullName: 'Thierno ba',
    phone: '908973422',
    bureau: 'Rosso',
    statut: 'a reviser',
  },
  {
    id: '4',
    nni: '7534634324',
    fullName: 'Mariame Sy',
    phone: '9834243',
    bureau: 'Sebkha',
    statut: 'confirme',
  },
  {
    id: '5',
    nni: '342247862',
    fullName: 'Ahmed Sow',
    phone: '45232123',
    bureau: 'Poto 4',
    statut: 'a reviser',
  },
];

export const statusVote = [
  {
    id: '1',
    label: 'Confirme',
  },
  {
    id: '2',
    label: 'a reviser',
  },
  {
    id: '3',
    label: "n'est pas vote",
  },
];
