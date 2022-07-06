import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App container">
      <div className='WeatherApp content-section'>
        <Weather />
      </div>
      <p>
        <a href='https://github.com/eporubin/my-app' target="_blank" rel="noopener noreferrer">Open-source code </a> by Elena Porubin
      </p>
    </div>
  );
}

export default App;
