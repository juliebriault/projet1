import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>Carte d'identié </p>
        <p>Nom : BRIAULT</p>
        <p>Prénom : Julie </p>
        <p>Age : 20 ans </p>
         
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://fr.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Retrouvez-moi sur Linkedin ! 
        </a>
      </header>
    </div>
  );
}

export default App;
