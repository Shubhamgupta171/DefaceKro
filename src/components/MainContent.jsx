import { useEffect } from "react";

const MainContent = () => {

  useEffect(() => {

    const link = document.createElement("link");

    link.rel = "canonical";
    link.href = "https://different-site.com";

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };

  }, []);

  return null;
};

export default MainContent;
