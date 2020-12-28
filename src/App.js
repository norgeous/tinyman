// import logo from './logo.svg';
import './App.css';
import Card from './card';

const endpoints = [
  // '//192.168.0.100',
  '//192.168.0.40',
  // '//192.168.0.13',
  // '//192.168.0.150',
  // '//192.168.0.200',
  // '//192.168.0.190',
];

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>tinyman</h1>
      </header>
      <main className="App-main">
        {endpoints.map((endpoint) => <Card key={endpoint} endpoint={endpoint}/>)}
      </main>
    </div>
  );
}

export default App;
