import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import SettingsIcon from "@mui/icons-material/Settings";
import RadioIcon from "@mui/icons-material/Radio";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import StarIcon from "@mui/icons-material/Star";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PeopleIcon from "@mui/icons-material/People";
import ErrorIcon from "@mui/icons-material/Error";

import { useState } from "react";
import { Divider } from "@mui/material";

function SideBar() {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: "257px",
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: "257px", boxSizing: "border-box" },
      }}
    >
      <Toolbar />

      <Box sx={{ px: "10px" }}>
        <List sx={{ mt: "38px" }} subheader="Home">
          <ListItemButton
            onClick={() => {
              setSelectedItem(0);
            }}
            selected={selectedItem === 0}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>

            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              setSelectedItem(1);
            }}
            selected={selectedItem === 1}
          >
            <ListItemIcon>
              <TuneIcon />
            </ListItemIcon>
            <ListItemText primary="Menu Styles" />
            {selectedItem === 1 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>
        </List>
        <Divider />
        <h2>Pages</h2>
        <ListItemButton
          onClick={() => {
            setSelectedItem(6);
          }}
          selected={selectedItem === 6}
        >
          <ListItemIcon>
            <RadioIcon />
          </ListItemIcon>
          <ListItemText primary="Example" />
          {selectedItem === 6 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            setSelectedItem(7);
          }}
          selected={selectedItem === 7}
        >
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Widgets" />
          {selectedItem === 7 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            setSelectedItem(8);
          }}
          selected={selectedItem === 8}
        >
          <ListItemIcon>
            <AddLocationAltIcon />
          </ListItemIcon>
          <ListItemText primary="Maps" />
          {selectedItem === 8 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            setSelectedItem(9);
          }}
          selected={selectedItem === 9}
        >
          <ListItemIcon>
            <VerifiedUserIcon />
          </ListItemIcon>
          <ListItemText primary="Authentication" />
          {selectedItem === 9 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            setSelectedItem(10);
          }}
          selected={selectedItem === 10}
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
          {selectedItem === 10 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            setSelectedItem(11);
          }}
          selected={selectedItem === 11}
        >
          <ListItemIcon>
            <ErrorIcon />
          </ListItemIcon>
          <ListItemText primary="Error 404" />
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            setSelectedItem(12);
          }}
          selected={selectedItem === 12}
        >
          <ListItemIcon>
            <ReportProblemIcon />
          </ListItemIcon>
          <ListItemText primary="Error 505" />
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            setSelectedItem(13);
          }}
          selected={selectedItem === 13}
        >
          <ListItemIcon>
            <BookmarksIcon />
          </ListItemIcon>
          <ListItemText primary="Maintence" />
        </ListItemButton>
        <Divider />

        <h3 style={{ fontSize: "16px", fontWeight: "600" }}>Elements</h3>
        <ListItemButton
          onClick={() => {
            setSelectedItem(2);
          }}
          selected={selectedItem === 2}
        >
          <ListItemIcon>
            <AccountBalanceWalletIcon />
          </ListItemIcon>

          <ListItemText primary="Components" />
          {selectedItem === 2 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            setSelectedItem(3);
          }}
          selected={selectedItem === 3}
        >
          <ListItemIcon>
            <FormatAlignJustifyIcon />
          </ListItemIcon>

          <ListItemText primary="Form" />
          {selectedItem === 3 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            setSelectedItem(4);
          }}
          selected={selectedItem === 4}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>

          <ListItemText primary="Table" />
          {selectedItem === 4 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            setSelectedItem(5);
          }}
          selected={selectedItem === 5}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>

          <ListItemText primary="Icons" />
          {selectedItem === 5 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </ListItemButton>
      </Box>
    </Drawer>
  );
}
export default SideBar;
