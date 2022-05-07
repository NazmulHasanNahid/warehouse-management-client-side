import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Auth/firebase/firebase.init';
import { signOut } from "firebase/auth";
import axiosPrivate from '../../../api/axiosPrivate';


const MyItem = () => {
     const navigate = useNavigate()
     const [user, loading, error] = useAuthState(auth);
     const [items , setItems] = useState([])
     useEffect(()=>{
          const getItems = async () =>{
               const email = user.email;
               const url = `https://limitless-springs-85910.herokuapp.com/userAddedItem?email=${email}`
              try{
                const {data} = await axiosPrivate.get(url)
                setItems(data)
              }
              catch(error){
                console.log(error.message);
                if(error.response.status ===401 || error.response.status ===403 ){
                  signOut(auth)
                  navigate('/login')

                }
              }
          }
          getItems()
          
     },[user])
     const handleDelet = (id) => {
          const proceed = window.confirm("Are you sure you want to delet");
          if (proceed) {
            const url = `https://limitless-springs-85910.herokuapp.com/product/${id}`;
            fetch(url, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  const remaining = items.filter((product) => product._id !== id);
                  setItems(remaining);
                  toast("Your Item Deleted");
                }
              });
          }
        };
     
     return (
          <div className='container my-3'>
              <h4 className='text-secondary fw-bold text-center my-3'>My items {items.length}</h4> 
              <div className=''>
                   

<Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="text-center text-secondary">Products Name</th>
              <th className="text-center text-secondary">Price</th>
              <th className="text-center text-secondary">Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td className="text-center">{item.name}</td>
                <td className="text-center">{item.price}</td>
                <td>
                  {" "}
                  <div className="text-center">

                  <Button variant="secondary" className="" onClick={() => handleDelet(item._id)}>Delete</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
              </div>
          </div>
     );
};

export default MyItem;