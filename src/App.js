import logo from './logo.svg';
import './App.css';

import { datadogRum } from '@datadog/browser-rum';
    
datadogRum.init({
    applicationId: process.env.REACT_APP_APPLICATION_ID,
    clientToken: process.env.REACT_APP_CLIENT_TOKEN,
    site: 'datadoghq.com',
    service:'test',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sampleRate: 100,
    trackInteractions: true,
    defaultPrivacyLevel: 'mask-user-input'
});
    
datadogRum.startSessionReplayRecording();
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
