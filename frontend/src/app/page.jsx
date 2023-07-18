import Navbar from '@/components/organism/Navbar'
import CartList from '@/components/templates/CartList';
import ProductList from '@/components/templates/ProductList';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <ProductList />
          <CartList />
        </section>
      </main>
    </>
  );
}

export default Home;