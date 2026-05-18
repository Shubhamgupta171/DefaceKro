import { useEffect } from "react";

const MainContent = () => {
  useEffect(() => {
    // L1 Trigger: SEO Meta-Tag Canonical Change
    const link = document.createElement("link");
    link.rel = "canonical";
    link.href = "https://different-site.com";
    document.head.appendChild(link);

    // L4 Test Case: Extract JS Semantics (Manifesto hidden in JS string)
    // Uncomment the string below to test if the engine detects manifesto hidden in JS
    /*
    const maliciousScriptStr = "we have taken control this site has been seized your security means nothing";
    console.log(maliciousScriptStr);
    */

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div>
      {/* 
        L4 Test Case: Semantic Content Drift
        To test this, completely remove all your normal text content from this page and replace 
        it entirely with this block of random text. This simulates a completely replaced page 
        to trigger `semantic_content_drift` via Token Jaccard Divergence.
      */}
      {/* 
      <div style={{ display: 'block' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. 
        Aenean in viverra nibh, id volutpat felis. Quisque id nisl iaculis, tempor dolor vel, 
        pretium elit. Praesent scelerisque egestas aliquet. Integer tempor diam et magna mattis 
        pellentesque. Vestibulum scelerisque tellus sed tortor sodales tempor.
      </div> 
      */}
    </div>
  );
};

export default MainContent;
