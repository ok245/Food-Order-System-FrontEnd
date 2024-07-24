import {
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER",
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log("form values",values);
  };
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Register
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name="fullName"
            label="full name"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="email"
            label="email"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="password"
            label="password"
            fullWidth
            variant="outlined"
            margin="normal"
            type="password"
          />

          <Field
            fullWidth
            as={Select}
            labelId="role-simple-select-label"
            id="role-simple-select"
            name="role"
            variant="outlined"
            margin="normal"
           
          >
            <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
            <MenuItem value={"ROLE_RESTAURANT_OWNER"}>
              Restaurant Owner
            </MenuItem>
          </Field>

          <Button
            sx={{ mt: 2, padding: "1rem" }}
            type="submit"
            variant="contained"
            fullWidth
          >
            Login
          </Button>
        </Form>
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        if have an account already?
        <Button size="" onClick={() => navigate("/account/login")}>
          Login
        </Button>
      </Typography>
    </div>
  );
};
export default RegisterForm;
