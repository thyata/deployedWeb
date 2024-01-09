import { Helmet } from 'react-helmet-async';
import { useState, useCallback } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Stack, TextField, MenuItem } from '@mui/material';
// _mock_
import { _analyticPost, _analyticOrderTimeline, _analyticTraffic } from 'src/_mock/arrays';
// components
import { useSettingsContext } from 'src/components/settings';
// sections
import {
  CircleAnalysis,
  CurveAnalytics,
  AnalyticsWidget,
  AnalyticsCurrentSubject,
  AnalyticsRates,
} from 'src/sections/@dashboard/vaccinCampagne/analytics';
import { Moughataa, states } from 'src/assets/data/WilayaAndMoughataa';

const FILTER_OPTIONS = [
  { id: 1, label: 'Virtuel' },
  { id: 2, label: 'Presentiel' },
];
// ----------------------------------------------------------------------

export default function AnalyticsPage() {
  const theme = useTheme();

  const { themeStretch } = useSettingsContext();
  const [selctedState, setSelctedState] = useState('');

  const handleSelectWilaya = useCallback(
    (option: string) => {
      const state_id = states.find((state) => state.name === option)?.id ?? 'null';
      setSelctedState(state_id);
    },
    [setSelctedState]
  );

  return (
    <>
      <Helmet>
        <title> Vaccination: Statistique | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Statistiques
        </Typography>
        <Stack mb={8} direction="row" alignItems="center" justifyContent="space-between">
          <TextField
            fullWidth
            select
            size="medium"
            label="Campagne"
            // value={filterWillaya}
            //  onChange={onFilterWillaya}
            SelectProps={{
              MenuProps: {
                PaperProps: {
                  sx: { maxHeight: 500 },
                },
              },
            }}
            sx={{
              width: 200,
              height: 10,
            }}
          >
            {FILTER_OPTIONS.map((option) => (
              <MenuItem
                key={option.id}
                value={option.label}
                // onClick={() => handleSelectWilaya(option.name)}
                sx={{
                  mx: 1,
                  borderRadius: 0.75,
                  typography: 'body2',
                  textTransform: 'capitalize',
                }}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            select
            size="medium"
            label="Wilaya"
            SelectProps={{
              MenuProps: {
                PaperProps: {
                  sx: { maxHeight: 500 },
                },
              },
            }}
            sx={{
              width: 200,
              height: 10,
            }}
          >
            {states.map((option) => (
              <MenuItem
                key={option.id}
                value={option.name}
                onClick={() => handleSelectWilaya(option.name)}
                sx={{
                  mx: 1,
                  borderRadius: 0.75,
                  typography: 'body2',
                  textTransform: 'capitalize',
                }}
              >
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            select
            size="medium"
            label="Moughataa"
            // value={filterWillaya}
            //  onChange={onFilterWillaya}
            SelectProps={{
              MenuProps: {
                PaperProps: {
                  sx: { maxHeight: 500 },
                },
              },
            }}
            sx={{
              width: 200,
              height: 10,
            }}
          >
            {Moughataa.filter((option) => option.state_id === selctedState).map((option) => (
              <MenuItem
                key={option.id}
                value={option.name}
                // onClick={() => handleSelectWilaya(option.name)}
                sx={{
                  mx: 1,
                  borderRadius: 0.75,
                  typography: 'body2',
                  textTransform: 'capitalize',
                }}
              >
                {option.name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            select
            size="medium"
            label="Point focal"
            // value={filterWillaya}
            //  onChange={onFilterWillaya}
            SelectProps={{
              MenuProps: {
                PaperProps: {
                  sx: { maxHeight: 500 },
                },
              },
            }}
            sx={{
              width: 200,
              height: 10,
            }}
          >
            {FILTER_OPTIONS.map((option) => (
              <MenuItem
                key={option.id}
                value={option.label}
                // onClick={() => handleSelectWilaya(option.name)}
                sx={{
                  mx: 1,
                  borderRadius: 0.75,
                  typography: 'body2',
                  textTransform: 'capitalize',
                }}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            select
            size="medium"
            label="Bureau"
            // value={filterWillaya}
            //  onChange={onFilterWillaya}
            SelectProps={{
              MenuProps: {
                PaperProps: {
                  sx: { maxHeight: 500 },
                },
              },
            }}
            sx={{
              width: 200,
              height: 10,
            }}
          >
            {FILTER_OPTIONS.map((option) => (
              <MenuItem
                key={option.id}
                value={option.label}
                // onClick={() => handleSelectWilaya(option.name)}
                sx={{
                  mx: 1,
                  borderRadius: 0.75,
                  typography: 'body2',
                  textTransform: 'capitalize',
                }}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidget title="Total adhésion" total="152K" icon="ant-design:team-outlined" />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidget
              title="Nombres bureaux"
              total="75%"
              color="info"
              icon="ant-design:arrow-up-outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidget
              title="Nombres hommes"
              total="342"
              color="warning"
              icon="ant-design:check-circle-outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidget
              title="Nombres femmes"
              total="42"
              color="error"
              icon="ant-design:close-circle-outlined"
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <CurveAnalytics
              title="Taux d'adhésion par le temps"
              chart={{
                labels: [
                  '01/01/2003',
                  '02/01/2003',
                  '03/01/2003',
                  '04/01/2003',
                  '05/01/2003',
                  '06/01/2003',
                  '07/01/2003',
                  '08/01/2003',
                  '09/01/2003',
                  '10/01/2003',
                  '11/01/2003',
                ],
                elements: [
                  {
                    name: 'Sans pathologie',
                    type: 'column',
                    fill: 'solid',
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                  },
                  {
                    name: 'Avec pathologie',
                    type: 'area',
                    fill: 'gradient',
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                  },
                ],
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <CircleAnalysis
              title="Sexe"
              chart={{
                elements: [
                  { label: 'Hommes', value: 75 },
                  { label: 'Famme', value: 25 },
                ],
                colors: [theme.palette.info.main, theme.palette.error.main],
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsRates
              title="Meilleurs points focaux"
              chart={{
                elmentes: [
                  { label: 'Enseignant', value: 400 },
                  { label: 'Berget', value: 430 },
                  { label: 'Chomeur', value: 448 },
                  { label: 'Eleve', value: 470 },
                  { label: 'Etudiant', value: 540 },
                  { label: 'Chauffeur', value: 580 },
                  { label: 'Vendeur', value: 690 },
                ],
              }}
            />
          </Grid>
          {/* <Grid item xs={12} md={6} lg={4}>
            <AnalyticsCurrentSubject
              title="Age"
              chart={{
                categories: ['65', '50', '45', '35', '25', '15'],
                elements: [
                  { name: 'premier age', data: [80, 50, 30, 40, 100, 20] },
                  { name: 'deuxième age', data: [20, 30, 40, 80, 20, 80] },
                  { name: 'Troisième age', data: [44, 76, 78, 13, 43, 10] },
                ],
              }}
            />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
