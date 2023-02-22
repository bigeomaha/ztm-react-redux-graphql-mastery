import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      your_name: 'Eric'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.your_name}!
          </p>
          <button onClick={() => {
            this.setState(
              () => {
                return {your_name: 'Bobby'}
              },
              () => {
                console.log(this.state.your_name)
              }
             )
          }}>Change Name</button>
        </header>
      </div>
    );
  };
}

export default App;
