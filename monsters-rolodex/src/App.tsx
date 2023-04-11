import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import getData from './utils/data.utils';
import { ChangeEvent } from 'react';
import { TMonster } from './utils/app.types';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      monster_search_string: '',
    };
  }
  componentDidMount(){
    const fetchUsers = async () => {
      const users = await getData<Array<TMonster>>('https://jsonplaceholder.typicode.com/users');
      this.setState({ monsters: users });
    };
    fetchUsers();
  }

  onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onSearchChangeHandler={onSearchChange} placeholder='Search Monsters' class_name='monsters-search'/>
        <CardList monsters={filtered_monsters}  />
      </div>
    );
  };
}

export default App;
