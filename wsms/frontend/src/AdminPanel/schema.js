import * as yup from "yup";

const Schema = yup.object().shape({
  name: yup.string().required("Please submit a name"),
  address: yup.string().required("Please submit an address"),
  email: yup.string().email("Please submit a correct email address"),
});

export default Schema;
