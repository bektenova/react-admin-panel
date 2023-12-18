import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import CircleIcon from "@mui/icons-material/Circle";

import {
  Box,
  Typography,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

function SalesCharts() {
  const data = [
    {
      name: "JAN",
      uv: 5000,
      pv: 9000,
      amt: 4100,
    },
    {
      name: "FUB",
      uv: 2000,
      pv: 5900,
      amt: 2210,
    },
    {
      name: "MAR",
      uv: 6200,
      pv: 9000,
      amt: 4100,
    },
    {
      name: "APR",
      uv: 2000,
      pv: 4800,
      amt: 2210,
    },
    {
      name: "JUN",
      uv: 5100,
      pv: 9000,
      amt: 4100,
    },
    {
      name: "JUL",
      uv: 2000,
      pv: 5900,
      amt: 2210,
    },
    {
      name: "AUG",
      uv: 5000,
      pv: 9000,
      amt: 4100,
    },
  ];
  return (
    <Box sx={{ pl: "100px" }}>
      <Box
        sx={{
          width: "900px",
          height: "420px",
          background: "#fff",
          borderRadius: "10px",
        }}
      >
        <ResponsiveContainer>
          <div
            style={{
              padding: "15px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
                $855.8K
              </Typography>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "400", color: "#8A92A6" }}
              >
                Gross Sales
              </Typography>
            </Box>

            <Box sx={{ display: "flex" }}>
              <Box sx={{ display: "flex" }}>
                <CircleIcon sx={{ color: "#3A57E8" }} />
                <Typography>Sales</Typography>
              </Box>
              <Box sx={{ display: "flex", pl: "20px" }}>
                <CircleIcon sx={{ color: "#85F4FA" }} />
                <Typography>Cost</Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex" }}>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">This Week</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="This Week"
                ></Select>
              </FormControl>
            </Box>
          </div>

          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 10, right: 30, bottom: 0, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              strokeWidth={2}
              dataKey="uv"
              stroke="#3A57E8"
              fill="#fff"
            />

            <Area
              type="monotone"
              strokeWidth={2}
              dataKey="pv"
              stroke="#85F4FA"
              fill="#fff"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}

export default SalesCharts;
