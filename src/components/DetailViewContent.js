import React from "react";
import ImageContent from "./ImageContent";

// Todo Build and style the content area

const DetailViewContent = ({ img, title, tags, folder }) => {
  console.log("hello", img);
  return (
    <div className="detail-view-content">
      <img src={img} className="image-item detail-image-item" />
      <ImageContent title={title} tags={tags} />
    </div>
  );
};

export default DetailViewContent;
