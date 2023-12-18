import { Box, Typography } from "@mui/material";

function VisaCard() {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 2,
        background: "#fff",
        overflow: "hidden",
        padding: "40px 21px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "-100px",
          top: "-70px",
          width: "385px",
          height: "385px",
          background:
            "radial-gradient(105.97% 105.97% at 0% -2.56%, #08328C 0%, #1964D3 100%)",
          borderRadius: "50%",
          zIndex: -1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          right: "-100px",
          bottom: "-70px",
          width: "385px",
          height: "385px",
          background:
            "radial-gradient(125% 125% at 102.52% 107.77%, #24777D 0%, #9AE5EB 100%)",
          borderRadius: "50%",
          zIndex: -1,
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "#fff",
          borderRadius: "24px",
          border: "2px solid #FFF",
          padding: "24px",
          rowGap: "48px",
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(32px)",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "28px", fontWeight: "700" }}>
            VISA
          </Typography>
          <Typography sx={{ fontSize: "13px", fontWeight: "400" }}>
            PREMIUM ACCOUNT
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            columnGap: "24px",
            fontSize: "23px",
            fontWeight: "500",
          }}
        >
          <Typography>5789</Typography>
          <Typography>****</Typography>
          <Typography>****</Typography>
          <Typography>2847</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography sx={{ fontSize: "11px", fontWeight: "400" }}>
              Card holder
            </Typography>
            <Typography sx={{ fontSize: "19px", fontWeight: "500" }}>
              Mike Smith
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontSize: "11px", fontWeight: "400" }}>
              Expire date
            </Typography>
            <Typography sx={{ fontSize: "19px", fontWeight: "500" }}>
              06/21
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default VisaCard;
