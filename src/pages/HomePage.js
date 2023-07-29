import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Kindergartensuche";
  }, [navigate]);

  return (
    <div className="landing-page col center-all">
      <img
        src="/images/kindergarten_text.png"
        alt="Kindergarten"
        className="logo"
      ></img>
    </div>
  );
}

export default LandingPage;
