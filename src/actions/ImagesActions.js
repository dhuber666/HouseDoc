export const constants = {
  SET_IMAGE: "SET_IMAGE"
};

export function setImage(id) {
  return {
    type: constants.SET_IMAGE,
    id
  };
}
