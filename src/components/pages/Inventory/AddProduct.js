import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../Auth/firebase/firebase.init";
const AddProduct = () => {
  const [user, loading, error] = useAuthState(auth);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data ,e) => {
    const url = `http://localhost:5000/products`;
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
      <h3 className="text-center fw-bold text-secondary">Add Products</h3>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true})}
        />
        <input
          className="mb-2"
          placeholder="Email"
          type="email"
          {...register("email", { required: true})}
        />
       
        <input
          className="mb-2"
          placeholder="Quantity"
          {...register("quantity", { required: true})}
        />
        <input
          className="mb-2"
          placeholder="supliarname"
          {...register("supliarname", { required: true})}
        />
        <textarea
          className="mb-2"
          placeholder="Descreption"
          {...register("description")}
        />
        <input
          className="mb-2"
          placeholder="price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Photo Url"
          type="text"
          {...register("img")}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddProduct;
