import { Dialog, DialogContent, Typography, Button, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
export default function ResultDialog({
  open,
  status,
  title,
  message,
  amount,
  onClose,
  onPrimaryAction,
  primaryLabel = "Kembali",
}) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          py={4}
        >
          {status ? (
            <CheckCircleIcon sx={{ fontSize: 82, color: "success.main" }} />
          ) : (
            <CancelRoundedIcon
              sx={{
                fontSize: 82,
                color: "red",
                borderRadius: "50%",
              }}
            />
          )}

          <Typography variant="body1" mt={2}>
            {title}
          </Typography>

          {amount !== undefined && (
            <Typography variant="h6" fontWeight="bold" mt={1}>
              Rp{amount.toLocaleString("id-ID")}
            </Typography>
          )}

          <Typography variant="body1" mt={1}>
            {message}
          </Typography>

          <Button
            variant="text"
            color="error"
            sx={{ mt: 3, fontWeight: "bold" }}
            onClick={onPrimaryAction}
          >
            {primaryLabel}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
