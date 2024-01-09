import { Paper, PaperProps, Typography } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends PaperProps {
  query?: string;
}

export default function SearchNotFound({ query, sx, ...other }: Props) {
  return query ? (
    <Paper
      sx={{
        textAlign: 'center',
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h6" paragraph>
        Pas trouvé
      </Typography>

      <Typography variant="body2">
        Aucun résultat trouvé pour &nbsp;
        <strong>&quot;{query}&quot;</strong>.
        <br /> Essayez de vérifier les fautes de frappe ou utiliser un nom complets.
      </Typography>
    </Paper>
  ) : (
    <Typography variant="body2" sx={sx}>
      Veuillez saisir un nom
    </Typography>
  );
}
