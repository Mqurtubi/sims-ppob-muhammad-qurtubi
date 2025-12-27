import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import { InputLabel } from "@mui/material";

export default function TextFieldForm({
  placeholder,
  type,
  twoIcon,
  startIcon,
  endIcon,
  handleClick,
  name,
  value,
  handlerChange,
  error,
  label = false,
  labelValue = "",
  disabled = false,
}) {
  return (
    <div className="space-y-3">
      {label && <InputLabel>{labelValue}</InputLabel>}
      <TextField
        id="input-with-icon-textfield"
        error={error && error}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={handlerChange}
        variant="outlined"
        fullWidth
        disabled={disabled}
        slotProps={
          twoIcon
            ? {
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      {startIcon}
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <IconButton onClick={handleClick}>
                      <InputAdornment position="end">{endIcon}</InputAdornment>
                    </IconButton>
                  ),
                },
              }
            : {
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      {startIcon}
                    </InputAdornment>
                  ),
                },
              }
        }
      />
      <FormHelperText error={error && "error"} sx={{ textAlign: "right" }}>
        {error}
      </FormHelperText>
    </div>
  );
}
