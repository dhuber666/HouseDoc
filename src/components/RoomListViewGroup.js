import React from "react";
import RoomListViewGroupItem from "./RoomListViewGroupItem";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setImage } from "../actions/ImagesActions";

// This view gets a folder title and the containing items.

class RoomListViewGroup extends React.Component {
  // docs = all the "RoomListViewGroupItems with picture and title and labels"

  renderDocs = () => {
    return this.props.images.map((item, i) => (
      <RoomListViewGroupItem key={i} {...item} setImage={this.props.setImage} />
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

const mapDispatchToProps = dispatch => {
  debugger;
  return {
    setImage: id => dispatch(setImage(id))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(RoomListViewGroup)
);
