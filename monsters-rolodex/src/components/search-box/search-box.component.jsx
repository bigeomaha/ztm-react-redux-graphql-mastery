import {Component} from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
    render() {
        const { onSearchChangeHandler, placeholder,class_name } = this.props;
        return (
            <input
                className={`search-box ${class_name}`}
                type="search"
                placeholder={placeholder}
                onChange={onSearchChangeHandler} />
        )
    }
}

export default SearchBox;



