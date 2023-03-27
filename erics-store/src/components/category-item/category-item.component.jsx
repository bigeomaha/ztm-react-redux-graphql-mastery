import './category-item.styles.scss';
import { Link } from 'react-router-dom';

const CategoryItem = ({ category }) => {
    const { id, title, imageUrl } = category;
    return(
        <div className="directory-container" key={id}>
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
                <div className="category-body-container">
                <Link to={`/shop/${title}`} className='content'>
                    <h2>{title.toUpperCase()}</h2>
                    <p>Shop Now</p>
                </Link>
                </div>
        </div>
    )
};
export default CategoryItem;