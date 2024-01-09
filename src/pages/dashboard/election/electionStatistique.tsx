import { Stack, Typography } from '@mui/material';

type DataStats = {
  totalVotants: number;
  numberVotants: number;
  numberAdhere: number;
};

interface ElectionStatistiqueProps {
  dataStatistique: DataStats;
}

export default function ElectionStatistique({ dataStatistique }: ElectionStatistiqueProps) {
  const { totalVotants, numberVotants, numberAdhere } = dataStatistique;

  return (
    <Stack>
      <Typography>
        Total des votes : <b> {totalVotants}</b>
      </Typography>
      <Typography>
        <b>{numberAdhere}%</b> des personnes adhérees
      </Typography>
      <Typography>
        <b>{numberVotants}%</b> des votants
      </Typography>
    </Stack>
  );
}
