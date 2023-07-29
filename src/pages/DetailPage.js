import { useEffect } from "react";
import { StyledBackButton } from "../components/StyledBackButton";
import { StyledMainButton } from "../components/StyledMainButton";
import { Paper, MobileStepper, LinearProgress, Chip } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowBack,
  Send,
  AccessTime,
  BubbleChart,
  ChildCare,
  LocationOn,
  Map,
  Public,
} from "@mui/icons-material";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { joinAbbreviations } from "../utils/utils";

function DetailPage({ title }) {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const availabilityRate = Math.floor(Math.random() * 100);

  const { kiga, searchParams } = state;

  const {
    district,
    time,
    name, driveStart, driveEnd, date,
   // allGroupSizes,
   // allOpeningHours,
  //  allAgeGroups,
  //  publicOrPrivate,
  } = searchParams;

  // const groupSizes = joinAbbreviations(allGroupSizes);
  // const openingHours = joinAbbreviations(allOpeningHours);
  // const ageGroups = joinAbbreviations(allAgeGroups);

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
    navigate("/results", {
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
                <p> {kiga.driveStart} - {kiga.driveEnd}</p>
              </div>
              <div className="row center-vertical">
                <LocationOn className="result-icon" />
                <p>{district === "" ? kiga.district : district}</p>
              </div>
              <div className="row center-vertical">
                <AccessTime className="result-icon" />
                <p>{kiga.date} um {kiga.time}<br />
              
                  {/* {allOpeningHours.length === 0
                    ? kiga.openingHours.join(", ")
                    : openingHours} */}
                    
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
              {" "}
              Hallo!
              <br />
              Wir sind der Kindergarten <b>{kiga.name} 😄</b>
              <br />
              <b>
                Wir freuen uns sehr, dass du dich für unseren Kindergarten
                interessierst!
              </b>{" "}
              🙋
              <br />
              <br />
              Wir befinden uns{" "}
              <b>mitten im Zentrum des wunderschönen {district}s in Wien</b>
              🏡 und{" "}
              <b>
                bieten neben kleinen (S) auch mittelgroßen (M) Gruppengrößen
              </b>
              . Wir freuen uns sehr Kinder von <b>0 - 5</b> Jahren in unserem
              Haus begrüßen zu dürfen und verfolgen das Konzept der{" "}
              <b>altermäßig gemischten Gruppen</b>. 👩‍👧‍👦
              <br />
              <br />
              Neben gewöhnlichem <b>Mittagessen</b> 🍲 gibt es bei uns außerdem
              die Option zwischen{" "}
              <b>vegetarischen 🥬 sowie glutenfreien 🌾 Menüs</b> zu wählen.
              Bitte gib uns das wenn möglich gleich zu Beginn bei der Anfrage
              bzw. Anmeldung bekannt! So kann sichergestellt werden, dass gleich
              von Beginn an für die Wünsche deines Kindes gesorgt ist.
              <br />
              <br />
              Wir denken, dass sich Kinder nur dann optimal entfalten können
              wenn sie auch <b>viel frische Luft 🍃 und Platz zum spielen</b> 🧸
              🚂 🪀 haben. Deshalb stehen <b>Ausflüge ins Grüne</b> ☘️ ganz oben
              auf unserem Programm!
              <br />
              <br />
              Ganz besonders freuen wir uns auch über{" "}
              <b>Kinder von Regenbogenfamilien</b> 🌈 🌈 🌈
              <br />
              <br />
              Solltest du weitere Fragen haben oder sonstige Anliegen schick uns
              gerne eine Anfrage!
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
