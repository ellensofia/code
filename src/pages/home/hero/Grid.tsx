import { useEffect, useState } from "react";

export default function Grid() {
  const [isGridHidden, setIsGridHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= (100 * window.innerHeight) / 100) {
        setIsGridHidden(true);
      } else {
        setIsGridHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`grid-container ${isGridHidden ? "grid-hidden" : ""}`}>
      {[...Array(1036)].map((_, index) => (
        <div
          className={`grid-item ${isGridHidden ? "grid-hidden" : ""}`}
          key={index}
        />
      ))}
    </div>
  );
}
