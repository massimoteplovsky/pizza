import { useDispatch } from 'react-redux';
import React from 'react';
import pt from 'prop-types';
import { changeSortBy } from '../state/modules/filter';

const SortPopup = ({
  sortItems,
  activeItem,
  onSetActiveItem,
  onSetIsPopupOpen,
}) => {
  const dispatch = useDispatch();
  const handleSetActiveItem = (index, type) => {
    dispatch(changeSortBy(type));
    onSetActiveItem(index);
    onSetIsPopupOpen(false);
  };

  return (
    <div className="sort__popup">
      <ul>
        {sortItems.map(({ name, type }, index) => (
          <li
            key={type}
            className={index === activeItem ? 'active' : ''}
            onClick={() => handleSetActiveItem(index, type)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

SortPopup.propTypes = {
  activeItem: pt.number.isRequired,
  sortItems: pt.arrayOf(pt.object.isRequired).isRequired,
  onSetActiveItem: pt.func.isRequired,
  onSetIsPopupOpen: pt.func.isRequired,
};

export default SortPopup;
