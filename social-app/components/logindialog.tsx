import {
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  TextField,
} from "@material-ui/core";
import React from "react";
import { loginForm } from "../validationSchemas/authSchemas";
import { Formik, Form, FormikProps } from "formik";
import yup from "yup";

interface DialogProps {
  open: boolean;
  onClose: Function;
}
const LoginDialog: React.FC<DialogProps> = ({ open, onClose }) => {
  const handleClose = () => {
    onClose(false);
  };

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleEmailChanges = (event) => {
    setEmail(event.currentTarget.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.currentTarget.value);
  };

  const login = () => {
    alert("login");
  };

  interface ILoginForm {
    email: string;
    password: string;
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <span style={{ textAlign: "center", justifyContent: "center" }}>
          Account Login
        </span>
      </DialogTitle>
      <List>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values: ILoginForm) => {
            setTimeout(() => {
              alert("ok");
            }, 500);
          }}
          validationSchema={loginForm}
        >
          {(props: FormikProps<ILoginForm>) => {
            const {
              values,
              touched,
              errors,
              handleBlur,
              handleChange,
              isSubmitting,
            } = props;
            return (
              <Form>
                <ListItem>
                  <TextField
                    required
                    id="email"
                    variant="filled"
                    label="Email Address"
                    value={values.email}
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email && touched.email ? true : false}
                    helperText={
                      errors.email && touched.email
                        ? errors.email
                        : "Enter Your Email"
                    }
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    required
                    variant="filled"
                    label="Password"
                    id="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.password && touched.password ? true : false}
                    helperText={
                      errors.password && touched.password
                        ? errors.password
                        : "Enter Your Password"
                    }
                    type="password"
                  />
                </ListItem>
                <ListItem>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                  >
                    LOGIN
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    color="secondary"
                    variant="outlined"
                    size="large"
                    fullWidth
                  >
                    CANCEL
                  </Button>
                </ListItem>
              </Form>
            );
          }}
        </Formik>
      </List>
    </Dialog>
  );
};

export default LoginDialog;
