import React from "react";

const TextRenderer = (props) => {
  return (
    <div className={props.classToAdd}>
      <span>{props.textToRender}</span>
    </div>
  );
};

export default TextRenderer;
