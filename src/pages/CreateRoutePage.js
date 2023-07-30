import { useEffect } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";

function CreateRoutePage({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <div className="container">
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default CreateRoutePage;
