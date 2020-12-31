// import logo from './logo.svg';
import './App.css';
import Device from './device';

const endpoints = [
  {type: 'chromecast', ip: '192.168.0.243'}, // chromecast: chalk
  {type: 'pi/tinyman', ip: '192.168.0.100'}, // lakitu
  {type: 'pi/tinyman', ip: '192.168.0.40'},  // tvpi
  {type: 'pi/tinyman', ip: '192.168.0.13'},  // retropie
  {type: 'pi/tinyman', ip: '192.168.0.150'}, // unicorn
  {type: 'pi/tinyman', ip: '192.168.0.200'}, // durga
  {type: 'pi/tinyman', ip: '192.168.0.190'}, // rpi 3A+
];

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>tinyman</h1>
      </header>
      <main className="App-main">
        {endpoints.map(({type, ip}) => <Device key={`${type}@${ip}`} type={type} ip={ip}/>)}
      </main>
    </div>
  );
}

export default App;
