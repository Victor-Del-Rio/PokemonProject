import React, { useEffect, useState } from 'react'

export default function PokemonRow() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json')
            .then(res => res.json())
            .then(res => setPokemon(Object.values(res)));
        console.log(pokemon);
    }, []);

    return (
        <div>
            {pokemon.slice(0, 50).map(pokemon => (
                <tr 
                    key={pokemon.id}
                >
                    <td>{pokemon.name.english}</td>
                    <td>{pokemon.type.join(", ")}</td>{/*dont need join here */}
                </tr>
            ))}
        </div>
    )
}
