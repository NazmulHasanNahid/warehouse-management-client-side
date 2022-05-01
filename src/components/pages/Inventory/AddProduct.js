import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const AddProduct = () => {
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
        toast("Product Added");
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
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-2"
          placeholder="Quantity"
          {...register("quantity", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-2"
          placeholder="supliarname"
          {...register("supliarname", { required: true, maxLength: 20 })}
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
