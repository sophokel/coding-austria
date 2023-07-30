
import {
  AccountCircleOutlined,
 
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header({ title }) {
  const navigate = useNavigate();



  return (
    <>
        <div className="header-menu row">
         <img
            src="/images/logo_text.png"
            onClick={() => navigate("/destination")}
            className="logo logo-left"
          ></img>
          <IconButton color="secondary" sx={{ marginRight: "14px" }}>
            <AccountCircleOutlined />
          </IconButton>
        </div>
    </>
  );
}

export default Header;
