import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className='WeatherApp'>
          <Weather />
        </div>
      </div>
      <footer>
      <h5 className='source-link container'>
        <a href='https://github.com/eporubin/my-app' target="_blank" rel="noopener noreferrer">Open-source code </a> by Elena Porubin 🌻
      </h5>
      </footer>
     
    </div>
  );
}

export default App;
