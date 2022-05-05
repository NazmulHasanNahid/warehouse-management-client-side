import { Button, Row, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useProducts from "../../hooks/useProducts";

const AllProducts = () => {
  const [products, setProducts] = useProducts();
  const handleDelet = (id) => {
    const proceed = window.confirm("Are you sure you want to delet");
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
            toast("Product Deleted");
          }
        });
    }
  };

  return (
    <div>
      <h5  className="text-center fw-bold text-secondary my-5">Manage Inventory <br /> ______</h5>
      <div className="container">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="text-center text-secondary">Products Name</th>
              <th className="text-center text-secondary">Price</th>
              <th className="text-center text-secondary">Supliar Name</th>
              <th className="text-center text-secondary">Quantity</th>
              <th className="text-center text-secondary">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((pd) => (
              <tr key={pd._id}>
                <td className="text-center">{pd.name}</td>
                <td className="text-center">{pd.price}</td>
                <td className="text-center"> {pd.supliarname} </td>
                <td className="text-center"> {pd.quantity} </td>
                <td>
                  
                  <div className="text-center">

                  <Button variant="secondary" className="" onClick={() => handleDelet(pd._id)}>Delete</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="text-center">
        <Link to="/addItem">
              <Button variant="secondary" >Add New Item</Button>
        </Link> 
        </div>
        
      </div>
    </div>
  );
};

export default AllProducts;
