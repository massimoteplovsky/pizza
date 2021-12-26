import { useState, useEffect, useRef, useCallback } from 'react';
import pt from 'prop-types';
import cn from 'classnames';
import { ReactComponent as ArrowTop } from '../images/arrow-top.svg';

// Components
import SortPopup from './sort-popup';

const sortItems = [
  {
    name: 'популярности',
    type: 'rating',
  },
  {
    name: 'цене',
    type: 'price',
  },
  {
    name: 'алфавиту',
    type: 'name',
  },
];

const SortBlock = ({ activeItem, onSetActiveItem }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const sortRef = useRef(null);

  const handleOutsideClick = useCallback((event) => {
    const path = event.path || (event.composedPath && event.composedPath());

    if (!path.includes(sortRef.current)) {
      setIsPopupOpen(false);
    }
  }, []);

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <div className="sort" ref={sortRef}>
      <div className={cn('sort__label', { 'sort__label--open': isPopupOpen })}>
        <ArrowTop />
        <b>Сортировка по:</b>
        <span onClick={() => setIsPopupOpen(true)}>
          {sortItems[activeItem].name}
        </span>
      </div>
      {isPopupOpen && (
        <SortPopup
          sortItems={sortItems}
          activeItem={activeItem}
          onSetActiveItem={onSetActiveItem}
          onSetIsPopupOpen={setIsPopupOpen}
        />
      )}
    </div>
  );
};

SortBlock.propTypes = {
  activeItem: pt.number.isRequired,
  onSetActiveItem: pt.func.isRequired,
};

export default SortBlock;
