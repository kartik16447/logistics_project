import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import "./index.css";

function App() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      item: [
        {
          itemName: "Name",
          itemQuantity: "Quantity",
          itemUnit: "Units",
          itemValue: "Value",
        },
      ],
    },
  });

  // Default values absolutely needs to be supplied
  // See tips section under React hook form v7 controller
  // https://react-hook-form.com/api/usecontroller/controller

  const { fields, remove, append } = useFieldArray({
    control,
    name: "item",
  });

  const required = "This field is required";

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Order </h1>

      <input
        {...register("warehouseName", {
          required: true,
        })}
        placeholder="Warehouse"
      />
      {errors?.warehouseName?.type === "required" && <p>{required}</p>}

      <input {...register("vendor", { required: true })} placeholder="Vendor" />
      {errors?.vendor?.type === "required" && <p>{required}</p>}

      <div>
        <label>Dispatch date</label>
        <input
          {...register("dispatchDate", {
            required: true,
            pattern: "(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}",
            //pattern is dd.mm.yyyy
          })}
          placeholder="dd.mm.yyyy"
        />
        <label>Delivery date</label>
        <input
          {...register("deliveryDate", {
            required: true,
            pattern: "(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}",
            //pattern is dd.mm.yyyy
          })}
          placeholder="dd.mm.yyyy"
        />
      </div>

      <ul>
        {fields.map((object, index) => {
          return (
            <li key={object.id}>
              <input
                defaultValue={`${object.itemName}`} // make sure to set up defaultValue
                {...register(`item[${index}].itemName`)}
              />

              <Controller
                name={`item[${index}].itemQuantity`}
                control={control}
                defaultValue={object.itemQuantity} // make sure to set up defaultValue
                render={({ field }) => <input {...field} />}
              />

              <Controller
                name={`item[${index}].itemUnit`}
                control={control}
                defaultValue={object.itemUnit} // make sure to set up defaultValue
                render={({ field }) => <input {...field} />}
              />
              <Controller
                name={`item[${index}].itemValue`}
                control={control}
                defaultValue={object.itemValue} // make sure to set up defaultValue
                render={({ field }) => <input {...field} />}
              />

              <button type="button" onClick={() => remove(index)}>
                Remove item
              </button>
            </li>
          );
        })}
      </ul>

      <section>
        <button
          type="button"
          onClick={() => {
            append({
              itemName: "Name",
              itemQuantity: "Quantity",
              itemUnit: "Units",
              itemValue: "Value",
            });
          }}
        >
          Add item
        </button>

        <button
          type="button"
          onClick={() =>
            reset({
              item: [
                {
                  itemName: "Name",
                  itemQuantity: "Quantity",
                  itemUnit: "Units",
                  itemValue: "Value",
                },
              ],
            })
          }
        >
          Reset form
        </button>
      </section>

      <input
        {...register("totalValue", { required: true })}
        placeholder="Total Value"
      />
      {errors?.totalValue?.type === "required" && <p>{required}</p>}
      <input type="submit" value="Place order" />
    </form>
  );
}

export default App;
