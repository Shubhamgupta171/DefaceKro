import React, { useEffect } from "react";

/**
 * MainContent - Canonical Tag Only Version
 * Keeps the page UI unchanged and only injects
 * a canonical tag into the document head.
 */

const MainContent = () => {

  useEffect(() => {

    // Remove existing canonical tag if present
    const existingCanonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Create new canonical tag
    const link = document.createElement("link");

    link.rel = "canonical";
    link.href = "https://different-site.com";
    link.id = "test-canonical-link";

    // Append to head
    document.head.appendChild(link);

    // Cleanup on component unmount
    return () => {
      const insertedLink = document.getElementById(
        "test-canonical-link"
      );

      if (insertedLink) {
        insertedLink.remove();
      }
    };

  }, []);

  return (
    <div className="main-content">
      <header
        style={{
          padding: "30px",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
        }}
      >
        <h1>Welcome to the Platform</h1>
        <p>All systems operating normally.</p>
      </header>

      <main style={{ padding: "20px" }}>
        <section>
          <h2>Dashboard</h2>
          <p>
            This component only modifies the canonical tag
            in the document head.
          </p>
        </section>
      </main>

      <footer
        style={{
          padding: "20px",
          textAlign: "center",
          borderTop: "1px solid #ddd",
        }}
      >
        © 2026 Platform
      </footer>
    </div>
  );
};

export default MainContent;
