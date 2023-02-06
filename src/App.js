import logo from './logo.svg';
import './App.css';
import RenderSelectBox from './components/RenderSelectBox';

function App() {
  const langs = ["en-US","en-GB","pt-BR"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Select Language For find Currant Date and time
        </p>


        <RenderSelectBox langs={langs}/>
        
      </header>
    </div>
  );
}

export default App;
