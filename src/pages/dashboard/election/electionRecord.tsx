import { Dispatch, SetStateAction, useState } from 'react';
import { Grid, Button, Box } from '@mui/material';
import Iconify from 'src/components/iconify';
import { SkeletonPostItem } from 'src/components/skeleton';
import { CampagneVaccinationMadelAPI } from 'src/@types/Campain';
import DRASCard from '../gestionnaire_effectif/level_1/admin_centrale/List/DRASCard';

interface ElectionProp {
  electionData: any[];
  isLoading: boolean;
  handleSizePlus: () => void;
  cover: string;
  dataSupervisors: any;
  link: string;
}

export default function ElectionRecord({
  electionData,
  isLoading,
  handleSizePlus,
  cover,
  dataSupervisors,
  link,
}: ElectionProp) {
  return (
    <>
      <Grid container spacing={3}>
        {(!electionData.length ? [...Array(12)] : electionData).map((campain, index) =>
          campain ? (
            <Grid key={campain.id} item xs={12} sm={6} md={4}>
              <DRASCard
                campain={campain}
                index={index}
                sectionLevel="election"
                cover={cover}
                supervisorInZone={dataSupervisors}
                link={link}
              />
            </Grid>
          ) : (
            <SkeletonPostItem key={index} />
          )
        )}
        {isLoading && <SkeletonPostItem key={5} />}
      </Grid>
      <Box display="flex" justifyContent="center" mt={4}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={handleSizePlus}
        >
          Voir plus
        </Button>
      </Box>
    </>
  );
}
