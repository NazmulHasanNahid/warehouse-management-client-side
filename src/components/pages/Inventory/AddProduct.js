import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../Auth/firebase/firebase.init";
import Zoom from 'react-reveal/Zoom';
const AddProduct = () => {
  const [user, loading, error] = useAuthState(auth);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data ,e) => {
    const url = `https://limitless-springs-85910.herokuapp.com/products`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        e.target.reset()
        toast('product added')
        
      });
  };

  return (
    <div className="w-50 mx-auto mt-5">
      <Zoom>
      <h3 className="text-center fw-bold text-secondary">Add Item</h3>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          required
          {...register("name", { required: true})}
        />
        <input
          className="mb-2"
          required
          placeholder="Email"
          readOnly
          value={user.email}
          type="email"
         
          {...register("email", { required: true})}
        />
       
        <input
          className="mb-2"
          required
          placeholder="Quantity"
          {...register("quantity", { required: true})}
          type="number"
        />
        <input
          className="mb-2"
          required
          placeholder="supliarname"
          {...register("supliarname", { required: true})}
        />
        <textarea
          required
          className="mb-2"
          placeholder="Descreption"
          {...register("description")}
        />
        <input
          required
          className="mb-2"
          placeholder="price"
          type="number"
          {...register("price")}
        />
        <input
           required
          className="mb-2"
          placeholder="Photo Url"
          type="text"
          {...register("img")}
        />
        <input type="submit" value="Add" />
      </form>
      </Zoom>
    </div>
  );
};

export default AddProduct;
