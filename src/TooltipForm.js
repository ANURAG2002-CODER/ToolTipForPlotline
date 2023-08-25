import React, { useState } from "react";
import "./TooltipForm.css";

const TooltipForm = ({ buttons, onSubmit }) => {
  const [selectedButton, setSelectedButton] = useState("");
  const [tooltipText, setTooltipText] = useState("");
  const [tooltipImage, setTooltipImage] = useState(null);
  const [textSize, setTextSize] = useState("");
  const [color, setColor] = useState("");
  const [padding, setPadding] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [cornerRadius, setCornerRadius] = useState("");
  const [tooltipWidth, setTooltipWidth] = useState("");
  const [arrowWidth, setArrowWidth] = useState("");
  const [arrowHeight, setArrowHeight] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const tooltipData = {
      tooltipText,
      tooltipImage,
      textSize,
      color,
      padding,
      backgroundColor,
      cornerRadius,
      tooltipWidth,
      arrowWidth,
      arrowHeight,
    };

    onSubmit(selectedButton, tooltipData);
  };

  const handleTooltipTextChange = (event) => {
    setTooltipText(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setTooltipImage(URL.createObjectURL(file));
    }
  };

  const handleImageRemove = () => {
    setTooltipImage(null);
  };

  return (
    <div className="tooltip-form-container">
      <form className="tooltip-form" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Target Element:</td>
              <td>
                <select
                  className="form-input"
                  value={selectedButton}
                  onChange={(e) => setSelectedButton(e.target.value)}
                >
                  <option value="">Select a Button</option>
                  {buttons.map((button) => (
                    <option key={button} value={button}>
                      {button}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>Tooltip Text:</td>
              <td>
                <input
                  placeholder="input"
                  className="form-input"
                  type="text"
                  id="tooltipText"
                  value={tooltipText}
                  onChange={handleTooltipTextChange}
                />
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>Tooltip Image: </td>
              <td>
                <input
                  type="file"
                  id="tooltipImage"
                  onChange={handleImageUpload}
                />
                <button type="button" onClick={handleImageRemove}>
                  Remove Image
                </button>
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>Text Size</td>
              <td>
                <input
                  placeholder="3px"
                  className="form-input"
                  type="text"
                  id="textSize"
                  value={textSize}
                  onChange={(e) => {
                    setTextSize(e.target.value);
                    console.log(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>Text Color:</td>
              <td>
                <input
                  placeholder="input"
                  className="form-input"
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>Padding:</td>
              <td>
                <input
                  placeholder="10"
                  className="form-input"
                  type="text"
                  value={padding}
                  onChange={(e) => setPadding(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>Background Color:</td>
              <td>
                <input
                  placeholder="input"
                  className="form-input"
                  type="text"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>Corner Radius:</td>
              <td>
                <input
                  placeholder="8"
                  className="form-input"
                  type="text"
                  value={cornerRadius}
                  onChange={(e) => setCornerRadius(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>ToolTip Width:</td>
              <td>
                <input
                  placeholder="200px"
                  className="form-input"
                  type="text"
                  value={tooltipWidth}
                  onChange={(e) => setTooltipWidth(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>Arrow Width:</td>
              <td>
                <input
                  placeholder="20"
                  className="form-input"
                  type="text"
                  value={arrowWidth}
                  onChange={(e) => setArrowWidth(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>Arrow Height:</td>
              <td>
                <input
                  placeholder="10"
                  className="form-input"
                  type="text"
                  value={arrowHeight}
                  onChange={(e) => setArrowHeight(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button className="form-button" type="submit">
          Apply Tooltip Settings
        </button>
      </form>
    </div>
  );
};

export default TooltipForm;
