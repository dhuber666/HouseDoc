import { constants } from "../actions/ImagesActions";

const initialState = 1;

function image(state = initialState, action) {
  switch (action.type) {
    case constants.SET_IMAGE:
      return action.id;
    default:
      return state;
  }
}

export default image;
