import React from "react";
import RoomListViewGroup from "./RoomListViewGroup";
import { connect } from "react-redux";

class RoomListView extends React.Component {
  renderFolders = () => {
    console.log(this.props.folders);
    return this.props.folders.map((folder, i) => {
      return (
        <RoomListViewGroup
          key={i}
          title={folder.title}
          images={folder.images}
        />
      );
    });
  };

  render() {
    return (
      <div className="room-list-view-container">
        {this.renderFolders()}
        <a href="/">
          <i className="fa fa-plus fa-4x plus-bottom" />
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  folders: state.folders,
  images: state.images,
  currentImage: state.currentImage
});

export default connect(mapStateToProps)(RoomListView);
