import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const elementId = hash.substring(1);

    const scrollToElement = () => {
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    requestAnimationFrame(() => {
      scrollToElement();
    });
  }, [pathname, hash]);

  return null;
}

export default ScrollToHash;
