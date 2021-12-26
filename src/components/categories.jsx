import { useSelector, useDispatch } from 'react-redux';
import pt from 'prop-types';
import { selectCategories } from '../state/modules/pizza';
import { changeCategory } from '../state/modules/filter';

const Categories = ({ activeItem, onSetActiveItem }) => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  const handleChangeCategory = (index, category) => {
    dispatch(changeCategory(index !== 0 ? category : null));
    onSetActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={category}
            className={activeItem === index ? 'active' : ''}
            onClick={() => handleChangeCategory(index, category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

Categories.propTypes = {
  activeItem: pt.number.isRequired,
  onSetActiveItem: pt.func.isRequired,
};

export default Categories;
