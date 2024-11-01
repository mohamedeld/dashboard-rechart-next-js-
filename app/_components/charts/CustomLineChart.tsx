"use client";
import { LineChart } from '@mui/x-charts/LineChart';

const seriesData = [
  {
    id: 'series-1',
    data: [9, 5.5, 3, 6.5, 1.5, 2],
    label:'Development'
  },
  {
    id: 'series-2',
    data: [4, 1.5, 6, 3.5, 4.5, 8],
    label:'Investment'
  },
  {
    id: 'series-3',
    data: [1, 9.5, 1, 8.5, 1.5, 4],
    label:'High and Log'
  }
]
const CustomLineChart = () => {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={seriesData}
      width={500}
      height={300}
    />
  )
}

export default CustomLineChart