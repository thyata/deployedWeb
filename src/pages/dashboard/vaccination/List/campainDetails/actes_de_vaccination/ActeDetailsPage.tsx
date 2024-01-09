import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useLocation} from 'react-router-dom';
// @mui
import { Container, Tab, Tabs, Box } from '@mui/material';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';

// components
import Iconify from 'src/components/iconify';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useSettingsContext } from 'src/components/settings';


// utils
import {frDate} from 'src/utils/formatTime';
import ActeGeneral from './ActeGeneral';


// ----------------------------------------------------------------------

export default function ActeDetailsPage() {
  const { themeStretch } = useSettingsContext();

  const [currentTab, setCurrentTab] = useState('general');
  const {state} = useLocation();


  const {row} =state;
  


  const TABS = [
    {
      value: 'general',
      label: 'General',
      icon: <Iconify icon="eva:info-outline" />,
      component: <ActeGeneral actes={row}/>,
    },
  ];

  return (
    <>
      <Helmet>
        <title> Acte detail | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading={`Date : ${frDate(new Date())}`}
          links={[
            { name: 'Tableau de bord' },
            { name: 'Campagnes', href: PATH_DASHBOARD.vaccinCamp.list },
            { name: 'Campagne detail',href:PATH_DASHBOARD.vaccinCamp.view("detail") },
            { name: 'Acte detail' },
          ]}
        />
        <Tabs value={currentTab} onChange={(event, newValue) => setCurrentTab(newValue)}>
          {TABS.map((tab) => (
            <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
          ))}
        </Tabs>

        {TABS.map(
          (tab) =>
            tab.value === currentTab && (
              <Box key={tab.value} sx={{ mt: 5 }}>
                {tab.component}
              </Box>
            )
        )}
      </Container>
    </>
  );
}
