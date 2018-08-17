import React from "react";
import { connect } from "react-redux";

import DetailViewContent from "./DetailViewContent";
import DetailViewControl from "./DetailViewControl";

// state lives in this component

class DetailView extends React.Component {
  renderDetail = () => {
    const { image } = this.props;

    return (
      <div className="detail-view-section">
        <DetailViewContent {...image} />
        <DetailViewControl />
      </div>
    );
    // TODO: Create 2 new components.
    // 1 for the image and text area
    // 1 for the DetailViewControl
    // This way when the control - edit button gets clicked we can switch out the normal image view and put it on a canvas,
    // ready to draw on it
  };

  render() {
    return (
      <div className="detail-view-container">
        {/* <h2 className="detail-view-title"> {this.props.folder} </h2> */}
        {this.renderDetail()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  image: state.images[state.currentImage],
  folder: state.images[state.currentImage].folder
}); // pass in the current selected image into the component
export default connect(mapStateToProps)(DetailView);
