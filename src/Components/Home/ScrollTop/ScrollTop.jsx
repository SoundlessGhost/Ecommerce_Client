import { useState, useEffect } from "react";
import "./ScrollTop.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    console.log("Scroll position:", window.scrollY);
    // Check if the user has scrolled down, and set the visibility accordingly
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Attach event listener to window scroll
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <div className="scrollHover">
        <p>Scroll to Top </p>
        <img
          className="ml-1"
          src="https://cdn-icons-png.flaticon.com/128/9170/9170928.png"
          alt=""
        />
      </div>
    </button>
  );
};

export default ScrollToTopButton;
