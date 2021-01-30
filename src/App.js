import useEndpoint from './hooks/useEndpoint';
import './App.css';
import Device from './device';

const App = () => {
  const { status, data } = useEndpoint(`http://192.168.0.40:8080/nmap`)

  return (
    <div className="App">
      <header className="App-header">
        <h1>tinyman</h1>
      </header>
      
      server is {data?.status}, next check: {status}

      <main className="App-main">
        {data?.result?.map(device => (
          <Device
            key={`${device.type}@${device.ip}`}
            device={device}
            type={device.type}
            ip={device.ip}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
