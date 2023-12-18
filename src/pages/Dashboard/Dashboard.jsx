import {
  Box,
  Typography,
  Select,
  InputLabel,
  FormControl,
  CircularProgress,
} from "@mui/material";
import VisaCard from "../../components/VisaCard";
import Hello from "../../components/Hello";
import CircularList from "../../components/CircularList";
import SalesCharts from "../../components/SalesCharts";
import InfoVisaCard from "../../components/InfoVisaCard";
import CircleIcon from "@mui/icons-material/Circle";
import Activity from "../../components/Activity";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import React from "react";

// import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";

function Dashboard() {
  const data = [
    {
      name: "S",
      uv: 130,
      pv: 120,
      amt: 20,
    },
    {
      name: "M",
      uv: 131,
      pv: 128,
      amt: 10,
    },
    {
      name: "T",
      uv: 132,
      pv: 90,
      amt: 9,
    },
    {
      name: "W",
      uv: 134,
      pv: 121,
      amt: 12,
    },
    {
      name: "T",
      uv: 112,
      pv: 92,
      amt: 11,
    },
    {
      name: "F",
      uv: 125,
      pv: 113,
      amt: 14,
    },
    {
      name: "S",
      uv: 127,
      pv: 117,
      amt: 15,
    },
    {
      name: "M",
      uv: 138,
      pv: 101,
      amt: 18,
    },
    { name: "T", uv: 129, pv: 98, amt: 10 },
    {
      name: "W",
      uv: 134,
      pv: 119,
      amt: 21,
    },
  ];
  return (
    <Box sx={{ background: "#E9ECEF" }}>
      <Hello />
      <CircularList />
      <Box sx={{ display: "flex", mt: "100px" }}>
        <Box
          sx={{ flexBasis: "70%", display: "flex", flexDirection: "column" }}
        >
          <SalesCharts />
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <VisaCard />
          <InfoVisaCard />
          <Activity />
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "440px",
            height: "350px",
            background: "#fff",
            borderRadius: "10px",
          }}
        >
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
              Earnings
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

          <Box sx={{ display: "flex" }}>
            <Box sx={{ pl: "40px" }}>
              <CircularProgress variant="determinate" value={75} size={170} />
              {/* <CircularProgress variant="determinate" value={60} size={140} /> */}
            </Box>
            <Box sx={{ pl: "80px" }}>
              <Box sx={{ display: "flex", pb: "50px" }}>
                <CircleIcon sx={{ color: "#3A57E8", pr: "25px" }} />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#8A92A6",
                    }}
                  >
                    Fashion
                  </Typography>
                  <Typography>251K</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <CircleIcon sx={{ color: "#85F4FA", pr: "25px" }} />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#8A92A6",
                    }}
                  >
                    Accessories
                  </Typography>
                  <Typography>176K</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "600px",
            height: "350px",
            background: "#fff",
            borderRadius: "11px",
          }}
        >
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
          <Box>
            <ResponsiveContainer width={580} height={340}>
              <BarChart
                width={590}
                height={335}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" stackId="a" fill="#3A57E8" />
                <Bar dataKey="uv" stackId="a" fill="#85F4FA" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
