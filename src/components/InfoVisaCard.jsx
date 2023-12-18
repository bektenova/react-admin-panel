import { Box, Typography } from "@mui/material";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function InfoVisaCard() {
  return (
    <Box>
      <Box
        sx={{
          pt: "24px",
          pl: "24px",
          width: "480px",
          height: "250px",
          background: "#fff",
          borderRadius: "11px",
        }}
      >
        <Box sx={{ display: "flex", columnGap: "45px" }}>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                color: "#0048B2",
                background: "#D8DDFA",
                borderRadius: "3px",
                width: "37px",
                height: "37px",
              }}
            >
              <ShoppingBagTwoToneIcon fontSize="large" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", pl: "16px" }}>
              <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
                1153
              </Typography>
              <Typography
                sx={{ fontSize: "13px", fontWeight: "400", color: "#8A92A6" }}
              >
                Products
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <Box
              sx={{
                color: "#409900",
                background: "#CDEBEC",
                borderRadius: "3px",
                width: "37px",
                height: "37px",
              }}
            >
              <ShoppingBasketIcon fontSize="large" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", pl: "16px" }}>
              <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
                81K
              </Typography>
              <Typography
                sx={{ fontSize: "13px", fontWeight: "400", color: "#8A92A6" }}
              >
                Order Served
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ pt: "24px", display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: "500",
              pr: "150px",
            }}
          >
            $4,050,12,300
          </Typography>
          <Box
            sx={{
              background: "#1AA053",
              textAlign: "center",
              width: "100px",
              height: "17px",
              borderRadius: "20px",
              color: "#FFF",
              padding: "5px",
            }}
          >
            <Typography>YoY 24%</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            color: "#08B1BA",
            pt: "9px",
          }}
        >
          Life time sales
        </Box>
        <Box sx={{ display: "flex", pt: "25px", columnGap: "55px" }}>
          <div>
            <button
              style={{
                background: "#3A57E8",
                width: "180px",
                height: "40px",
                paddingLeft: "5px",
                paddingRight: "5px",
                paddingTop: "5px",
                paddingBottom: "5px",
                borderRadius: "8px",
                borderColor: "#3A57E8",
                color: "white",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              View Project
            </button>
          </div>
          <div>
            <button
              style={{
                background: "#08B1BA",
                width: "180px",
                height: "40px",
                paddingLeft: "5px",
                paddingRight: "5px",
                paddingTop: "5px",
                paddingBottom: "5px",
                borderRadius: "8px",
                borderColor: "#08B1BA",
                color: "white",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Analytics
            </button>
          </div>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "white",
          mt: "30px",
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
          display: "flex",
          justifyContent: "space-between",
          pt: "40px",
          pr: "50px",
          pl: "50px",
          pb: "24px",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "28px", fontWeight: "500" }}>
            750K
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "400", color: "#8A92A6" }}
          >
            Website Visitors
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "28px", fontWeight: "500" }}>
            7,500
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "400", color: "#8A92A6" }}
          >
            New Customers
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default InfoVisaCard;
