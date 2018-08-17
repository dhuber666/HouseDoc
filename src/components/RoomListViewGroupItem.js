import React from "react";
import { Link } from "react-router-dom";
import ImageContent from "./ImageContent";

const RoomListViewGroupItem = ({ img, title, tags, id, setImage }) => (
  <Link
    to={{ pathname: `/detail/${id}` }}
    className="room-list-view-group-item-container"
    onClick={() => setImage(id)}
  >
    <img className="image-item" src={img} />
    <ImageContent title={title} tags={tags} />
  </Link>
);

export default RoomListViewGroupItem;
