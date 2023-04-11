
import './search-box.styles.css';
import { ChangeEventHandler } from 'react';

type SearchBoxProps = {
    onSearchChangeHandler: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    class_name: string;
};

const SearchBox = ({ onSearchChangeHandler, placeholder, class_name }: SearchBoxProps)  => (
    <input
        className={`search-box ${class_name}`}
        type="search"
        placeholder={placeholder}
        onChange={onSearchChangeHandler}/>
);

export default SearchBox;



