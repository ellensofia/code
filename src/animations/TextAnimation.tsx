import { useEffect, useState } from "react";

export default function TextAnimation() {
  const [shownElements, setShownElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !shownElements.has(entry.target)) {
          entry.target.classList.add("show");
          const newShownElements = new Set(shownElements);
          newShownElements.add(entry.target);
          setShownElements(newShownElements);
        }
      });
    });

    const hiddenTextElements = document.querySelectorAll(".hidden");
    hiddenTextElements.forEach((element) => observer.observe(element));

    return () => {
      hiddenTextElements.forEach((element) => observer.unobserve(element));
    };
  }, [shownElements]);

  return null;
}
