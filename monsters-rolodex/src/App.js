import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      monster_search_string: '',
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onSearchChange = (event) => {
    const monster_search_string = event.target.value.toLowerCase();
    this.setState(
      () => {
        return { monster_search_string }
      });
  }

  render() {
    const { monsters, monster_search_string } = this.state;
    const { onSearchChange } = this;
    const filtered_monsters = monsters.filter(monster => monster.name.toLowerCase().includes(monster_search_string));

    return (
      <div className="App">
        <input className='search-box' type="search" placeholder="search monsters" onChange={onSearchChange} />
        {filtered_monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)}
      </div>
    );
  };
}

export default App;
