import { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider";

export const Modal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleOpen = () => {
    setShow(true);
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  return (
    <div>
      <div id="myModal" className={`modal ${show ? "show" : "hide"}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <span className="close-button" onClick={handleClose}>
                &times;
              </span>
            </div>
            <div className="modal-body">
              <ImageSlider />
            </div>
            <div className="modal-footer">
              <button className="close-button" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleOpen}>Open Modal</button>
    </div>
  );
};
