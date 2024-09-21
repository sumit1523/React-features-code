import { useEffect, useState } from "react";
export default function TrafficLight() {
  const colors = ["red", "yellow", "green"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
    },
    trafficLight: {
      backgroundColor: "#333",
      padding: "10px",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    light: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      margin: "10px",
      opacity: 0.3,
      transition: "opacity 0.3s ease",
    },
  };
  return (
    <div style={styles.container}>
      <h1>Traffic Light</h1>
      <div style={styles.trafficLight}>
        {colors.map((color, index) => (
          <div
            key={color}
            style={{
              ...styles.light,
              backgroundColor: color,
              opacity: index === currentColorIndex ? 1 : 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
}
