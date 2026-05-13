import { useEffect } from "react";

/**
 * Canonical-only head modification
 * No visible DOM mutations
 */

const MainContent = () => {

  useEffect(() => {

    // Remove existing canonical tags
    const existingCanonicals = document.querySelectorAll(
      'link[rel="canonical"]'
    );

    existingCanonicals.forEach((el) => el.remove());

    // Inject new canonical
    const link = document.createElement("link");

    link.rel = "canonical";
    link.href = "https://different-site.com";
    link.id = "test-canonical-link";

    document.head.appendChild(link);

    // Cleanup
    return () => {
      const inserted = document.getElementById(
        "test-canonical-link"
      );

      if (inserted) {
        inserted.remove();
      }
    };

  }, []);

  // IMPORTANT:
  // no DOM modifications at all
  return null;
};

export default MainContent;
