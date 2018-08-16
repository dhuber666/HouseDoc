const initialState = {
  1: {
    id: 1,
    img:
      "https://cdn.connox.de/m/100027/232979/media/Raeume/Wohnzimmer/Wohnzimmer-Red-Edition.jpg",
    title: "Wand links Eingang",
    tags: ["Elektro", "Wasser"],
    folder: "Wohnzimmer"
  }
};

function images(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default images;
