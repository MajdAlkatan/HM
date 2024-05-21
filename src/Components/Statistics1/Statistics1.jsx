import { LineChart } from '@mui/x-charts/LineChart';
import './Statistics1.css'
 function GridDemo() {
  return (
   <div className='container1'>
     <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      height={300}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
    />
   </div>
  );
}
export default GridDemo;