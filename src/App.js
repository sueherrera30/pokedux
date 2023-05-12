import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { setPokemons as setPokemonsActions } from './actions';
import { getData } from './api';
import Searcher from './components/Searcher';
import PokemonsList from './components/PokemonsList'
import './App.css';

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
})
const mapDispatchToProps = (dispatch) => ({
   setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

function App() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
     const fetchData = async () => {
        const pokeRes = await getData();
        setPokemons(pokeRes);
     }
     fetchData();
  },[])
  return (
    <div className="App">
      <div className='searcher-container'>
         <p>Sue pokedux</p>
        <Searcher />
      </div>
      <div className='main-container'>
        {
          pokemons ? <PokemonsList pokemons={pokemons} /> : null
        }
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);