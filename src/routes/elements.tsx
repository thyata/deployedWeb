import { Suspense, lazy, ElementType } from 'react';
// components
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

// AUTH
export const LoginPage = Loadable(lazy(() => import('../pages/auth/LoginPage')));
export const RegisterPage = Loadable(lazy(() => import('../pages/auth/RegisterPage')));
export const VerifyCodePage = Loadable(lazy(() => import('../pages/auth/VerifyCodePage')));
export const NewPasswordPage = Loadable(lazy(() => import('../pages/auth/NewPasswordPage')));
export const ResetPasswordPage = Loadable(lazy(() => import('../pages/auth/ResetPasswordPage')));

// DASHBOARD: GENERAL
export const GeneralAppPage = Loadable(lazy(() => import('../pages/dashboard/GeneralAppPage')));
export const GeneralEcommercePage = Loadable(
  lazy(() => import('../pages/dashboard/GeneralEcommercePage'))
);
export const GeneralAnalyticsPage = Loadable(
  lazy(() => import('../pages/dashboard/GeneralAnalyticsPage'))
);
export const GeneralBankingPage = Loadable(
  lazy(() => import('../pages/dashboard/GeneralBankingPage'))
);
export const GeneralBookingPage = Loadable(
  lazy(() => import('../pages/dashboard/GeneralBookingPage'))
);
export const GeneralFilePage = Loadable(lazy(() => import('../pages/dashboard/GeneralFilePage')));

// DASHBOARD: ECOMMERCE

// DASHBOARD: VACCINATION
export const VaccinationListPage = Loadable(
  lazy(() => import('../pages/dashboard/vaccination/List/VaccinationListPage'))
);
export const CampainCreatePage = Loadable(
  lazy(() => import('../pages/dashboard/vaccination/Campain/CampainCreatePage'))
);
export const CampainEditPage = Loadable(
  lazy(() => import('../pages/dashboard/vaccination/Campain/CampainEditPage'))
);
export const CampainDetailsPage = Loadable(
  lazy(() => import('../pages/dashboard/vaccination/List/campainDetails/CampainDetailsPage'))
);
export const ActeDetailsPage = Loadable(
  lazy(
    () =>
      import(
        '../pages/dashboard/vaccination/List/campainDetails/actes_de_vaccination/ActeDetailsPage'
      )
  )
);
export const ErrorDetailsPage = Loadable(
  lazy(
    () =>
      import(
        '../pages/dashboard/vaccination/List/campainDetails/gestionnaire_des_erreurs/ErrorCampainDetailsPage'
      )
  )
);
export const EffetIndesirableListPage = Loadable(
  lazy(
    () =>
      import('../pages/dashboard/vaccination/List/effets_indesirable/list/EffetIndesirableListPage')
  )
);
export const EffetDetailsPage = Loadable(
  lazy(() => import('../pages/dashboard/vaccination/List/effets_indesirable/list/EffetDetailsPage'))
);
export const AnalyticsPage = Loadable(
  lazy(() => import('../pages/dashboard/vaccination/Statistique/AnalyticsPage'))
);
export const VaccineListPage = Loadable(
  lazy(() => import('../pages/dashboard/vaccination/Vaccin/VaccineListPage'))
);

// DASHBOARD: GESTIONNAIRE DE L'EFFECTIF
// level 1
export const Level1HomePage = Loadable(
  lazy(
    () =>
      import('../pages/dashboard/gestionnaire_effectif/level_1/admin_centrale/AdminCenterHomePage')
  )
);
export const Level1ListPersonnel = Loadable(
  lazy(
    () =>
      import(
        '../pages/dashboard/gestionnaire_effectif/level_1/admin_centrale/List/PersonnelListPage'
      )
  )
);
export const Level1CreatePersonnel = Loadable(
  lazy(
    () =>
      import('../pages/dashboard/gestionnaire_effectif/level_1/admin_centrale/PersonnelCreatePage')
  )
);
export const Level1CreateDRAS = Loadable(
  lazy(() => import('../pages/dashboard/gestionnaire_effectif/level_1/DARS/DRAS_CreatePage'))
);

// level 2
export const Level2HomePage = Loadable(
  lazy(
    () =>
      import(
        '../pages/dashboard/gestionnaire_effectif/level_2/direction_regionale/RegionalDirectorateHomePage'
      )
  )
);
export const Level2ListPersonnel = Loadable(
  lazy(
    () =>
      import(
        '../pages/dashboard/gestionnaire_effectif/level_2/direction_regionale/List/PersonnelListPage'
      )
  )
);
export const Level2CreatePersonnel = Loadable(
  lazy(
    () =>
      import(
        '../pages/dashboard/gestionnaire_effectif/level_2/direction_regionale/PersonnelCreatePage'
      )
  )
);
export const Level2CreateRegion = Loadable(
  lazy(() => import('../pages/dashboard/gestionnaire_effectif/level_2/region/RegionCreatePage'))
);

// level 3
export const Level3HomePage = Loadable(
  lazy(
    () =>
      import(
        '../pages/dashboard/gestionnaire_effectif/level_3/points_des_vaccinations/PointVaccinHomePage'
      )
  )
);
export const Level3ListPersonnel = Loadable(
  lazy(
    () =>
      import(
        '../pages/dashboard/gestionnaire_effectif/level_3/points_des_vaccinations/List/PersonnelListPage'
      )
  )
);
export const Level3CreatePersonnel = Loadable(
  lazy(
    () =>
      import(
        '../pages/dashboard/gestionnaire_effectif/level_3/points_des_vaccinations/PersonnelCreatePage'
      )
  )
);
export const Level3CreatePoint = Loadable(
  lazy(() => import('../pages/dashboard/gestionnaire_effectif/level_3/points/PointCreatePage'))
);

// level 4
export const Level4ListAgents = Loadable(
  lazy(() => import('../pages/dashboard/gestionnaire_effectif/level_4/List/AgentListPage'))
);
export const Level4CreateAgent = Loadable(
  lazy(() => import('../pages/dashboard/gestionnaire_effectif/level_4/AgentCreatePage'))
);

// DASHBOARD: Hospitalisation

// DASHBOARD: INVOICE
export const InvoiceListPage = Loadable(lazy(() => import('../pages/dashboard/InvoiceListPage')));
export const InvoiceDetailsPage = Loadable(
  lazy(() => import('../pages/dashboard/InvoiceDetailsPage'))
);
export const InvoiceCreatePage = Loadable(
  lazy(() => import('../pages/dashboard/InvoiceCreatePage'))
);
export const InvoiceEditPage = Loadable(lazy(() => import('../pages/dashboard/InvoiceEditPage')));

// DASHBOARD: USER
export const UserProfilePage = Loadable(lazy(() => import('../pages/dashboard/UserProfilePage')));
export const UserCardsPage = Loadable(lazy(() => import('../pages/dashboard/UserCardsPage')));
export const UserListPage = Loadable(lazy(() => import('../pages/dashboard/UserListPage')));
export const UserAccountPage = Loadable(lazy(() => import('../pages/dashboard/UserAccountPage')));
export const UserCreatePage = Loadable(lazy(() => import('../pages/dashboard/UserCreatePage')));
export const UserEditPage = Loadable(lazy(() => import('../pages/dashboard/UserEditPage')));

// DASHBOARD: BLOG
export const BlogPostsPage = Loadable(lazy(() => import('../pages/dashboard/BlogPostsPage')));
export const BlogPostPage = Loadable(lazy(() => import('../pages/dashboard/BlogPostPage')));
export const BlogNewPostPage = Loadable(lazy(() => import('../pages/dashboard/BlogNewPostPage')));

// DASHBOARD: FILE MANAGER
export const FileManagerPage = Loadable(lazy(() => import('../pages/dashboard/FileManagerPage')));

// DASHBOARD: APP
export const ChatPage = Loadable(lazy(() => import('../pages/dashboard/ChatPage')));
export const MailPage = Loadable(lazy(() => import('../pages/dashboard/MailPage')));
export const CalendarPage = Loadable(
  lazy(() => import('../pages/dashboard/Calendar/CalendarPage'))
);

export const AppointmentListPage = Loadable(
  lazy(() => import('../pages/dashboard/Appointment/AppointmentListPage'))
);

// TEST RENDER PAGE BY ROLE
export const PermissionDeniedPage = Loadable(
  lazy(() => import('../pages/dashboard/PermissionDeniedPage'))
);

// BLANK PAGE
export const BlankPage = Loadable(lazy(() => import('../pages/dashboard/BlankPage')));

// MAIN
export const Page500 = Loadable(lazy(() => import('../pages/Page500')));
export const Page403 = Loadable(lazy(() => import('../pages/Page403')));
export const Page404 = Loadable(lazy(() => import('../pages/Page404')));
export const HomePage = Loadable(lazy(() => import('../pages/HomePage')));
export const FaqsPage = Loadable(lazy(() => import('../pages/FaqsPage')));
export const AboutPage = Loadable(lazy(() => import('../pages/AboutPage')));
export const Contact = Loadable(lazy(() => import('../pages/ContactPage')));
export const PricingPage = Loadable(lazy(() => import('../pages/PricingPage')));
export const PaymentPage = Loadable(lazy(() => import('../pages/PaymentPage')));
export const ComingSoonPage = Loadable(lazy(() => import('../pages/ComingSoonPage')));
export const MaintenancePage = Loadable(lazy(() => import('../pages/MaintenancePage')));

// DEMO COMPONENTS
// ----------------------------------------------------------------------

export const ComponentsOverviewPage = Loadable(
  lazy(() => import('../pages/components/ComponentsOverviewPage'))
);

// FOUNDATION
export const FoundationColorsPage = Loadable(
  lazy(() => import('../pages/components/foundation/FoundationColorsPage'))
);
export const FoundationTypographyPage = Loadable(
  lazy(() => import('../pages/components/foundation/FoundationTypographyPage'))
);
export const FoundationShadowsPage = Loadable(
  lazy(() => import('../pages/components/foundation/FoundationShadowsPage'))
);
export const FoundationGridPage = Loadable(
  lazy(() => import('../pages/components/foundation/FoundationGridPage'))
);
export const FoundationIconsPage = Loadable(
  lazy(() => import('../pages/components/foundation/FoundationIconsPage'))
);

// MUI COMPONENTS
export const MUIAccordionPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIAccordionPage'))
);
export const MUIAlertPage = Loadable(lazy(() => import('../pages/components/mui/MUIAlertPage')));
export const MUIAutocompletePage = Loadable(
  lazy(() => import('../pages/components/mui/MUIAutocompletePage'))
);
export const MUIAvatarPage = Loadable(lazy(() => import('../pages/components/mui/MUIAvatarPage')));
export const MUIBadgePage = Loadable(lazy(() => import('../pages/components/mui/MUIBadgePage')));
export const MUIBreadcrumbsPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIBreadcrumbsPage'))
);
export const MUIButtonsPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIButtonsPage'))
);
export const MUICheckboxPage = Loadable(
  lazy(() => import('../pages/components/mui/MUICheckboxPage'))
);
export const MUIChipPage = Loadable(lazy(() => import('../pages/components/mui/MUIChipPage')));
export const MUIDataGridPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIDataGridPage'))
);
export const MUIDialogPage = Loadable(lazy(() => import('../pages/components/mui/MUIDialogPage')));
export const MUIListPage = Loadable(lazy(() => import('../pages/components/mui/MUIListPage')));
export const MUIMenuPage = Loadable(lazy(() => import('../pages/components/mui/MUIMenuPage')));
export const MUIPaginationPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIPaginationPage'))
);
export const MUIPickersPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIPickersPage'))
);
export const MUIPopoverPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIPopoverPage'))
);
export const MUIProgressPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIProgressPage'))
);
export const MUIRadioButtonsPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIRadioButtonsPage'))
);
export const MUIRatingPage = Loadable(lazy(() => import('../pages/components/mui/MUIRatingPage')));
export const MUISliderPage = Loadable(lazy(() => import('../pages/components/mui/MUISliderPage')));
export const MUIStepperPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIStepperPage'))
);
export const MUISwitchPage = Loadable(lazy(() => import('../pages/components/mui/MUISwitchPage')));
export const MUITablePage = Loadable(lazy(() => import('../pages/components/mui/MUITablePage')));
export const MUITabsPage = Loadable(lazy(() => import('../pages/components/mui/MUITabsPage')));
export const MUITextFieldPage = Loadable(
  lazy(() => import('../pages/components/mui/MUITextFieldPage'))
);
export const MUITimelinePage = Loadable(
  lazy(() => import('../pages/components/mui/MUITimelinePage'))
);
export const MUITooltipPage = Loadable(
  lazy(() => import('../pages/components/mui/MUITooltipPage'))
);
export const MUITransferListPage = Loadable(
  lazy(() => import('../pages/components/mui/MUITransferListPage'))
);
export const MUITreesViewPage = Loadable(
  lazy(() => import('../pages/components/mui/MUITreesViewPage'))
);

// EXTRA
export const DemoAnimatePage = Loadable(
  lazy(() => import('../pages/components/extra/DemoAnimatePage'))
);
export const DemoCarouselsPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoCarouselsPage'))
);
export const DemoChartsPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoChartsPage'))
);
export const DemoCopyToClipboardPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoCopyToClipboardPage'))
);
export const DemoEditorPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoEditorPage'))
);
export const DemoFormValidationPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoFormValidationPage'))
);
export const DemoImagePage = Loadable(
  lazy(() => import('../pages/components/extra/DemoImagePage'))
);
export const DemoLabelPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoLabelPage'))
);
export const DemoLightboxPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoLightboxPage'))
);
export const DemoMapPage = Loadable(lazy(() => import('../pages/components/extra/DemoMapPage')));
export const DemoMegaMenuPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoMegaMenuPage'))
);
export const DemoMultiLanguagePage = Loadable(
  lazy(() => import('../pages/components/extra/DemoMultiLanguagePage'))
);
export const DemoNavigationBarPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoNavigationBarPage'))
);
export const DemoOrganizationalChartPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoOrganizationalChartPage'))
);
export const DemoScrollbarPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoScrollbarPage'))
);
export const DemoSnackbarPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoSnackbarPage'))
);
export const DemoTextMaxLinePage = Loadable(
  lazy(() => import('../pages/components/extra/DemoTextMaxLinePage'))
);
export const DemoUploadPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoUploadPage'))
);
export const DemoMarkdownPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoMarkdownPage'))
);
export const AgentPolitique = Loadable(
  lazy(() => import('../pages/dashboard/gestionnaire_effectif/acteurPolitique/ActeurPolitique'))
);

export const ElectionDetailList = Loadable(
  lazy(() => import('../pages/dashboard/election/electionDetailList'))
);

export const PointFocaux = Loadable(
  lazy(() => import('../pages/dashboard/gestionnaire_effectif/pointFocal/PointFocal'))
);
