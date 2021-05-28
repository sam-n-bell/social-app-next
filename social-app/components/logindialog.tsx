import {
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  TextField,
} from "@material-ui/core";
import React from "react";

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

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <span style={{ textAlign: "center", justifyContent: "center" }}>
          Account Login
        </span>
      </DialogTitle>
      <List>
        <ListItem>
          <TextField
            required
            variant="filled"
            label="Email Address"
            onChange={handleEmailChanges}
          />
        </ListItem>
        <ListItem>
          <TextField
            required
            variant="filled"
            label="Password"
            onChange={handlePasswordChange}
            type="password"
          />
        </ListItem>
        <ListItem>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            onClick={login}
          >
            LOGIN
          </Button>
        </ListItem>
        <ListItem>
          <Button color="secondary" variant="outlined" size="large" fullWidth>
            CANCEL
          </Button>
        </ListItem>
      </List>
    </Dialog>
  );
};

export default LoginDialog;
