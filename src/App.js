import React, { useEffect, useState } from 'react';
import './App.css';
import PokemonType from './components/PokemonType';
import PokemonRow from './components/PokemonRow2';
import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';
import PokemonContext from './PokemonContext';

function App() {
  const [filter, setFilter] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json')
      .then(res => res.json())
      .then(res => setPokemon(res));
    console.log(pokemon);
  }, []);

  return (
    <div style={{ margin: "auto", width: 800, paddingTop: '1rem', }}>
      <h1 className='title'>Pokemon Search</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '70% 30%',
          gridColumnGap: '1rem',
        }}
      >
        <div>
          <PokemonFilter
            filter={filter}
            setFilter={setFilter}
          />
          <PokemonTable
            filter={filter}
            setSelectedPokemon={setSelectedPokemon}
            pokemon={pokemon}
          />
        </div>
        {selectedPokemon && <PokemonInfo {...selectedPokemon} />}
      </div>
    </div>
  );
}

export default App;
