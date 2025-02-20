import { useEffect, useState } from "react";
import upArrow from "../assets/Images/up-arrow-svgrepo-com.svg"; // Import SVG correctly

const ScrollToTop = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Function to calculate scroll percentage
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    setScrollPercentage(scrollPercent);
    setIsVisible(scrollTop > 100); // Show button after scrolling 100px
  };

  // Scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center">
      {/* Scroll-to-Top Button with Percentage */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all"
          style={{
            background: `conic-gradient(#8750f7 ${scrollPercentage}%, #e5e7eb ${scrollPercentage}%)`,
          }}
        >
          {/* SVG Image */}
          <img
            src={upArrow}
            alt="Scroll to Top"
            className="w-full h-full absolute"
          />

          {/* Scroll Percentage */}
          {/* <span className="absolute text-sm font-bold text-white">
            {Math.round(scrollPercentage)}%
          </span> */}
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
