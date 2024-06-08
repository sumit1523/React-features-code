import { useEffect, useState } from "react";
import { imageUrls } from "./data.js";

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const imglength = imageUrls.length;

  const handlePreviousButton = () => {
    setActiveIndex(activeIndex === 1 ? imglength - 1 : activeIndex - 1);
  };

  const handleNextButton = () => {
    setActiveIndex(activeIndex === imglength - 1 ? 1 : activeIndex + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextButton();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex]);

  return (
    <>
      <h1>Image Slider</h1>
      <div style={{ display: "flex" }}>
        <button
          style={{ outline: "none" }}
          onClick={() => handlePreviousButton()}
        >
          Previous
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "700px",
            height: "500px",
          }}
        >
          {imageUrls.map((item, i) => (
            <img
              className={`${activeIndex === i ? "show" : "hide"}`}
              key={`img- ${i}`}
              src={item}
              alt="img"
            />
          ))}
        </div>
        <button style={{ outline: "none" }} onClick={() => handleNextButton()}>
          Next
        </button>
      </div>
    </>
  );
};
export default ImageSlider;
