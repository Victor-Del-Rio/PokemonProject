import React, { useEffect, useState } from 'react'
import PokemonType from './PokemonType';

const PokemonRow = ({ pokemon, onClick}) => (
    <tr key={pokemon.id}>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>{/*dont need join here */}
    <td><button onClick={() => onClick(pokemon)}>Select!</button></td>
  </tr>
)

PokemonRow.propTypes = PokemonRow;


export default PokemonRow;