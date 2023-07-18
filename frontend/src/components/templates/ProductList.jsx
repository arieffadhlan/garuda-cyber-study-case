import ProductCard from "../organism/cards/ProductCard";
import Container from "./Container";

const ProductList = () => {
  return (
    <Container className="mt-32">
      <div className="grid grid-cols-1 gap-4 2xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Container>
  );
}

export default ProductList;