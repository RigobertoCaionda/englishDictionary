import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Routes from './Routes';
import ReactTooltip from 'react-tooltip';
function App() {
  return (
    <BrowserRouter>
       <Header />
       <Routes />

       <ReactTooltip id="tip-right" place="right" effect="solid" />
    </BrowserRouter>
  );
}

export default App;
