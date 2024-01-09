// @mui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  Table,
  Button,
  Divider,
  TableRow,
  TableBody,
  TableCell,
  CardProps,
  CardHeader,
  Typography,
  TableContainer,
} from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { TableHeadCustom } from 'src/components/table';
import CampainSearch from 'src/pages/dashboard/vaccination/List/filter/CampainSearch';
import { frDate } from 'src/utils/formatTime';

// ----------------------------------------------------------------------

type RowProps = {
  id: string;
  name: string | null;
  avatar: string | null;
  type: string;
  message: string;
  category: string;
  date: number;
  status: string;
  amount: number;
};

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  tableData: RowProps[];
  tableLabels: any;
}

export default function HistoriqueListPage({
  title,
  subheader,
  tableLabels,
  tableData,
  ...other
}: Props) {
  return (
    <Card {...other}>
      <CardHeader 
        title={title}
        subheader={subheader} 
        sx={{ mb: 3 }} 
        action={
          <CampainSearch />
        }
      />
      <TableContainer sx={{ overflow: 'unset' }}>
        <Scrollbar sx={{ minWidth: 720 }}>
          <Table>
            <TableHeadCustom headLabel={tableLabels} />
            <TableBody>
              {tableData.map((row) => (
                <BankingRecentTransitionsRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
        >
          Voir tout
        </Button>
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------

type BankingRecentTransitionsRowProps = {
  row: RowProps;
};

function BankingRecentTransitionsRow({ row }: BankingRecentTransitionsRowProps) {
  const theme = useTheme();

  return (
    <>
      <TableRow>
        <TableCell>
              <Typography variant="subtitle2">Mohamed</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="subtitle2">2229393456</Typography>
        </TableCell>

        <TableCell>Type A</TableCell>

        <TableCell>
        {frDate(new Date)}
        </TableCell>

       
      </TableRow>
    </>
  );
}


// ----------------------------------------------------------------------
