import { useState, useEffect } from "react";
import {
  TextField,
 
  FormControl,
  
} from "@mui/material";
import { StyledBackButton } from "../components/StyledBackButton";
import { StyledMainButton } from "../components/StyledMainButton";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
 
function InquiryPage({ title }) {
  const navigate = useNavigate();
  const { pathname, state } = useLocation();
 
  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate("/", {
      state,
    });
  };

   const [name, setName] = useState("Bitte Routename angeben!");
  const [driveStart, setDriveStart] = useState("Bitte Routestart angeben!");
   const [driveDestination, setDriveDestination] = useState("Bitte Routeziel angeben!");
 
  const [district, setDistrict] = useState("Bitte Bundesland angeben!");
 
 const [time, setTime] = useState("Bitte Zeit angeben!");
 
  const [date, setDate] = useState("Bitte Teg angeben!");

  return (
    <div className="container col">
      <ScrollToTopButton />
      <div className="headline-box col center-all">
        <h3 className="headline">Daten zu deiner Route:</h3>
        <p className="required-description">
          Die mit * gekennzeichneten Felder sind verpflichtend
        </p>
      </div>
      <div className="input-box">
        <FormControl fullWidth sx={{ marginBottom: "15px" }}>
          <TextField
            required
            color="secondary"
            id="firstName"
            label="Vorname"
            variant="outlined"
            placeholder="Routename"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "15px" }}>
          <TextField
            fullWidth
            required
            color="secondary"
            id="driveStart"
            label="Nachname"
            variant="outlined"
            placeholder="Start der Route"
            onChange={(e) => {
              setDriveStart(e.target.value);
            }}
          />
          
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "15px" }}>
          <TextField
            fullWidth
            required
            color="secondary"
            id="phoneNumber"
            label="Telefonnummer"
            variant="outlined"
            placeholder="Ziel der Route"
            onChange={(e) => {
              
              setDriveDestination(e.target.value);
            }}
         
          />
          
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "15px" }}>
          <TextField
            fullWidth
            required
            color="secondary"
            id="district"
            label="district"
            variant="outlined"
            placeholder="Bundesland"
            onChange={(e) => {
              setDistrict(e.target.value);
            }}
          />
        </FormControl>
      </div>
      
      <div className="input-box">
       
        <FormControl fullWidth sx={{ marginBottom: "15px" }}>
          <TextField
            fullWidth
            required
            color="secondary"
            id="childLastName"
            label="time"
            variant="outlined"
            placeholder="Zeit"
            onChange={(e) => {
          
              setTime(e.target.value);
            }}
          
          />
        
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "15px" }}>
          <TextField
            fullWidth
            required
            color="secondary"
            id="date"
            label="Alter"
            variant="outlined"
            placeholder="Datum"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
    
        </FormControl>
      </div>
      <div className="input-box">
        <TextField
          fullWidth
          color="secondary"
          rows={6}
          multiline
          placeholder="Verfasse hier deine Nachricht..."
        />
        <div className="col center-all">
         
          <StyledMainButton
            variant="contained"
            sx={{
              marginBottom: "25px",
            }}
           
          >
           Route erstellen
          </StyledMainButton>
          <h3 className="bottomline">Nochmal Details checken?</h3>
          <StyledBackButton
            startIcon={<ArrowBack />}
            variant="contained"
            sx={{
              width: 250,
              marginTop: "24px",
              marginBottom: "88px",
            }}
            
          >
            Zurück zu den Details
          </StyledBackButton>
        </div>
      </div>
    </div>
  );
}

export default InquiryPage;