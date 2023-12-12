import { Box } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";

function MainLayout(props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Box sx={{ mt: "74px", display: "flex" }}>
        <SideBar />
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <main> {props.children}</main>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
export default MainLayout;
