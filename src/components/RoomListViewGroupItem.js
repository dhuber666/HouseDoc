import React from "react";
import { Link } from "react-router-dom";

const RoomListViewGroupItem = ({ img, title, tags, id, setImage }) => (
  <Link
    to={{ pathname: `/detail/${id}` }}
    className="room-list-view-group-item-container"
    onClick={() => setImage(id)}
  >
    <img className="image-item" src={img} />
    <div className="item-text-section">
      <h3>{title}</h3>
      <i className="fa fa-tag fa-2x" />
      {tags.map((tag, id) => (
        <p key={id} className="p-item">
          {tag};
        </p>
      ))}
    </div>
  </Link>
);

export default RoomListViewGroupItem;
