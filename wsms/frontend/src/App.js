import "./index.css";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

// Error messages
const required = "This field is required";

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  const [indexes, setIndexes] = useState([]);
  const [counter, setCounter] = useState(0);

  const addItem = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeItem = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    setCounter((prevCounter) => prevCounter - 1);
  };

  const clearItems = () => {
    setIndexes([]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
      <div className="card m-3">
        <div>
          <h5 className="card-header">Order</h5>
        </div>
        <div className="card-body border-bottom">
          <input
            {...register("warehouseName", {
              required: true,
            })}
            placeholder="Warehouse"
          />
          {errors?.warehouseName?.type === "required" && <p>{required}</p>}
          <input
            {...register("vendor", { required: true })}
            placeholder="Vendor"
          />
          {errors?.vendor?.type === "required" && <p>{required}</p>}
          <div>
            <label>Dispatch date</label>
            <input
              {...register("dispatchDate", {
                required: true,
                pattern:
                  "(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}",
                //pattern is dd.mm.yyyy
              })}
              placeholder="dd.mm.yyyy"
            />
          </div>
          <div>
            <label>Delivery date</label>
            <input
              {...register("deliveryDate", {
                required: true,
                pattern:
                  "(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}",
                //pattern is dd.mm.yyyy
              })}
              placeholder="dd.mm.yyyy"
            />
          </div>
        </div>
        {indexes.map((index) => {
          const fieldName = `item[${index}]`;
          return (
            <fieldset name={fieldName} key={fieldName}>
                <input
                  {...register(`${fieldName}.itemName`)}
                  placeholder="Item name"
                />
                <input
                  type="number"
                  {...register(`${fieldName}.itemQuantity`)}
                  placeholder="Quantity"
                />
                <input
                  type="number"
                  {...register(`${fieldName}.itemUnit`)}
                  placeholder="Unit"
                />
                <input
                  type="number"
                  {...register(`${fieldName}.itemValue`)}
                  placeholder="Value"
                />
              <button type="button" onClick={removeItem(index)}>
                Remove
              </button>
            </fieldset>
          );
        })}
        <button type="button" onClick={addItem}>
          Add item
        </button>
        <button type="button" onClick={clearItems}>
          Clear all items
        </button>
        <input
          type="number"
          {...register("totalValue", { required: true })}
          placeholder="Total Value"
        />
        {errors?.totalValue?.type === "required" && <p>{required}</p>}
        <input type="submit" value="Place order" />
        <input type="reset" value="Reset form" />
      </div>
    </form>
  );
};

export default App;
