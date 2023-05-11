import Searcher from './components/Searcher';
import PokemonsList from './components/PokemonsList'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='searcher-container'>
         <p>Sue pokedux</p>
        <Searcher />
      </div>
      <div className='main-container'>
        <PokemonsList/>
      </div>
    </div>
  );
}

export default App;
