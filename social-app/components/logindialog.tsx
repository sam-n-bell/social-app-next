import React from "react";
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  TextField,
} from "@material-ui/core";

interface DialogProps {
  open: boolean;
  onClose: Function;
}
const LoginDialog: React.FC<DialogProps> = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Account Login</DialogTitle>
      <List>
        <ListItem>
          <TextField
            variant="filled"
            label="email"
            onChange={(event) => {
              setEmail(event.currentTarget.value);
            }}
          />
        </ListItem>
        <ListItem>
          <TextField
            variant="filled"
            label="password"
            onChange={(event) => {
              setPassword(event.currentTarget.value);
            }}
          />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default LoginDialog;
