import PiTinyMan from './pi-tinyman';
import Chromecast from './chromecast';
import Sonoff from './sonoff';

const Device = ({type, ip}) => {
  const types = {
    default: <>unknown type {type} for {ip}</>,
    'pi/tinyman': <PiTinyMan ip={ip} />,
    'chromecast': <Chromecast ip={ip} />,
    'sonoff': <Sonoff ip={ip} />,
  };

  return types[type] || type['default'];
};

export default Device;
