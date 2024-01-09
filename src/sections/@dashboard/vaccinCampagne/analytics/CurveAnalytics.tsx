import { ApexOptions } from 'apexcharts';
// @mui
import { Card, CardHeader, Box, CardProps, TextField, MenuItem } from '@mui/material';
// components
import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------
const FILTER_OPTIONS = [
  { id: 1, label: 'Virtuel'},
  { id: 2, label: "Presentiel"},
];

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  chart: {
    labels: string[];
    colors?: string[];
    elements: {
      name: string;
      type: string;
      fill?: string;
      data: number[];
    }[];
    options?: ApexOptions;
  };
}

export default function CurveAnalytics({ title, subheader, chart, ...other }: Props) {
  const { labels, colors, elements, options } = chart;

  const chartOptions = useChart({
    colors,
    plotOptions: {
      bar: {
        columnWidth: '16%',
      },
    },
    fill: {
      type: elements.map((i) => i.fill) as string[],
    },
    labels,
    xaxis: {
      type: 'datetime',
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value: number) => {
          if (typeof value !== 'undefined') {
            return `${value.toFixed(0)} Personnes`;
          }
          return value;
        },
      },
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader
        title={title}
        subheader={subheader}
        action={
          <TextField
              fullWidth
              select
              size='medium'
              label="Selectionner"
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
                height: 10
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
        }
      />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <Chart type="line" series={elements} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
