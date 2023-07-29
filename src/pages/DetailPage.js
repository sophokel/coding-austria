import { useEffect } from "react";
import { StyledBackButton } from "../components/StyledBackButton";
import { StyledMainButton } from "../components/StyledMainButton";
import { Paper, MobileStepper, Chip } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowBack,
  Send,
  AccessTime,
  LocationOn,
  Map,
} from "@mui/icons-material";
import ScrollToTopButton from "../components/ScrollToTopButton";

function DetailPage({ title }) {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const { kiga, searchParams } = state;

  const {
    district,
    time,
    name, driveStart, driveDestination, date,
  } = searchParams;

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  const handleInquiryClick = (e) => {
    e.preventDefault();
    navigate("/inquiry", {
      state: {
        kiga,
        searchParams,
      },
    });
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate("/routes", {
      state: {
        kiga,
        searchParams,
      },
    });
  };

  return (
    <div className="container col">
      <ScrollToTopButton />
      <div className="headline-box col center-all">
        <MobileStepper
          variant="dots"
          steps={4}
          activeStep={1}
          position="static"
          backButton={null}
          nextButton={null}
        />
        <h3 className="headline">Hier findest du die Einzelheiten</h3>
      </div>
      <div>
        <Paper>
          <div className="result-box col">
            <img
              alt="Kindergarten"
              src={`/images/default-photo.jpeg`}
              className="result-pic"
            />
            <div className="col">
              <h3 className="detail-headline">{kiga.name}</h3>
              <div className="row center-vertical">
                <Map className="result-icon" />
                <p> {kiga.driveStart} - {kiga.driveDestination}</p>
              </div>
              <div className="row center-vertical">
                <LocationOn className="result-icon" />
                <p>{district === "" ? kiga.district : district}</p>
              </div>
              <div className="row center-vertical">
                <AccessTime className="result-icon" />
                <p>{kiga.date} um {kiga.time}<br /> 
                </p>
              </div>          
            </div>
            <div className="row chip-box">
              <div className="col chip-box-col">
                <Chip
                  label={kiga.district}
                  color="primary"
                  style={{ width: "150px" }}
                />
              
              </div>
            
            </div>
            <div className="kiga-text">
              
             {}
            </div>
          </div>
        </Paper>
      </div>
      <div className="col center-all">
        <StyledMainButton
          startIcon={<Send />}
          variant="contained"
          sx={{
            marginBottom: "25px",
          }}
          onClick={handleInquiryClick}
        >
          Anfrage schicken
        </StyledMainButton>

        <h3 className="bottomline">Andere Kindergärten ansehen?</h3>
        <StyledBackButton
          startIcon={<ArrowBack />}
          variant="contained"
          sx={{
            width: 250,
            marginTop: "24px",
            marginBottom: "88px",
          }}
          onClick={handleBackClick}
        >
          Zurück zu den Resultaten
        </StyledBackButton>
      </div>
    </div>
  );
}

export default DetailPage;
