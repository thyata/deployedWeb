import { Navigate, useRoutes } from 'react-router-dom';
// auth
import AuthGuard from '../auth/AuthGuard';
import GuestGuard from '../auth/GuestGuard';
// layouts
import MainLayout from '../layouts/main';
import SimpleLayout from '../layouts/simple';
import CompactLayout from '../layouts/compact';
import DashboardLayout from '../layouts/dashboard';
// config
import { PATH_AFTER_LOGIN } from '../config-global';
//
import {
  // Auth
  LoginPage,
  RegisterPage,
  VerifyCodePage,
  NewPasswordPage,
  ResetPasswordPage,
  // Dashboard: General
  GeneralAppPage,
  GeneralFilePage,
  GeneralBankingPage,
  GeneralBookingPage,
  GeneralEcommercePage,
  GeneralAnalyticsPage,
  // Dashboard: User
  UserListPage,
  UserEditPage,
  UserCardsPage,
  UserCreatePage,
  UserProfilePage,
  UserAccountPage,
  // Dashboard: Ecommerce

  // Dashboard: Invoice
  InvoiceListPage,
  InvoiceDetailsPage,
  InvoiceCreatePage,
  InvoiceEditPage,
  // Dashboard: Blog
  BlogPostsPage,
  BlogPostPage,
  BlogNewPostPage,
  // Dashboard: FileManager
  FileManagerPage,
  // Dashboard: App
  ChatPage,
  MailPage,
  CalendarPage,

  //
  BlankPage,
  PermissionDeniedPage,
  //
  Page500,
  Page403,
  Page404,
  HomePage,
  FaqsPage,
  AboutPage,
  Contact,
  PricingPage,
  PaymentPage,
  ComingSoonPage,
  MaintenancePage,
  //
  ComponentsOverviewPage,
  FoundationColorsPage,
  FoundationTypographyPage,
  FoundationShadowsPage,
  FoundationGridPage,
  FoundationIconsPage,
  //
  MUIAccordionPage,
  MUIAlertPage,
  MUIAutocompletePage,
  MUIAvatarPage,
  MUIBadgePage,
  MUIBreadcrumbsPage,
  MUIButtonsPage,
  MUICheckboxPage,
  MUIChipPage,
  MUIDataGridPage,
  MUIDialogPage,
  MUIListPage,
  MUIMenuPage,
  MUIPaginationPage,
  MUIPickersPage,
  MUIPopoverPage,
  MUIProgressPage,
  MUIRadioButtonsPage,
  MUIRatingPage,
  MUISliderPage,
  MUIStepperPage,
  MUISwitchPage,
  MUITablePage,
  MUITabsPage,
  MUITextFieldPage,
  MUITimelinePage,
  MUITooltipPage,
  MUITransferListPage,
  MUITreesViewPage,
  //
  DemoAnimatePage,
  DemoCarouselsPage,
  DemoChartsPage,
  DemoCopyToClipboardPage,
  DemoEditorPage,
  DemoFormValidationPage,
  DemoImagePage,
  DemoLabelPage,
  DemoLightboxPage,
  DemoMapPage,
  DemoMegaMenuPage,
  DemoMultiLanguagePage,
  DemoNavigationBarPage,
  DemoOrganizationalChartPage,
  DemoScrollbarPage,
  DemoSnackbarPage,
  DemoTextMaxLinePage,
  DemoUploadPage,
  DemoMarkdownPage,
  VaccinationListPage,
  CampainCreatePage,
  CampainEditPage,
  CampainDetailsPage,
  ActeDetailsPage,
  ErrorDetailsPage,
  EffetIndesirableListPage,
  EffetDetailsPage,
  Level1HomePage,
  Level1ListPersonnel,
  Level1CreatePersonnel,
  Level1CreateDRAS,
  Level2HomePage,
  Level2ListPersonnel,
  Level2CreatePersonnel,
  Level2CreateRegion,
  Level3HomePage,
  Level3ListPersonnel,
  Level3CreatePersonnel,
  Level3CreatePoint,
  Level4ListAgents,
  Level4CreateAgent,
  AppointmentListPage,
  AnalyticsPage,
  VaccineListPage,
  AgentPolitique,
  PointFocaux,
  ElectionDetailList,

  // Gestionnaire de l'effectif
} from './elements';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Auth
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          ),
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <RegisterPage />
            </GuestGuard>
          ),
        },
        { path: 'login-unprotected', element: <LoginPage /> },
        { path: 'register-unprotected', element: <RegisterPage /> },
        {
          element: <CompactLayout />,
          children: [
            { path: 'reset-password', element: <ResetPasswordPage /> },
            { path: 'new-password', element: <NewPasswordPage /> },
            { path: 'verify', element: <VerifyCodePage /> },
          ],
        },
      ],
    },

    // Dashboard
    {
      path: 'dashboard',
      element: (
        // <AuthGuard>
        <DashboardLayout />
        //       </AuthGuard>
      ),

      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },

        { path: 'statistique', element: <AnalyticsPage /> },
        { path: 'list', element: <VaccinationListPage /> },
        { path: 'camp/new', element: <CampainCreatePage /> },
        { path: 'camp/:title/edit', element: <CampainEditPage /> },
        { path: 'camp/:title', element: <CampainDetailsPage /> },
        { path: 'acts', element: <CampainDetailsPage /> },
        { path: 'acteDetails/:title', element: <ActeDetailsPage /> },
        { path: 'error', element: <ErrorDetailsPage /> },
        { path: 'listEffet', element: <EffetIndesirableListPage /> },
        { path: 'effetDetails', element: <EffetDetailsPage /> },
        { path: 'list-vaccine', element: <VaccineListPage /> },
        { path: 'ElectionDetailList/:id', element: <ElectionDetailList /> },

        {
          path: 'vaccinCamp',
          children: [
            { element: <Navigate to="/dashboard/vaccinCamp" replace />, index: true },
            { path: 'list', element: <VaccinationListPage /> },
            { path: 'camp/new', element: <CampainCreatePage /> },
            { path: 'camp/:title/edit', element: <CampainEditPage /> },
            { path: 'camp/:title', element: <CampainDetailsPage /> },
            { path: 'actesVaccination', element: <CampainDetailsPage /> },
            { path: 'acteDetails/:title', element: <ActeDetailsPage /> },
            { path: 'Errer', element: <ErrorDetailsPage /> },
            { path: 'listEffet', element: <EffetIndesirableListPage /> },
            { path: 'effetDetails', element: <EffetDetailsPage /> },
            { path: 'list-vaccine', element: <VaccineListPage /> },
          ],
        },
        {
          path: 'gestionnaireEffectif',
          children: [
            // level 1 :
            { path: 'centreHomePage', element: <Level1HomePage /> },
            { path: 'centreListPersonnel', element: <Level1ListPersonnel /> },
            { path: 'centreCreatePersonnel', element: <Level1CreatePersonnel /> },
            { path: 'centreCreateDRAS', element: <Level1CreateDRAS /> },
            // level 2 :
            { path: 'RegionHomePage', element: <Level2HomePage /> },
            { path: 'RegionListPersonnel', element: <Level2ListPersonnel /> },
            { path: 'RegionCreatePersonnel', element: <Level2CreatePersonnel /> },
            { path: 'RegionCreateRegion', element: <Level2CreateRegion /> },
            // level 3 :
            { path: 'PointHomePage', element: <Level3HomePage /> },
            { path: 'PointListPersonnel', element: <Level3ListPersonnel /> },
            { path: 'PointCreatePersonnel', element: <Level3CreatePersonnel /> },
            { path: 'PointCreatePoint', element: <Level3CreatePoint /> },
            // level 4 :
            { path: 'AgentsListe', element: <Level4ListAgents /> },
            { path: 'AgentsCreatePage', element: <Level4CreateAgent /> },
            { path: 'add_bureau', element: <VaccineListPage /> },
            { path: 'ActeurPolitique', element: <AgentPolitique /> },
            { path: 'electionDetail/:id', element: <ElectionDetailList /> },
            { path: 'PointFocal', element: <PointFocaux /> },
          ],
        },
        {
          path: 'appointment',
          children: [
            { element: <Navigate to="/dashboard/appointment" replace />, index: true },
            { path: 'calendar', element: <CalendarPage /> },
            { path: 'Appointment-List', element: <AppointmentListPage /> },
          ],
        },
        {
          path: 'hospitalisation',
          children: [
            { element: <Navigate to="/dashboard/hospitalisation/list" replace />, index: true },

            { path: ':id/edit', element: <InvoiceEditPage /> },
          ],
        },
        {
          path: 'vaccine',
          children: [
            { element: <Navigate to="/dashboard/vaccine/list" replace />, index: true },
            { path: 'list', element: <InvoiceListPage /> },
            { path: ':id', element: <InvoiceDetailsPage /> },
            { path: ':id/edit', element: <InvoiceEditPage /> },
          ],
        },
        {
          path: 'patient',
          children: [
            { element: <Navigate to="/dashboard/patient" replace />, index: true },

            { path: 'rendez-vous', element: <CalendarPage /> },
            { path: 'rendez-vous/calendar', element: <CalendarPage /> },
            { path: 'rendez-vous/Appointment-List', element: <AppointmentListPage /> },
          ],
        },
        {
          path: 'user',
          children: [
            { element: <Navigate to="/dashboard/user/profile" replace />, index: true },
            { path: 'profile', element: <UserProfilePage /> },
            { path: 'cards', element: <UserCardsPage /> },
            { path: 'list', element: <UserListPage /> },
            { path: 'new', element: <UserCreatePage /> },
            { path: ':name/edit', element: <UserEditPage /> },
            { path: 'account', element: <UserAccountPage /> },
          ],
        },
        {
          path: 'invoice',
          children: [
            { element: <Navigate to="/dashboard/invoice/list" replace />, index: true },
            { path: 'list', element: <InvoiceListPage /> },
            { path: ':id', element: <InvoiceDetailsPage /> },
            { path: ':id/edit', element: <InvoiceEditPage /> },
            { path: 'new', element: <InvoiceCreatePage /> },
          ],
        },
        {
          path: 'blog',
          children: [
            { element: <Navigate to="/dashboard/blog/posts" replace />, index: true },
            { path: 'posts', element: <BlogPostsPage /> },
            { path: 'post/:title', element: <BlogPostPage /> },
            { path: 'new', element: <BlogNewPostPage /> },
          ],
        },
        { path: 'files-manager', element: <FileManagerPage /> },
        {
          path: 'mail',
          children: [
            { element: <Navigate to="/dashboard/mail/all" replace />, index: true },
            { path: 'label/:customLabel', element: <MailPage /> },
            { path: 'label/:customLabel/:mailId', element: <MailPage /> },
            { path: ':systemLabel', element: <MailPage /> },
            { path: ':systemLabel/:mailId', element: <MailPage /> },
          ],
        },
        {
          path: 'chat',
          children: [
            { element: <ChatPage />, index: true },
            { path: 'new', element: <ChatPage /> },
            { path: ':conversationKey', element: <ChatPage /> },
          ],
        },
        { path: 'calendar', element: <CalendarPage /> },

        { path: 'permission-denied', element: <PermissionDeniedPage /> },
        { path: 'blank', element: <BlankPage /> },
      ],
    },

    // Main Routes
    {
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        { path: 'about-us', element: <AboutPage /> },
        { path: 'contact-us', element: <Contact /> },
        { path: 'faqs', element: <FaqsPage /> },
        // Demo Components
        {
          path: 'components',
          children: [
            { element: <ComponentsOverviewPage />, index: true },
            {
              path: 'foundation',
              children: [
                { element: <Navigate to="/components/foundation/colors" replace />, index: true },
                { path: 'colors', element: <FoundationColorsPage /> },
                { path: 'typography', element: <FoundationTypographyPage /> },
                { path: 'shadows', element: <FoundationShadowsPage /> },
                { path: 'grid', element: <FoundationGridPage /> },
                { path: 'icons', element: <FoundationIconsPage /> },
              ],
            },
            {
              path: 'mui',
              children: [
                { element: <Navigate to="/components/mui/accordion" replace />, index: true },
                { path: 'accordion', element: <MUIAccordionPage /> },
                { path: 'alert', element: <MUIAlertPage /> },
                { path: 'autocomplete', element: <MUIAutocompletePage /> },
                { path: 'avatar', element: <MUIAvatarPage /> },
                { path: 'badge', element: <MUIBadgePage /> },
                { path: 'breadcrumbs', element: <MUIBreadcrumbsPage /> },
                { path: 'buttons', element: <MUIButtonsPage /> },
                { path: 'checkbox', element: <MUICheckboxPage /> },
                { path: 'chip', element: <MUIChipPage /> },
                { path: 'data-grid', element: <MUIDataGridPage /> },
                { path: 'dialog', element: <MUIDialogPage /> },
                { path: 'list', element: <MUIListPage /> },
                { path: 'menu', element: <MUIMenuPage /> },
                { path: 'pagination', element: <MUIPaginationPage /> },
                { path: 'pickers', element: <MUIPickersPage /> },
                { path: 'popover', element: <MUIPopoverPage /> },
                { path: 'progress', element: <MUIProgressPage /> },
                { path: 'radio-button', element: <MUIRadioButtonsPage /> },
                { path: 'rating', element: <MUIRatingPage /> },
                { path: 'slider', element: <MUISliderPage /> },
                { path: 'stepper', element: <MUIStepperPage /> },
                { path: 'switch', element: <MUISwitchPage /> },
                { path: 'table', element: <MUITablePage /> },
                { path: 'tabs', element: <MUITabsPage /> },
                { path: 'textfield', element: <MUITextFieldPage /> },
                { path: 'timeline', element: <MUITimelinePage /> },
                { path: 'tooltip', element: <MUITooltipPage /> },
                { path: 'transfer-list', element: <MUITransferListPage /> },
                { path: 'tree-view', element: <MUITreesViewPage /> },
              ],
            },
            {
              path: 'extra',
              children: [
                { element: <Navigate to="/components/extra/animate" replace />, index: true },
                { path: 'animate', element: <DemoAnimatePage /> },
                { path: 'carousel', element: <DemoCarouselsPage /> },
                { path: 'chart', element: <DemoChartsPage /> },
                { path: 'copy-to-clipboard', element: <DemoCopyToClipboardPage /> },
                { path: 'editor', element: <DemoEditorPage /> },
                { path: 'form-validation', element: <DemoFormValidationPage /> },
                { path: 'image', element: <DemoImagePage /> },
                { path: 'label', element: <DemoLabelPage /> },
                { path: 'lightbox', element: <DemoLightboxPage /> },
                { path: 'map', element: <DemoMapPage /> },
                { path: 'mega-menu', element: <DemoMegaMenuPage /> },
                { path: 'multi-language', element: <DemoMultiLanguagePage /> },
                { path: 'navigation-bar', element: <DemoNavigationBarPage /> },
                { path: 'organization-chart', element: <DemoOrganizationalChartPage /> },
                { path: 'scroll', element: <DemoScrollbarPage /> },
                { path: 'snackbar', element: <DemoSnackbarPage /> },
                { path: 'text-max-line', element: <DemoTextMaxLinePage /> },
                { path: 'upload', element: <DemoUploadPage /> },
                { path: 'markdown', element: <DemoMarkdownPage /> },
              ],
            },
          ],
        },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { path: 'pricing', element: <PricingPage /> },
        { path: 'payment', element: <PaymentPage /> },
      ],
    },
    {
      element: <CompactLayout />,
      children: [
        { path: 'coming-soon', element: <ComingSoonPage /> },
        { path: 'maintenance', element: <MaintenancePage /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
        { path: '403', element: <Page403 /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
