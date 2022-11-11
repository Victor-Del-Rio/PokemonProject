
const PokemonFilter = ({ filter, setFilter }) => (
    <input
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
  />
)

export default PokemonFilter;