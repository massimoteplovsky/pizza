import { useSelector } from 'react-redux';
import { selectFilteredPizzas } from '../state/modules/pizza';

// Components
import Categories from '../components/categories';
import SortBlock from '../components/sort-block';
import PizzaBlock from '../components/pizza-block';

// HOC
import withActiveItem from '../hocs/with-active-item';

const WithActiveItemCategories = withActiveItem(Categories);
const WithActiveItemSortBlock = withActiveItem(SortBlock);

const Home = () => {
  const pizzas = useSelector(selectFilteredPizzas);

  return (
    <div className="container">
      <div className="content__top">
        <WithActiveItemCategories />
        <WithActiveItemSortBlock />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((pizza) => (
          <PizzaBlock key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default Home;
