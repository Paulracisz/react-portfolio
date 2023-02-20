// libraries
import { useEffect, useRef } from "react";

// stylesheets
import "../stylesheets/biweekly.css";

export default function Biweeklysprints() {
  const animationRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // animationRef.play()
          } else {
            // animationRef.pause()
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(animationRef.current);
  }, []);

  return (
    <div className="biweek-grid-container">
      <lottie-player
        className="lottie-animation"
        ref={animationRef}
        autoplay
        // controls
        loop
        mode="normal"
        src="https://assets10.lottiefiles.com/packages/lf20_tno6cg2w.json"
      ></lottie-player>
    </div>
  );
}
