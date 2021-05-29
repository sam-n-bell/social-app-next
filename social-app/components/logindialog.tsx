import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { Form, Formik, FormikProps } from "formik";
import React from "react";
import { loginForm } from "../validationSchemas/authSchemas";

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
        <Typography variant="h5" align="center">
          Account Login
        </Typography>
      </DialogTitle>
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
            handleReset,
          } = props;
          return (
            <Form>
              <DialogContent style={{ overflow: "hidden" }}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
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
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
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
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions style={{ overflow: "hidden" }}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      size="large"
                      fullWidth
                    >
                      LOGIN
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color="secondary"
                      variant="outlined"
                      size="large"
                      fullWidth
                      type="reset"
                      onReset={handleReset}
                    >
                      CANCEL
                    </Button>
                  </Grid>
                </Grid>
              </DialogActions>
            </Form>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default LoginDialog;
