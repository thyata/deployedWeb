import { paramCase } from 'change-case';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import Label from '../../../components/label';
import Iconify from '../../../components/iconify';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  blog: icon('ic_blog'),
  cart: icon('ic_cart'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
  group: icon('ic_group'),
  setting: icon('ic_settings'),
};

const navConfig = [
  // GENERAL
  //----------------------------------------------------------------------

  {
    subheader: '',
    items: [
      // { title: 'ecommerce', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
      // { title: 'analytics', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics },
      // { title: 'banking', path: PATH_DASHBOARD.general.banking, icon: ICONS.banking },
      // { title: 'booking', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
      // { title: 'file', path: PATH_DASHBOARD.general.file, icon: ICONS.file },

      { title: 'acceuil', path: PATH_DASHBOARD.general.statistique },
      { title: 'éléction', path: PATH_DASHBOARD.general.list },

      { title: 'Liste des adherants', path: PATH_DASHBOARD.general.acts },
      { title: 'Gestion des erreurs', path: PATH_DASHBOARD.general.error },
      { title: 'Liste des agents', path: PATH_DASHBOARD.general.listEffet },
      {
        title: 'Parametre',
        path: PATH_DASHBOARD.gestionnaireEffectif.centreHomePage,
        icon: ICONS.setting,
        children: [
          {
            title: "Gestion de l'effectif",
            path: PATH_DASHBOARD.gestionnaireEffectif.PointFocal,
          },

          {
            title: 'Gestion des roles',
            path: PATH_DASHBOARD.gestionnaireEffectif.AgentsListe,
          },

          {
            title: "Gestion de l'élection",
            path: PATH_DASHBOARD.gestionnaireEffectif.add_bureau,
          },
          // {
          //   title: 'Bureaux de vote',
          //   path: PATH_DASHBOARD.gestionnaireEffectif.add_bureau,
          // },
          // {
          //   title: 'Agent politique',
          //   path: PATH_DASHBOARD.gestionnaireEffectif.ActeurPolitique,
          // },
        ],
      },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'management',
  //   items: [
  //     //  USER
  //     // {
  //     //   title: 'user',
  //     //   path: PATH_DASHBOARD.user.root,
  //     //   icon: ICONS.user,
  //     //   children: [
  //     //     { title: 'profile', path: PATH_DASHBOARD.user.profile },
  //     //     { title: 'cards', path: PATH_DASHBOARD.user.cards },
  //     //     { title: 'list', path: PATH_DASHBOARD.user.list },
  //     //     { title: 'create', path: PATH_DASHBOARD.user.new },
  //     //     { title: 'edit', path: PATH_DASHBOARD.user.demoEdit },
  //     //     { title: 'account', path: PATH_DASHBOARD.user.account },
  //     //   ],
  //     // },
  //     // // E-COMMERCE
  //     // {
  //     //   title: 'ecommerce',
  //     //   path: PATH_DASHBOARD.eCommerce.root,
  //     //   icon: ICONS.cart,
  //     //   children: [
  //     //     { title: 'shop', path: PATH_DASHBOARD.eCommerce.shop },
  //     //     { title: 'product', path: PATH_DASHBOARD.eCommerce.demoView },
  //     //     { title: 'list', path: PATH_DASHBOARD.eCommerce.list },
  //     //     { title: 'create', path: PATH_DASHBOARD.eCommerce.new },
  //     //     { title: 'edit', path: PATH_DASHBOARD.eCommerce.demoEdit },
  //     //     { title: 'checkout', path: PATH_DASHBOARD.eCommerce.checkout },
  //     //   ],
  //     // },
  //     // --------------------------------------------------------------Start Work----------------------------------------------------------------------
  //     // { title: 'Effet secondaire', path: PATH_DASHBOARD.vaccinCamp.listEffet },
  //     // Vaccin camppagne
  //     // {
  //     //   path: PATH_DASHBOARD.vaccinCamp.root,
  //     //   icon: ICONS.user,
  //     //   children: [
  //     //     { title: 'Campagne', path: PATH_DASHBOARD.vaccinCamp.list },
  //     //     { title: 'Vaccins', path: PATH_DASHBOARD.vaccinCamp.list_vaccine },
  //     //     { title: 'Liste des actes', path: PATH_DASHBOARD.vaccinCamp.acts },
  //     //     { title: 'Gestion des erreurs', path: PATH_DASHBOARD.vaccinCamp.error },
  //     //     { title: 'Effet secondaire', path: PATH_DASHBOARD.vaccinCamp.listEffet },
  //     //     { title: 'Statistique', path: PATH_DASHBOARD.vaccinCamp.stistique },
  //     //     { title: 'Certificat', path: PATH_DASHBOARD.vaccinCamp.certifact },
  //     //   ],
  //     // },
  //     // Gestionnaire de l'effectif
  //     // {
  //     //   title: 'Parametre',
  //     //   path: PATH_DASHBOARD.gestionnaireEffectif.centreHomePage,
  //     //   icon: ICONS.setting,
  //     //   children: [
  //     //     {
  //     //       title: "Gestionnaire de l'effectif",
  //     //       path: PATH_DASHBOARD.gestionnaireEffectif.centreHomePage,
  //     //     },
  //     //     { title: 'Ajout bureau', path: PATH_DASHBOARD.vaccinCamp.list_vaccine },
  //     //   ],
  //     // },
  //     // Appointment
  //     // {
  //     //   title: 'Appointment',
  //     //   path: PATH_DASHBOARD.appointment.root,
  //     //   icon: ICONS.calendar,
  //     //   children: [
  //     //     { title: 'Calendrier', path: PATH_DASHBOARD.appointment.calendar },
  //     //     { title: 'Appointments List', path: PATH_DASHBOARD.appointment.appointmentList },
  //     //   ]
  //     // },
  //     // vaccine
  //     // {
  //     //   title: 'vaccine',
  //     //   path: PATH_DASHBOARD.vaccine.root,
  //     //   icon: ICONS.invoice,
  //     //   children: [
  //     //     { title: 'list', path: PATH_DASHBOARD.vaccine.list },
  //     //    // { title: 'details', path: PATH_DASHBOARD.vaccine.demoView },
  //     //     { title: 'create', path: PATH_DASHBOARD.vaccine.new },
  //     //     { title: 'edit', path: PATH_DASHBOARD.vaccine.demoEdit },
  //     //   ],
  //     // },
  //     // hospitalisation
  //     // {
  //     //   title: 'hospitalisation',
  //     //   path: PATH_DASHBOARD.hospitalisation.root,
  //     //   icon: ICONS.invoice,
  //     //   children: [
  //     //     { title: 'Les patients Hospitalisée', path: PATH_DASHBOARD.hospitalisation.patient_hospitalise },
  //     //     { title: 'Demandes d\'hospitalisation', path: PATH_DASHBOARD.hospitalisation.listDemande },
  //     //     { title: 'Configuration', path: PATH_DASHBOARD.hospitalisation.list },
  //     //   ],
  //     // },
  //     // {
  //     //   title: 'Patient',
  //     //   path: PATH_DASHBOARD.patient.root,
  //     //   icon: ICONS.user,
  //     //   children: [
  //     //     { title: "Salle d'attente", path: PATH_DASHBOARD.patient.list },
  //     //     {
  //     //       title: 'Listes de RDV',
  //     //       path: PATH_DASHBOARD.patient.RDV,
  //     //       children:[
  //     //         { title: 'Calendrier', path: PATH_DASHBOARD.patient.calendar },
  //     //         { title: 'Appointments List', path: PATH_DASHBOARD.patient.appointmentList },
  //     //       ]
  //     //     },
  //     //     { title: "Historique",path: PATH_DASHBOARD.patient.historique},
  //     //     { title: 'Paramétrage',path: PATH_DASHBOARD.patient.list },
  //     //   ],
  //     // },
  //     // ---------------------------------------------------------------------------END Work-----------------------------------------------------------
  //     // INVOICE
  //     // {
  //     //   title: 'invoice',
  //     //   path: PATH_DASHBOARD.invoice.root,
  //     //   icon: ICONS.invoice,
  //     //   children: [
  //     //     { title: 'list', path: PATH_DASHBOARD.invoice.list },
  //     //     { title: 'details', path: PATH_DASHBOARD.invoice.demoView },
  //     //     { title: 'create', path: PATH_DASHBOARD.invoice.new },
  //     //     { title: 'edit', path: PATH_DASHBOARD.invoice.demoEdit },
  //     //   ],
  //     // },
  //     // // BLOG
  //     // {
  //     //   title: 'blog',
  //     //   path: PATH_DASHBOARD.blog.root,
  //     //   icon: ICONS.blog,
  //     //   children: [
  //     //     { title: 'posts', path: PATH_DASHBOARD.blog.posts },
  //     //     { title: 'post', path: PATH_DASHBOARD.blog.demoView },
  //     //     { title: 'create', path: PATH_DASHBOARD.blog.new },
  //     //   ],
  //     // },
  //     // {
  //     //   title: 'File manager',
  //     //   path: PATH_DASHBOARD.fileManager,
  //     //   icon: ICONS.folder,
  //     // },
  //   ],
  // },

  // APP
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'app',
  //   items: [
  //     {
  //       title: 'mail',
  //       path: PATH_DASHBOARD.mail.root,
  //       icon: ICONS.mail,
  //       info: <Label color="error">+32</Label>,
  //     },
  //     {
  //       title: 'chat',
  //       path: PATH_DASHBOARD.chat.root,
  //       icon: ICONS.chat,
  //     },
  //     {
  //       title: 'calendar',
  //       path: PATH_DASHBOARD.calendar,
  //       icon: ICONS.calendar,
  //     },
  //     {
  //       title: 'kanban',
  //       path: PATH_DASHBOARD.kanban,
  //       icon: ICONS.kanban,
  //     },
  //   ],
  // },

  // // DEMO MENU STATES
  // {
  //   subheader: 'Other cases',
  //   items: [
  //     {
  //       // default roles : All roles can see this entry.
  //       // roles: ['user'] Only users can see this item.
  //       // roles: ['admin'] Only admin can see this item.
  //       // roles: ['admin', 'manager'] Only admin/manager can see this item.
  //       // Reference from 'src/guards/RoleBasedGuard'.
  //       title: 'item_by_roles',
  //       path: PATH_DASHBOARD.permissionDenied,
  //       icon: ICONS.lock,
  //       roles: ['admin'],
  //       caption: 'only_admin_can_see_this_item',
  //     },
  //     {
  //       title: 'menu_level',
  //       path: '#/dashboard/menu_level',
  //       icon: ICONS.menuItem,
  //       children: [
  //         {
  //           title: 'menu_level_2a',
  //           path: '#/dashboard/menu_level/menu_level_2a',
  //         },
  //         {
  //           title: 'menu_level_2b',
  //           path: '#/dashboard/menu_level/menu_level_2b',
  //           children: [
  //             {
  //               title: 'menu_level_3a',
  //               path: '#/dashboard/menu_level/menu_level_2b/menu_level_3a',
  //             },
  //             {
  //               title: 'menu_level_3b',
  //               path: '#/dashboard/menu_level/menu_level_2b/menu_level_3b',
  //               children: [
  //                 {
  //                   title: 'menu_level_4a',
  //                   path: '#/dashboard/menu_level/menu_level_2b/menu_level_3b/menu_level_4a',
  //                 },
  //                 {
  //                   title: 'menu_level_4b',
  //                   path: '#/dashboard/menu_level/menu_level_2b/menu_level_3b/menu_level_4b',
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       title: 'item_disabled',
  //       path: '#disabled',
  //       icon: ICONS.disabled,
  //       disabled: true,
  //     },

  //     {
  //       title: 'item_label',
  //       path: '#label',
  //       icon: ICONS.label,
  //       info: (
  //         <Label color="info" startIcon={<Iconify icon="eva:email-fill" />}>
  //           NEW
  //         </Label>
  //       ),
  //     },
  //     {
  //       title: 'item_caption',
  //       path: '#caption',
  //       icon: ICONS.menuItem,
  //       caption:
  //         'Quisque malesuada placerat nisl. In hac habitasse platea dictumst. Cras id dui. Pellentesque commodo eros a enim. Morbi mollis tellus ac sapien.',
  //     },
  //     {
  //       title: 'item_external_link',
  //       path: 'https://www.google.com/',
  //       icon: ICONS.external,
  //     },
  //     {
  //       title: 'blank',
  //       path: PATH_DASHBOARD.blank,
  //       icon: ICONS.blank,
  //     },
  //   ],
  // },
];

export default navConfig;
