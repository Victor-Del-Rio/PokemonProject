import PokemonRow from "./PokemonRow2";


const PokemonTable = ({ pokemon, filter, setSelectedPokemon }) => (
    <table width="100%">
        <tbody>
            {pokemon
                .filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
                .slice(0, 50)
                .map(pokemon => (
                    <PokemonRow
                        pokemon={pokemon} key={pokemon.id}
                        onClick={(pokemon) => setSelectedPokemon(pokemon)}
                    />
                ))}
        </tbody>
    </table>
)

export default PokemonTable;