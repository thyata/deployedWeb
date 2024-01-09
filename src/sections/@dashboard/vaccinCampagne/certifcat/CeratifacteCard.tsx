// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Stack, Typography, Button, BoxProps, InputBase } from '@mui/material';
// components
import Image from 'src/components/image';
// utils
import { bgGradient } from 'src/utils/cssStyles';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  img?: string;
  title?: string;
  price?: string;
  description?: string;
  onSearch?: () => void;
}

export default function CeratifacteCard({
  img,
  price,
  title,
  description,
  sx,
  onSearch,
  ...other
}: Props) {
  const theme = useTheme();

  return (
    <Box {...other}>
      <Image
        disabledEffect
        alt="illustration-invite"
        src={img}
        sx={{
          left: 40,
          zIndex: 9,
          width: 140,
          position: 'relative',
          filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.24))',
          ...sx,
        }}
      />

      <Box
        sx={{
          mt: -15,
          color: 'common.white',
          borderRadius: 2,
          p: theme.spacing(16, 5, 5, 5),
          ...bgGradient({
            direction: '135deg',
            startColor: theme.palette.primary.main,
            endColor: theme.palette.primary.dark,
          }),
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
            {title}
          </Typography>

          <Typography variant="h2"> {price} </Typography>
        </Stack>

        <Typography variant="body2" sx={{ mt: 2, mb: 3 }}>
          {description}
        </Typography>

       {onSearch && <Stack direction="row" spacing={1}>
          <InputBase
            fullWidth
            placeholder="NNI"
            type='number'
            sx={{
              px: 1.5,
              height: 40,
              borderRadius: 1,
              color: 'common.white',
              bgcolor: alpha(theme.palette.common.black, 0.16),
              '&::placeholder': {
                color: alpha(theme.palette.common.white, 0.48),
              },
            }}
          />

          <Button color="warning" variant="contained" onClick={onSearch}>
            Rechercher
          </Button>
        </Stack>}
      </Box>
    </Box>
  );
}
