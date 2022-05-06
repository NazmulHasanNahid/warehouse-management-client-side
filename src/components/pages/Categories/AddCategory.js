import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddCategory = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    const url = `http://localhost:5000/categories`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        e.target.reset();
        toast("Category added");
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h5 className="text-secondary text-center my-3">Add Category</h5>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true })}
        />

        <input
          className="mb-2"
          placeholder="Photo Url"
          type="text"
          {...register("image")}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddCategory;
