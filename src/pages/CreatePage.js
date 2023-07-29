import { useEffect } from "react";
import { Search } from "@mui/icons-material";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { StyledMainButton } from "../components/StyledMainButton";
import { Link } from "react-router-dom";

function CreatePage({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <div className="container">
        <ScrollToTopButton />
        <div className="headline-box col">
          <h3 className="headline">
            Hier findet jede:r den passenden Kindergarten!
          </h3>
        </div>
        <p className="paragraph">
          Wir sind die Plattform Nr. 1, wenn es darum geht, den perfekten
          Kindergarten für dein Kind zu finden!
        </p>
        <br />
        <p className="paragraph">
          Um dir einen kleinen Überblick über wichtige Auswahl-kriterien zu
          geben findest du untenstehend kurze Artikel zu den jeweiligen
          Themengebieten...
        </p>
        <br />
        <p className="paragraph-headline">
          Werde auch du Teil der größten Eltern-Community Wiens!
        </p>
        <img
          alt="Kindergarten"
          src="/images/info_1.png"
          className="paragraph-pic right"
        />
        <p className="paragraph">
          Mit der Plattform “Kindergartenwahl” findest auch du den besten
          Kindergarten für dein Kind. Über 50.000 Plätze wurden in den
          vergangenen Jahren über unser Portal vergeben, Tendenz steigend!
        </p>
        <br />
        <p className="paragraph-headline">
          Diversität steht bei uns an erster Stelle!
        </p>
        <img
          alt="Kindergarten"
          src="/images/info_2.png"
          className="paragraph-pic left"
        />
        <p className="paragraph">
          Wir möchten mit unserem Angebot besonders auf diversitätsbewusste
          Menschen eingehen. Deshalb stehen bei uns Themen wie Vielfalt,
          Mehrsprachigkeit, No-Go bei Rassismus oder Homofeindlichkeit im
          Vordergrund.
        </p>
        <br />
        <p className="paragraph">
          Dein Kind soll sich schließlich wohlfühlen! Kindergärten bei denen
          diese Themen ganz groß geschrieben werden sind mit dem Tag
          “Diversität” gekennzeichnet.
        </p>
        <br />
        <p className="paragraph-headline">
          Ein Kindergarten ganz nach deinen Bedürfnissen!
        </p>
        <img
          alt="Kindergarten"
          src="/images/info_3.png"
          className="paragraph-pic right"
        />
        <p className="paragraph">
          Die zeitlichen Verfügbarkeiten der hier angebotenen Kindergärten
          variieren zwischen stundenweisen Angeboten (<b>H</b>) über Vormittags-
          (<b>VM</b>) bzw. Nachmittagsverfügbarkeiten (<b>NM</b>) bis hin zu
          Ganztagesstätten (<b>GT</b>). Somit kannst du den Kindergarten ganz
          flexibel nach deinem Arbeitsverhältnis wählen.
        </p>
        <br />
        <p className="paragraph">
          Möchtest du dein Kind lieber für eine kleine (<b>S</b>, bis 5 Kinder),
          mittelgroße (<b>M</b>, 6 bis 10 Kinder), große (<b>L</b>, 11 bis 15
          Kinder) oder sehr große (<b>XL</b>, 16 bis 20 Kinder) Gruppe mit
          ausschließlich gleichaltrigen anmelden oder ziehst du eine
          Konstellation mit gemischtem Alter vor? Wähle den Kindergarten mit den
          entsprechenden Tags!
        </p>
        <br />
        <p className="paragraph-headline">
          Ein Freibereich ist dir besonders wichtig?
        </p>
        <img
          alt="Kindergarten"
          src="/images/info_4.png"
          className="paragraph-pic left"
        />
        <p className="paragraph">
          Ein weiteres Qualitätskriterium ist ein zugeordneter Freiraum. Ob frei
          gestaltbare Rasenfläche, ausformulierter Kinderspielplatz,
          öffentlicher Freibereich in der Nähe oder regelmäßige Ausflugsziele.
          Dein Kind soll natürlich ganz viel Raum erhalten um sich bestmöglich
          entfalten zu können. Wähle aus einer Vielzahl an Outdoor-bezogenen
          Angeboten!
        </p>
        <br />
        <p className="paragraph-headline">
          Individualität gibts auch beim Mittagessen!
        </p>
        <img
          alt="Kindergarten"
          src="/images/info_5.png"
          className="paragraph-pic right"
        />
        <p className="paragraph">
          Sollte dein Kind Allergien oder Unverträglichkeiten haben wird darauf
          selbstverständlich Rücksicht genommen! Legst du Wert auf vegetarische
          oder vegane Ernährung? Achte auf die entsprechenden Tags!
        </p>
        <div className="col center-all">
          <StyledMainButton
            startIcon={<Search />}
            variant="contained"
            sx={{
              marginBottom: "88px",
            }}
          >
            <Link to="/search">Zur Suche</Link>
          </StyledMainButton>
        </div>
      </div>
    </>
  );
}

export default CreatePage;
