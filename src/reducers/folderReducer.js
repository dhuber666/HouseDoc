const initialState = {
  folders: [
    {
      id: 1,
      title: "Wohnzimmer",
      images: [
        {
          id: 1,
          img:
            "https://cdn.connox.de/m/100027/232979/media/Raeume/Wohnzimmer/Wohnzimmer-Red-Edition.jpg",
          title: "Wand links Eingang",
          tags: ["Elektro", "Wasser"],
          folder: "Wohnzimmer"
        }
      ]
    }
  ]
};

function folders(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default folders;
