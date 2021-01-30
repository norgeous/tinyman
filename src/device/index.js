import { AiFillQuestionCircle } from 'react-icons/ai';
import { GiWifiRouter, GiVacuumCleaner } from 'react-icons/gi';
import { MdPhoneAndroid } from 'react-icons/md';
import { FaRaspberryPi, FaWind } from 'react-icons/fa';
import { RiHomeSmileFill } from 'react-icons/ri';
import { SiWindows } from 'react-icons/si';
import { IoLogoChrome } from 'react-icons/io';

import Unknown from './unknown';
import Router from './router';
import Phone from './phone';
import PiTinyMan from './pi-tinyman';
import Chromecast from './chromecast';
import Sonoff from './sonoff';

import Card from '../card/Card2';

const Back = ({info}) => (
  <pre
    style={{
      textAlign: 'left',
      overflow: 'scroll',
      height: 270,
      margin: 0,
    }}
  >
    {JSON.stringify(info, null, '  ')}
  </pre>
);

const Device = ({device, device: {hostname, ip, type}}) => {
  const types = {
    'unknown': (
      <Card title={hostname} icon={AiFillQuestionCircle}>
        <Unknown device={device} />
        <Back info={device} />
      </Card>
    ),
    'router': (
      <Card title={hostname} icon={GiWifiRouter}>
        <Router device={device} />
        <Back info={device} />
      </Card>
    ),
    'phone': (
      <Card title={hostname} icon={MdPhoneAndroid}>
        <Phone device={device} />
        <Back info={device} />
      </Card>
    ),
    'airpurifier': (
      <Card title={hostname} icon={FaWind}>
        <Unknown device={device} />
        <Back info={device} />
      </Card>
    ),
    'robovac': (
      <Card title={'robovac'} icon={GiVacuumCleaner}>
        <Unknown device={device} />
        <Back info={device} />
      </Card>
    ),
    'windows': (
      <Card title={hostname} icon={SiWindows}>
        <Unknown device={device} />
        <Back info={device} />
      </Card>
    ),
    'sonoff': (
      <Card title={hostname} icon={RiHomeSmileFill}>
        <Unknown device={device} />
        <Back info={device} />
        {/* <Sonoff device={device} /> */}
      </Card>
    ),
    'pi': (
      <Card title={hostname} icon={FaRaspberryPi}>
        <PiTinyMan device={device} />
        <Back info={device} />
      </Card>
    ),
    'chromecast': (
      <Card title={hostname} icon={IoLogoChrome}>
        <Chromecast device={device} />
        <Back info={device} />
      </Card>
    ),
  };

  return types[type] || types['unknown'];
};

export default Device;
