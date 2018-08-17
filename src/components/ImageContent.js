import React from "react";

const ImageContent = ({ title, tags }) => (
  <div className="item-text-section">
    <h3>{title}</h3>
    <i className="fa fa-tag fa-2x" />
    {tags.map((tag, id) => (
      <p key={id} className="p-item">
        {tag};
      </p>
    ))}
  </div>
);

export default ImageContent;
