import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Languages } from "lucide-react";

const TranslateBtn = () => {
  const [language, setLanguage] = useState<"English" | "Myanmar">(() => {
    return (
      (localStorage.getItem("language") as "English" | "Myanmar") || "English"
    );
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    // Dispatch a custom event when language changes
    window.dispatchEvent(
      new CustomEvent("languageChanged", { detail: language })
    );
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "English" ? "Myanmar" : "English"));
  };

  return (
    <Button
      className="rounded-lg hover:cursor-pointer ms-1"
      variant="outline"
      onClick={toggleLanguage}
    >
      <span className="hidden md:block lg:block xl:block">
        <Languages />
      </span>
      {language === "English" ? (
        <>
          <span className="hidden md:block lg:block xl:block">
            Translate to
          </span>{" "}
          Myanmar
        </>
      ) : (
        <>
          <span className="hidden md:block lg:block xl:block">
            Translate to
          </span>{" "}
          English
        </>
      )}
    </Button>
  );
};

export default TranslateBtn;
