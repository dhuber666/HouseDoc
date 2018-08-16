import React from "react";
import RoomListViewGroupItem from "./RoomListViewGroupItem";
import { withRouter } from "react-router-dom";

// This view gets a folder title and the containing items.

class RoomListViewGroup extends React.Component {
  // docs = all the "RoomListViewGroupItems with picture and title and labels"

  renderDocs = () => {
    return this.props.items.map((item, i) => (
      <RoomListViewGroupItem key={i} {...item} />
    ));
  };

  render() {
    return (
      <div className="room-list-view-group-container">
        <h2>{this.props.title}</h2>
        <hr className="style-two" />
        {this.renderDocs()}
      </div>
    );
  }
}

export default withRouter(RoomListViewGroup);
