import { Row } from "react-bootstrap";
import { toast } from "react-toastify";
import useProducts from "../../hooks/useProducts";

const AllProducts = () => {
  const [products, setProducts] = useProducts();
  
  
  return (
    <div>
      <h2 className="text-center mt-5">All Products</h2>
      <Row xs={1} md={3} className="g-5  container mx-auto ">
        {products.map((product) => (
          <div>
            <ol>
                                   <li>{product.name}</li>
                                   
          </ol>
          
          </div>
        ))}
      </Row>
    </div>
  );
};

export default AllProducts;
