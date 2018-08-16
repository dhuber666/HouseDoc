import React from "react";
import RoomListViewGroup from "./RoomListViewGroup";

class RoomListView extends React.Component {
  state = {
    folders: [
      {
        title: "Wohnzimmer",
        items: [
          {
            id: 1,
            img:
              "https://cdn.connox.de/m/100027/232979/media/Raeume/Wohnzimmer/Wohnzimmer-Red-Edition.jpg",
            title: "Wand links Eingang",
            tags: ["Elektro", "Wasser"],
            folder: "Wohnzimmer"
          },
          {
            id: 2,

            img:
              "http://www.breitschopf.at/wp-content/uploads/2017/03/BS_Domino_Kerneiche_2.jpg",
            title: "Wand rechts Eingang",
            tags: ["Wasser"],
            folder: "Wohnzimmer"
          }
        ]
      },
      {
        title: "Küche",
        items: [
          {
            id: 3,
            img: "https://www.kleiner.de/img/bad-wellness-sanibel-start-01.jpg",
            title: "Wand links Eingang",
            tags: ["Elektro"],
            folder: "Wohnzimmer"
          },
          {
            id: 4,
            img:
              "  https://www.ikea.com/ms/de_AT/img/FY17/visnav/seo_image/Sofas%20und%20Sessel__SOFAS_Sessel.jpg",
            title: "Wand links Eingang",
            tags: ["Elektro"],
            folder: "Wohnzimmer"
          }
        ]
      }
    ]
  };

  renderFolders = () => {
    return this.state.folders.map((folder, i) => {
      return (
        <RoomListViewGroup key={i} title={folder.title} items={folder.items} />
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

export default RoomListView;
