import { useEffect, useState } from "react";

const useGetLanguage = () => {
  const [language, setLanguage] = useState<"English" | "Myanmar">(() => {
    return (
      (localStorage.getItem("language") as "English" | "Myanmar") || "English"
    );
  });

  useEffect(() => {
    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setLanguage(customEvent.detail);
    };

    window.addEventListener("languageChanged", handleLangChange);

    return () => {
      window.removeEventListener("languageChanged", handleLangChange);
    };
  }, []);
  return language;
};

export default useGetLanguage;
