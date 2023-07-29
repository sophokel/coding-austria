import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Kindergartensuche";
  }, [navigate]);

  return (
    <div className="landing-page col center-all">
        <Paper className="route-swipe-card">Test</Paper>
    </div>
  );
}

export default LandingPage;
