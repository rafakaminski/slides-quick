import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Select } from "antd";

const { Option } = Select;

export default function SlideNavigation({
  handleFullScreen,
  handlePreviousSlide,
  handleNextSlide,
  slideVisibleIndex,
  slideDataLength,
  selectedFont,
  setSelectedFont,
}) {
  useEffect(() => {
    function handleEventKeyboard(event) {
      if (event.key === "ArrowRight") {
        handleNextSlide();
      } else if (event.key === "ArrowLeft") {
        handlePreviousSlide();
      }
    }

    document.addEventListener("keyup", handleEventKeyboard);

    return () => {
      document.removeEventListener("keyup", handleEventKeyboard);
    };
  }, [handleNextSlide, handlePreviousSlide]);

  return (
    <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", flexWrap: "wrap" }}>
      <Button
        type="primary"
        disabled={slideDataLength === 0}
        onClick={handleFullScreen}
      >
        Slideshow
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: "1rem" }}
        disabled={slideVisibleIndex === 0}
        onClick={handlePreviousSlide}
      >
        Prev
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: "1rem" }}
        disabled={slideVisibleIndex === slideDataLength - 1}
        onClick={handleNextSlide}
      >
        Next
      </Button>

      <Select
        value={selectedFont}
        onChange={setSelectedFont}
        style={{ width: 200, marginLeft: "1rem" }}
        size="middle"
      >
        <Option value="Roboto">Roboto</Option>
        <Option value="Arial">Arial</Option>
        <Option value="Times New Roman">Times New Roman</Option>
        <Option value="Courier New">Courier New</Option>
        <Option value="Georgia">Georgia</Option>
        <Option value="Montserrat">Montserrat</Option>
        <Option value="Open Sans">Open Sans</Option>
        <Option value="Lato">Lato</Option>
      </Select>
    </div>
  );
}

SlideNavigation.propTypes = {
  handleFullScreen: PropTypes.func.isRequired,
  handlePreviousSlide: PropTypes.func.isRequired,
  handleNextSlide: PropTypes.func.isRequired,
  slideVisibleIndex: PropTypes.number.isRequired,
  slideDataLength: PropTypes.number.isRequired,
  selectedFont: PropTypes.string.isRequired,
  setSelectedFont: PropTypes.func.isRequired,
};
