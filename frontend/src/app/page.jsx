import Navbar from '@/components/organism/Navbar'
import ProductList from '@/components/templates/ProductList';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <ProductList />
        </section>
      </main>
    </>
  );
}

export default Home;