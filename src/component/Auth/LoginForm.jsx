
import { Button, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {};
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
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
        Don't have an account?
        <Button size="" onClick={() => navigate("/account/register")}>
          register
        </Button>
      </Typography>
    </div>
  );
};
export default LoginForm;
