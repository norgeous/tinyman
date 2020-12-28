import { PieChart } from 'react-minimal-pie-chart';

const Doughnut = ({label, value, total}) => (
  <PieChart
    style={{ width: 50, height: 50 }} 
    startAngle={270}
    label={() => `${Math.round((value/total)*100)}%`}
    labelPosition={0}
    labelStyle={{
      fontSize: 20,
      fontFamily: 'sans-serif',
      fill: '#0ff',
    }}
    lineWidth={20}
    totalValue={total}
    data={[
      { value, color: '#0FF' },
      { value: total-value, color: '#0FF3' },
    ]}
  />
);

export default Doughnut;
