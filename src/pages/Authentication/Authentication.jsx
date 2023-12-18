import {
  Box,
  Checkbox,
  TextField,
  Typography,
  FormControlLabel,
  Button,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Authentication() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box
        sx={{
          flex: "1 1 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "18px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src="/logo.png" alt="logo" />
            <Typography sx={{ ml: "8px", fontSize: "33px", mr: "42px" }}>
              RAP
            </Typography>
          </Box>
          <Box
            sx={{ fontSize: "33px", fontWeight: "600", alignItems: "center" }}
          >
            Sign In
          </Box>
          <Box sx={{ fontSize: "17px", fontWeight: "400", color: "#8A92A6" }}>
            Sign in to stay connected.
          </Box>
          <Box>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
          </Box>
          <Box>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me?"
              sx={{ color: "#8A92A6" }}
            />
            <Typography sx={{ color: "#3A57E8" }}>Forgot Password</Typography>
          </Box>
          <Box>
            <Button sx={{ px: "30px" }} variant="contained" disableElevation>
              Sign in
            </Button>
          </Box>
          <Box sx={{ fontSize: "16px", fontWeight: "400" }}>
            {" "}
            or sign in with other accounts?
          </Box>
          <Box sx={{ display: "flex", columnGap: "25px" }}>
            <GoogleIcon />
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box>Don’t have an account? </Box>
            <Box sx={{ color: "#3A57E8" }}>Click here to sign up.</Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ flex: "1 1 auto" }}>2</Box>
    </Box>
  );
}
export default Authentication;
