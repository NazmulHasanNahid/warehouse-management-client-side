import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useProducts from "../../hooks/useProducts";

const AllProducts = () => {
  const [products, setProducts] = useProducts();
  const handleDelet = (id) => {
    const proceed = window.confirm("Are you sure This is deliverd?");
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // if(data.deletedCount){
          // }
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
          toast('Your Product Deleted')
         
        });
    }
  };
  
  
  return (
    <div>
      <h2 className="text-center mt-5">Total Products :  {products.length}</h2>
      <Row xs={1} md={1} className="g-5  container mx-auto ">
        {products.map((product) => (
          
          <p className="border">{product.name} <button onClick={() => handleDelet(product._id)}  >x</button></p>
                                 
                                   
         
          
          
        ))}
      </Row>
    </div>
  );
};

export default AllProducts;
