import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
    const { id, title, imageUrl } = category;
    return(
    <div className="directory-container" key={id}>
        <div className='background-image'
            style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="category-body-container">
            <h2>{title.toUpperCase()}</h2>
            <p>Shop Now</p>
        </div>
    </div>)
};
export default CategoryItem;