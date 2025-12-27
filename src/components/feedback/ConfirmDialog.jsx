import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";

export default function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel = "Ya, Lanjutkan",
  cancelLabel = "Batalkan",
  onConfirm,
  onCancel,
}) {
  return (
    <Dialog open={open} onClose={onCancel} maxWidth="xs" fullWidth>
      <DialogContent>
        <Box textAlign="center" py={2}>
          <AccountBalanceWalletRoundedIcon
            sx={{
              fontSize: 56,
              color: "white",
              marginBottom: "5px",
              padding: "15px",
              bgcolor: "error.main",
              borderRadius: "50%",
            }}
          />

          <Typography variant="body2">{title}</Typography>

          <Typography variant="h6" fontWeight="bold" mt={1}>
            Rp{description.toLocaleString("id-ID")} ?
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions
        sx={{
          justifyContent: "center",
          pb: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button
          color="error"
          onClick={onConfirm}
          sx={{ marginBottom: "10px", fontWeight: "bold" }}
        >
          {confirmLabel}
        </Button>
        <Button color="inherit" onClick={onCancel}>
          {cancelLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
