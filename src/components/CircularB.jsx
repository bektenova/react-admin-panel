import {
  Box,
  Typography,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

function CircularB() {
  return (
    <Box sx={{ width: "440px", height: "350px" }}>
      <Box
        sx={{
          display: "flex",
          columnGap: "180px",
          py: "32px",
          px: "32px",
          alignItems: "center",
          pl: "32px",
        }}
      >
        <Typography sx={{ fontSize: "19px", fontWeight: "500" }}>
          Conversions
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">This Week</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="This Week"
          ></Select>
        </FormControl>
      </Box>
    </Box>
  );
}
export default CircularB;
