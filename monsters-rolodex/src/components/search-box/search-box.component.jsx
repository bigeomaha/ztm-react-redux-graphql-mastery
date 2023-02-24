
import './search-box.styles.css';

const SearchBox = ({ onSearchChangeHandler, placeholder, class_name }) => (
    <input
        className={`search-box ${class_name}`}
        type="search"
        placeholder={placeholder}
        onChange={onSearchChangeHandler} />
)

export default SearchBox;



