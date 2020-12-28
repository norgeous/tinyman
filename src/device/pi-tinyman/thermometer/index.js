const maxTemp = 90;
const minTemp = 20;

const maxTempY = 20;
const minTempY = 80;

const findPosition = (value) => {
  // y1=20 is 100C
  // y1=80 is 30C

  let displayValue = value;
  if (displayValue > maxTemp) displayValue = maxTemp;
  if (displayValue < minTemp) displayValue = minTemp;

  // displayValue is a number between min and max

  const completionOfBarMultiplier = (displayValue - minTemp) / (maxTemp - minTemp);
  const totalBarLength = minTempY - maxTempY; // 60
  const completedBarLength = totalBarLength * completionOfBarMultiplier;
  const positionOfEndOfLine = minTempY - completedBarLength;
  return Math.floor(positionOfEndOfLine);
};

const Thermometer = ({value}) => (
  <svg
    style={{ width: 50, height: 50 }} 
    viewBox="0 0 100 100"
  >
    <defs>
      <mask id="myMask" maskUnits="userSpaceOnUse">
        <rect x="0" y="0" width="100" height="100" fill="white" />
        <circle cx={50} cy={80} r={20} fill="black" />
      </mask>
    </defs>
    <circle cx={50} cy={80} r={20} fill="#0ff3" />
    <line x1="50" y1="15" x2="50" y2="80" stroke="#0ff3" strokeWidth="25" strokeLinecap="round" mask="url(#myMask)" />
    <circle cx={50} cy={80} r={10} fill="#0ff" />
    <line x1="50" y1={findPosition(value)} x2="50" y2={80} stroke="#0ff" strokeWidth="8" strokeLinecap="round" />
  </svg>
);

export default Thermometer;
