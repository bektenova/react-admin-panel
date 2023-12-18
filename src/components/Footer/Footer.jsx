import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mt: "200px" }}>
      <Box sx={{ display: "flex", columnGap: "25px" }}>
        <Typography>Privacy Policy</Typography>
        <Typography>Terms of Use</Typography>
      </Box>
      <Box>© 2021 Hope UI, Made with ❤ by IQONIC Design.</Box>
    </Box>
  );
}
export default Footer;
