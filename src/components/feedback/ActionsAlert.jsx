import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function ActionAlerts({ status, message, onClose }) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert
        severity={status ? "success" : "error"}
        onClose={onClose}
        sx={
          status
            ? { color: "green" }
            : {
                color: "red",
              }
        }
      >
        {message}
      </Alert>
    </Stack>
  );
}
