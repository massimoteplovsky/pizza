import { Routes, Route } from 'react-router-dom';
import { RouterPath } from './utils/constants';

// Components
import Layout from './components/layout';

// Pages
import Home from './pages/home';
import Cart from './pages/cart';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={RouterPath.HOME} element={<Home />} />
        <Route path={RouterPath.CART} element={<Cart />} />
      </Routes>
    </Layout>
  );
};

export default App;
