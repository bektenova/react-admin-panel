import { Box } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";

function MainLayout(props) {
  return (
    <Box>
      <Header />
      <SideBar />
      {props.children}
      <Footer />
    </Box>
  );
}
export default MainLayout;
