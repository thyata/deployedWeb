// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  verify: path(ROOTS_AUTH, '/verify'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  newPassword: path(ROOTS_AUTH, '/new-password'),
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  components: '/components',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    statistique: path(ROOTS_DASHBOARD, '/statistique'),
    list: path(ROOTS_DASHBOARD, '/list'),
    listEffet: path(ROOTS_DASHBOARD, '/listEffet'),
    effetDetails: path(ROOTS_DASHBOARD, '/effetDetails'),
    acts: path(ROOTS_DASHBOARD, '/acts'),
    error: path(ROOTS_DASHBOARD, '/error'),
    ElectionDetailList: (id: string) => path(ROOTS_DASHBOARD, `/election/electionDetail/${id}`),
  },
  mail: {
    root: path(ROOTS_DASHBOARD, '/mail'),
    all: path(ROOTS_DASHBOARD, '/mail/all'),
  },
  chat: {
    root: path(ROOTS_DASHBOARD, '/chat'),
    new: path(ROOTS_DASHBOARD, '/chat/new'),
    view: (name: string) => path(ROOTS_DASHBOARD, `/chat/${name}`),
  },
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    new: path(ROOTS_DASHBOARD, '/user/new'),
    list: path(ROOTS_DASHBOARD, '/user/list'),
    cards: path(ROOTS_DASHBOARD, '/user/cards'),
    profile: path(ROOTS_DASHBOARD, '/user/profile'),
    account: path(ROOTS_DASHBOARD, '/user/account'),
    edit: (name: string) => path(ROOTS_DASHBOARD, `/user/${name}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
  },
  eCommerce: {
    root: path(ROOTS_DASHBOARD, '/e-commerce'),
    shop: path(ROOTS_DASHBOARD, '/e-commerce/shop'),
    list: path(ROOTS_DASHBOARD, '/e-commerce/list'),
    checkout: path(ROOTS_DASHBOARD, '/e-commerce/checkout'),
    new: path(ROOTS_DASHBOARD, '/e-commerce/product/new'),
    view: (name: string) => path(ROOTS_DASHBOARD, `/e-commerce/product/${name}`),
    edit: (name: string) => path(ROOTS_DASHBOARD, `/e-commerce/product/${name}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, '/e-commerce/product/nike-blazer-low-77-vintage/edit'),
    demoView: path(ROOTS_DASHBOARD, '/e-commerce/product/nike-air-force-1-ndestrukt'),
  },
  // Vaccination :
  vaccinCamp: {
    root: path(ROOTS_DASHBOARD, '/vaccinCamp'),
    list: path(ROOTS_DASHBOARD, '/vaccinCamp/list'),
    listEffet: path(ROOTS_DASHBOARD, '/vaccinCamp/listEffet'),
    effetDetails: path(ROOTS_DASHBOARD, '/vaccinCamp/effetDetails'),
    new: path(ROOTS_DASHBOARD, '/vaccinCamp/camp/new'),
    edit: (title: string) => path(ROOTS_DASHBOARD, `/vaccinCamp/camp/${title}/edit`),
    view: (title: string) => path(ROOTS_DASHBOARD, `/vaccinCamp/camp/${title}`),
    acteDetail: (title: string) => path(ROOTS_DASHBOARD, `/vaccinCamp/acteDetails/${title}`),
    acts: path(ROOTS_DASHBOARD, '/vaccinCamp/actesVaccination'),
    error: path(ROOTS_DASHBOARD, '/vaccinCamp/Errer'),
    list_vaccine: path(ROOTS_DASHBOARD, '/vaccinCamp/list-vaccine'),
    create_vaccine: path(ROOTS_DASHBOARD, '/vaccinCamp/new-vaccine'),
    stistique: path(ROOTS_DASHBOARD, '/vaccinCamp/stistique'),
    certifact: path(ROOTS_DASHBOARD, '/vaccinCamp/certificate'),
  },

  // Gestion des effets
  gestionnaireEffectif: {
    // root: path(ROOTS_DASHBOARD, '/gestionnaireEffectif'),
    // level 1:
    centreHomePage: path(ROOTS_DASHBOARD, '/gestionnaireEffectif/centreHomePage'),
    centreListPersonnel: path(ROOTS_DASHBOARD, '/gestionnaireEffectif/centreListPersonnel'),
    centreCreatePersonnel: path(ROOTS_DASHBOARD, '/gestionnaireEffectif/centreCreatePersonnel'),
    centreCreateDRAS: path(ROOTS_DASHBOARD, '/gestionnaireEffectif/centreCreateDRAS'),
    // level 2 :
    RegionHomePage: path(ROOTS_DASHBOARD, '/gestionnaireEffectif/RegionHomePage'),
    RegionListPersonnel: path(ROOTS_DASHBOARD, '/gestionnaireEffectif/RegionListPersonnel'),
    RegionCreatePersonnel: path(ROOTS_DASHBOARD, '/gestionnaireEffectif/RegionCreatePersonnel'),
    RegionCreateRegion: path(ROOTS_DASHBOARD, '/gestionnaireEffectif/RegionCreateRegion'),
    // level 3 :
    PointHomePage: path(ROOTS_DASHBOARD, '/gestionnaireEffectif/PointHomePage'),
    PointListPersonnel: path(ROOTS_DASHBOARD, '/gestionnaireEffectif/PointListPersonnel'),
    PointCreatePersonnel: path(ROOTS_DASHBOARD, '/gestionnaireEffectif/PointCreatePersonnel'),
    PointCreatePoint: path(ROOTS_DASHBOARD, '/gestionnaireEffectif/PointCreatePoint'),
    // level 4 :
    AgentsListe: path(ROOTS_DASHBOARD, '/gestionnaireEffectif/AgentsListe'),
    AgentsCreatePage: path(ROOTS_DASHBOARD, '/gestionnaireEffectif/AgentsCreatePage'),
    add_bureau: path(ROOTS_DASHBOARD, '/gestionnaireEffectif/add_bureau'),
    create_bureau: path(ROOTS_DASHBOARD, '/gestionnaireEffectif/new-bureau'),
    ActeurPolitique: path(ROOTS_DASHBOARD, '/gestionnaireEffectif/ActeurPolitique'),
    edit: (id: string) => path(ROOTS_DASHBOARD, `/gestionnaireEffectif/electionDetail/${id}`),
    PointFocal: path(ROOTS_DASHBOARD, '/gestionnaireEffectif/PointFocal'),
  },
  appointment: {
    root: path(ROOTS_DASHBOARD, '/Appointment'),
    calendar: path(ROOTS_DASHBOARD, '/Appointment/calendar'),
    appointmentList: path(ROOTS_DASHBOARD, '/Appointment/Appointment-List'),
  },

  vaccine: {
    root: path(ROOTS_DASHBOARD, '/vaccine'),
    list: path(ROOTS_DASHBOARD, '/vaccine/list'),
    new: path(ROOTS_DASHBOARD, '/vaccine/new'),
    view: (id: string) => path(ROOTS_DASHBOARD, `/vaccine/${id}`),
    edit: (id: string) => path(ROOTS_DASHBOARD, `/vaccine/${id}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, '/vaccine/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit'),
    demoView: path(ROOTS_DASHBOARD, '/vaccine/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'),
  },
  // Patient :

  invoice: {
    root: path(ROOTS_DASHBOARD, '/invoice'),
    list: path(ROOTS_DASHBOARD, '/invoice/list'),
    new: path(ROOTS_DASHBOARD, '/invoice/new'),
    view: (id: string) => path(ROOTS_DASHBOARD, `/invoice/${id}`),
    edit: (id: string) => path(ROOTS_DASHBOARD, `/invoice/${id}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit'),
    demoView: path(ROOTS_DASHBOARD, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'),
  },
  blog: {
    root: path(ROOTS_DASHBOARD, '/blog'),
    posts: path(ROOTS_DASHBOARD, '/blog/posts'),
    new: path(ROOTS_DASHBOARD, '/blog/new'),
    view: (title: string) => path(ROOTS_DASHBOARD, `/blog/post/${title}`),
    demoView: path(ROOTS_DASHBOARD, '/blog/post/apply-these-7-secret-techniques-to-improve-event'),
  },
};

export const PATH_DOCS = {
  root: 'https://docs.minimals.cc',
  changelog: 'https://docs.minimals.cc/changelog',
};

export const PATH_ZONE_ON_STORE = 'https://mui.com/store/items/zone-landing-page/';

export const PATH_MINIMAL_ON_STORE = 'https://mui.com/store/items/minimal-dashboard/';

export const PATH_FREE_VERSION = 'https://mui.com/store/items/minimal-dashboard-free/';

export const PATH_FIGMA_PREVIEW =
  'https://www.figma.com/file/rWMDOkMZYw2VpTdNuBBCvN/%5BPreview%5D-Minimal-Web.26.11.22?node-id=0%3A1&t=ya2mDFiuhTXXLLF1-1';
