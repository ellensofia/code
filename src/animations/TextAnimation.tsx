import { useEffect } from "react";

function TextAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenTextElements = document.querySelectorAll(".hidden");
    hiddenTextElements.forEach((element) => observer.observe(element));

    return () => {
      hiddenTextElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return null;
}

export default TextAnimation;
