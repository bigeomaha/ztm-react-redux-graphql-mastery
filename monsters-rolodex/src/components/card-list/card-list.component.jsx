import { Component } from "react";
import './card-list.styles.css';

class CardList extends Component {
    render() {
      const { monsters } = this.props;
    return (
        <div className='card-list'>
            {monsters.map(monster => {
                const { id, name, email } = monster;
                return (
                        <div className = 'card-container'>
                            <img alt='monster' src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                            <h2 key={id}>{name}</h2>
                            <p>{email}</p>
                        </div>
                    );
                }
            )}
        </div>
    );
  }
}

export default CardList;