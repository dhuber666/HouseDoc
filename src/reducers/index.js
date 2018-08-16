import { combineReducers } from "redux";
import folderReducer from "./folderReducer";
import imagesReducer from "./imagesReducer";
import currentImageReducer from "./currentImage";

const rootReducer = combineReducers({
  folders: folderReducer,
  images: imagesReducer,
  currentImage: currentImageReducer
});

export default rootReducer;
