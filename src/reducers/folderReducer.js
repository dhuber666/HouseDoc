const initialState = [
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
  },
  {
    id: 2,
    title: "Küche",
    images: [
      {
        id: 2,
        img:
          "https://cdn.connox.de/m/100027/232979/media/Raeume/Wohnzimmer/Wohnzimmer-Red-Edition.jpg",
        title: "Wand links Eingang asdfasdfasdf",
        tags: ["Elektro", "Wasser"],
        folder: "Wohnzimmer"
      },
      {
        id: 3,
        img:
          "https://upload.wikimedia.org/wikipedia/commons/a/a4/White-tiger-2407799_1280.jpg",
        title: "Abwasch, rechts",
        tags: ["Elektro", "Wasser"],
        folder: "Wohnzimmer"
      }
    ]
  }
];

function folders(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default folders;
