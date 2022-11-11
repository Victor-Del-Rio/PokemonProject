import React, { Component } from 'react'
import { PokemonRow, PokemonInfo } from './App';

export class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      pokemon: [],
      selectedItem: null,
    }
  }

  render() {
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
          <input
            value={this.state.filter}
            onChange={(e) => this.state.setFilter(e.target.value)}
          />
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {this.state.pokemon
                .filter((pokemon) => pokemon.name.english.toLowerCase().includes(this.state.filter.toLowerCase()))
                .slice(0, 50)
                .map(pokemon => (
                  <PokemonRow
                    pokemon={pokemon} key={pokemon.id}
                    onSelect={(pokemon) => this.state.setSelectedItem(pokemon)}
                  />
                ))}
            </tbody>
          </table>
        </div>
        {this.state.selectedItem && <PokemonInfo {...this.state.selectedItem} />}
      </div>
    </div>
    )
  }
}

export default ClassComp