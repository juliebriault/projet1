import logo from './chaton.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>Carte d'identié </p>
      <img src={logo} className="App-logo" alt="logo" />
        <p>Nom : BRIAULT</p>
        <p>Prénom : Julie </p>
        <p>Age : 20 ans </p>
        
        <a
          className="App-link"
          href="https://fr.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Retrouvez-moi sur Linkedin ! 
        </a>
        <p></p>
        <p></p>
        Formulaire à remplir :
      </header>
    </div>
  );
}

export default App;
